interface ApiLeaderboardUser {
  email: string;
  name: string;
  challengeTaken: number;
  successChallenge: number;
  failedChallenge: number;
  begineerSuccess: number;
  intermediateSuccess: number;
  expertSuccess: number;
  totalPoints: number;
  accuracy: number;
}

export interface LeaderboardUser {
  rank: number;
  name: string;
  email: string;
  totalChallenges: number;
  successfulChallenges: number;
  failedChallenges: number;
  beginnerLevel: number;
  intermediateLevel: number;
  expertLevel: number;
  points: number;
  accuracy: number;
  level: string;
  avatar: string;
}

const API_BASE_URL = 'https://be-prod.promptbi.ai/api/v1/p';
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000;

const getDateRange = (timeFrame: 'today' | 'week' | 'month' | 'all'): { fromDate: string; toDate: string } => {
  const today = new Date();
  const toDate = today.toISOString().split('T')[0];

  let fromDate: string;

  switch (timeFrame) {
    case 'today': {
      fromDate = toDate;
      break;
    }
    case 'week': {
      const weekAgo = new Date(today);
      weekAgo.setDate(weekAgo.getDate() - 7);
      fromDate = weekAgo.toISOString().split('T')[0];
      break;
    }
    case 'month': {
      const monthAgo = new Date(today);
      monthAgo.setMonth(monthAgo.getMonth() - 1);
      fromDate = monthAgo.toISOString().split('T')[0];
      break;
    }
    case 'all': {
      fromDate = '2024-01-01';
      break;
    }
    default:
      fromDate = toDate;
  }

  return { fromDate, toDate };
};

const getUserLevel = (beginnerSuccess: number, intermediateSuccess: number, expertSuccess: number): string => {
  const totalSuccesses = beginnerSuccess + intermediateSuccess + expertSuccess;

  if (totalSuccesses === 0) return 'Beginner';

  if (expertSuccess >= 5) return 'Expert';
  if (intermediateSuccess >= 5) return 'Advanced';
  if (beginnerSuccess >= 5) return 'Intermediate';

  return 'Beginner';
};

const getAvatar = (name: string): string => {
  const avatars = ['👨‍💻', '👩‍💻', '🧑‍💻', '👨‍🎓', '👩‍🎓', '🧑‍🎓', '👨‍💼', '👩‍💼', '🧑‍💼', '🧙‍♂️', '🧙‍♀️', '🥷', '💻', '🎭', '🎨', '📊', '🔢', '📈'];
  const index = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % avatars.length;
  return avatars[index];
};

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function fetchWithRetry(url: string, options: RequestInit, retries = MAX_RETRIES): Promise<Response> {
  try {
    const response = await fetch(url, options);

    if (!response.ok && retries > 0) {
      await delay(RETRY_DELAY);
      return fetchWithRetry(url, options, retries - 1);
    }

    return response;
  } catch (error) {
    if (retries > 0) {
      console.warn(`Fetch failed, retrying... (${retries} attempts left)`);
      await delay(RETRY_DELAY);
      return fetchWithRetry(url, options, retries - 1);
    }
    throw error;
  }
}

export async function fetchLeaderboard(
  timeFrame: 'today' | 'week' | 'month' | 'all' | 'hackathon' = 'month'
): Promise<LeaderboardUser[]> {
  let fromDate: string;
  let toDate: string;

  if (timeFrame === 'hackathon') {
    fromDate = '2025-10-18';
    toDate = '2025-10-20';
  } else {
    const dateRange = getDateRange(timeFrame);
    fromDate = dateRange.fromDate;
    toDate = dateRange.toDate;
  }

  const url = `${API_BASE_URL}/leaderboard?fromDate=${fromDate}&toDate=${toDate}`;

  try {
    const response = await fetchWithRetry(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*',
      },
      credentials: 'include',
      mode: 'cors',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ApiLeaderboardUser[] = await response.json();

    const sortedData = [...data].sort((a, b) => b.totalPoints - a.totalPoints);

    return sortedData.map((user, index) => ({
      rank: index + 1,
      name: user.name || 'Anonymous',
      email: user.email,
      totalChallenges: user.challengeTaken || 0,
      successfulChallenges: user.successChallenge || 0,
      failedChallenges: user.failedChallenge || 0,
      beginnerLevel: user.begineerSuccess || 0,
      intermediateLevel: user.intermediateSuccess || 0,
      expertLevel: user.expertSuccess || 0,
      points: user.totalPoints || 0,
      accuracy: user.accuracy || 0,
      level: getUserLevel(user.begineerSuccess || 0, user.intermediateSuccess || 0, user.expertSuccess || 0),
      avatar: getAvatar(user.name || 'User'),
    }));
  } catch (error) {
    console.error('Failed to fetch leaderboard after retries:', error);
    throw error;
  }
}
