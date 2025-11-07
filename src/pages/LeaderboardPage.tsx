import { useState, useEffect } from 'react';
import { Trophy, Flame, Star, Medal, TrendingUp, Award, Zap, ChevronDown, RefreshCw, Target } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { fetchLeaderboard, LeaderboardUser as ApiLeaderboardUser } from '../services/leaderboardService';

type TimeFrame = 'today' | 'week' | 'month' | 'all' | 'hackathon';

const getLevelFromString = (level: string): number => {
  switch (level) {
    case 'Expert': return 12;
    case 'Advanced': return 8;
    case 'Intermediate': return 5;
    default: return 2;
  }
};

const oldMockLeaderboardData = [
  {
    rank: 1,
    username: 'AlexR_21',
    avatar: '👨‍💻',
    level: 12,
    challenges: 45,
    streak: 15,
    badges: [
      { name: 'Monthly Cham', icon: '👑', color: '#FFA500' },
      { name: 'Quiz Master', icon: '🎯', color: '#FF4444' }
    ],
    points: 1520,
    pointsChange: 4
  },
  {
    rank: 2,
    username: 'LearnWithMira',
    avatar: '👩‍🎓',
    level: 11,
    challenges: 38,
    streak: 18,
    badges: [
      { name: 'Top Designer', icon: '🎨', color: '#FF8C00' },
      { name: 'Quiz Master', icon: '🎯', color: '#FF4444' }
    ],
    points: 1340,
    pointsChange: 2
  },
  {
    rank: 3,
    username: 'CodeJunkie',
    avatar: '👨‍💼',
    level: 10,
    challenges: 42,
    streak: 15,
    badges: [
      { name: 'Code Streak', icon: '⚡', color: '#4169E1' },
      { name: 'Growth Hacker', icon: '📊', color: '#00CED1' }
    ],
    points: 1120,
    pointsChange: 1
  },
  {
    rank: 4,
    username: 'DesignGuru',
    avatar: '🧑‍🎨',
    level: 9,
    challenges: 32,
    streak: 8,
    badges: [
      { name: 'Top Designer', icon: '🎨', color: '#FF8C00' },
      { name: 'Quiz Master', icon: '🎯', color: '#FF4444' }
    ],
    points: 980,
    pointsChange: 1
  },
  {
    rank: 5,
    username: 'MathMaster',
    avatar: '🧮',
    level: 8,
    challenges: 28,
    streak: 7,
    badges: [
      { name: 'Mr. Number', icon: '🔢', color: '#32CD32' },
      { name: 'Quiz Master', icon: '🎯', color: '#FF4444' }
    ],
    points: 890,
    pointsChange: 1
  },
  {
    rank: 6,
    username: 'GrowthHacker',
    avatar: '📈',
    level: 8,
    challenges: 26,
    streak: 7,
    badges: [
      { name: 'Growth Hacker', icon: '📊', color: '#00CED1' },
      { name: 'Quiz Master', icon: '🎯', color: '#FF4444' }
    ],
    points: 832
  },
  {
    rank: 7,
    username: 'DevWizard',
    avatar: '🧙‍♂️',
    level: 7,
    challenges: 24,
    streak: 7,
    badges: [
      { name: 'Code Streak', icon: '⚡', color: '#4169E1' },
      { name: 'Quiz Master', icon: '🎯', color: '#FF4444' }
    ],
    points: 791
  },
  {
    rank: 8,
    username: 'You',
    avatar: '😊',
    level: 6,
    challenges: 18,
    streak: 4,
    badges: [
      { name: 'Quiz Master', icon: '🎯', color: '#2039E5' },
      { name: 'Fast Learner', icon: '⚡', color: '#2039E5' }
    ],
    points: 790
  },
  {
    rank: 9,
    username: 'UIUXExplorer',
    avatar: '🎨',
    level: 6,
    challenges: 20,
    streak: 6,
    badges: [
      { name: 'Top Designer', icon: '🎨', color: '#FF8C00' },
      { name: 'Quiz Master', icon: '🎯', color: '#FF4444' }
    ],
    points: 788
  },
  {
    rank: 10,
    username: 'DataNinja',
    avatar: '🥷',
    level: 5,
    challenges: 15,
    streak: 5,
    badges: [
      { name: 'Data Pro', icon: '📊', color: '#00CED1' }
    ],
    points: 720
  },
  {
    rank: 11,
    username: 'TechSavvy',
    avatar: '💻',
    level: 5,
    challenges: 14,
    streak: 3,
    badges: [
      { name: 'Fast Learner', icon: '⚡', color: '#FFD700' }
    ],
    points: 685
  },
  {
    rank: 12,
    username: 'CreativeMinds',
    avatar: '🎭',
    level: 4,
    challenges: 12,
    streak: 4,
    badges: [
      { name: 'Creative', icon: '🎨', color: '#FF8C00' }
    ],
    points: 650
  }
];

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Expert': return '#FFA500';
    case 'Advanced': return '#2039E5';
    case 'Intermediate': return '#00CED1';
    default: return '#32CD32';
  }
};

export default function LeaderboardPage() {
  const [timeFrame, setTimeFrame] = useState<TimeFrame>('month');
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [leaderboardData, setLeaderboardData] = useState<ApiLeaderboardUser[]>([]);
  const [filteredData, setFilteredData] = useState<ApiLeaderboardUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  const loadLeaderboard = async (showRefreshIndicator = false) => {
    try {
      if (showRefreshIndicator) {
        setIsRefreshing(true);
      } else {
        setIsLoading(true);
      }
      setError(null);

      const data = await fetchLeaderboard(timeFrame);

      setLeaderboardData(data);
      setFilteredData(data);
    } catch (err) {
      console.error('Error loading leaderboard:', err);
      setError('Failed to load leaderboard data. Please try again.');
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    loadLeaderboard();
  }, [timeFrame]);

  useEffect(() => {
    if (selectedLevel === 'all') {
      setFilteredData(leaderboardData);
    } else {
      const filtered = leaderboardData.filter(user => user.level === selectedLevel);
      setFilteredData(filtered);
    }
  }, [selectedLevel, leaderboardData]);

  const uniqueLevels = Array.from(new Set(leaderboardData.map(user => user.level))).sort();

  const currentUserRank = 8;
  const pointsToTop10 = 70;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Data Analytics Leaderboard",
    "description": "Rankings of data analysts based on challenge completion, accuracy, and skill levels",
    "numberOfItems": leaderboardData.length
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Data Analytics Leaderboard - Top Performers & Coding Challenges | PromptBI"
        description="View real-time rankings of data analysts completing SQL challenges, coding logic tests, and BI projects. Join competitions, track progress, and showcase your skills."
        keywords="data analytics leaderboard, SQL challenge rankings, coding competition, data analyst skills assessment, hackathon leaderboard, programming challenges, data science competition, skill tracking"
        ogTitle="Data Analytics Leaderboard - Compete with Top Analysts"
        ogDescription="Real-time rankings of data professionals completing challenges. Track your progress and compete globally."
        ogImage="https://promptbi.ai/og-image-leaderboard.png"
        canonical="https://promptbi.ai/leaderboard"
        structuredData={structuredData}
      />
      <Navigation />

      <div className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-4xl font-bold" style={{ color: '#0F0E0E' }}>Leaderboard</h1>
              <p className="text-gray-600 mt-2">Compete with learners worldwide and climb to the top</p>
            </div>
            <button
              onClick={() => loadLeaderboard(true)}
              disabled={isRefreshing}
              className="p-3 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 transition-all disabled:opacity-50"
              title="Refresh leaderboard"
            >
              <RefreshCw className={`w-5 h-5 text-gray-600 ${isRefreshing ? 'animate-spin' : ''}`} />
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex gap-2 bg-white rounded-xl p-1.5 shadow-sm border border-gray-200">
              <button
                onClick={() => setTimeFrame('today')}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  timeFrame === 'today'
                    ? 'text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                style={timeFrame === 'today' ? { backgroundColor: '#2039E5' } : {}}
              >
                Today
              </button>
              <button
                onClick={() => setTimeFrame('week')}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  timeFrame === 'week'
                    ? 'text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                style={timeFrame === 'week' ? { backgroundColor: '#2039E5' } : {}}
              >
                This Week
              </button>
              <button
                onClick={() => setTimeFrame('month')}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  timeFrame === 'month'
                    ? 'text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                style={timeFrame === 'month' ? { backgroundColor: '#2039E5' } : {}}
              >
                This Month
              </button>
              <button
                onClick={() => setTimeFrame('all')}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  timeFrame === 'all'
                    ? 'text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                style={timeFrame === 'all' ? { backgroundColor: '#2039E5' } : {}}
              >
                All Time
              </button>
              <button
                onClick={() => setTimeFrame('hackathon')}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
                  timeFrame === 'hackathon'
                    ? 'text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                style={timeFrame === 'hackathon' ? { backgroundColor: '#2039E5' } : {}}
              >
                <Trophy className="w-4 h-4" />
                Hackathon
              </button>
            </div>

            <div className="relative">
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="appearance-none px-5 py-2.5 pr-10 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              >
                <option value="all">All Levels</option>
                {uniqueLevels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <span className="text-red-600 text-xl">⚠️</span>
              </div>
              <h3 className="text-lg font-bold text-red-900">Error Loading Leaderboard</h3>
            </div>
            <p className="text-red-700 mb-4">{error}</p>
            <button
              onClick={() => loadLeaderboard(true)}
              className="px-6 py-2.5 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        )}

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-16 h-16 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
            <p className="text-gray-600 font-medium">Loading leaderboard data...</p>
          </div>
        ) : leaderboardData.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📊</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No Data Available</h3>
            <p className="text-gray-600">No leaderboard data found for the selected time period.</p>
          </div>
        ) : (
          <>
            <div className="rounded-2xl p-8 mb-8 text-white relative overflow-hidden shadow-lg" style={{ background: 'linear-gradient(135deg, #2039E5 0%, #1a2ec9 100%)' }}>
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, white 0%, transparent 70%)', transform: 'translate(30%, -30%)' }}></div>

              <div className="relative z-10 max-w-3xl">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-8 h-8" />
                  <h2 className="text-3xl font-bold">Join the Competition!</h2>
                </div>
                <p className="text-xl opacity-95 mb-2">
                  <span className="font-bold text-2xl">{leaderboardData.length}</span> learners competing this {timeFrame}
                </p>
                <p className="text-base opacity-85 mb-6">
                  Complete challenges, improve your accuracy, and climb higher on the leaderboard.
                </p>
                <button
                  onClick={() => window.location.href = 'https://app.promptbi.ai/register/'}
                  className="bg-white px-8 py-3.5 rounded-xl font-semibold hover:scale-105 transition-all shadow-lg flex items-center gap-2 group"
                  style={{ color: '#2039E5' }}
                >
                  <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Start Learning
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {filteredData.slice(0, 3).map((user) => (
                <div
                  key={user.rank}
                  className="bg-white rounded-2xl p-6 shadow-sm border-2 border-transparent hover:border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="text-5xl group-hover:scale-110 transition-transform">{user.avatar}</div>
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-lg"
                        style={{
                          backgroundColor: user.rank === 1 ? '#FFD700' : user.rank === 2 ? '#C0C0C0' : '#CD7F32'
                        }}
                      >
                        {user.rank === 1 ? '👑' : user.rank}
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 font-bold text-lg" style={{ color: '#2039E5' }}>
                      <Star className="w-5 h-5" style={{ fill: '#2039E5' }} />
                      <span>{user.points.toFixed(1)}</span>
                    </div>
                  </div>

                  <h3 className="font-bold text-xl mb-4" style={{ color: '#0F0E0E' }}>{user.name}</h3>

                  <div className="space-y-3 mb-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Award className="w-4 h-4" />
                        <span>{user.level}</span>
                      </div>
                      <span
                        className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                        style={{ backgroundColor: getLevelColor(user.level) }}
                      >
                        {user.level}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Trophy className="w-4 h-4" />
                      <span>{user.totalChallenges} challenges</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Target className="w-4 h-4 text-green-500" />
                      <span>{user.accuracy.toFixed(1)}% accuracy</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-3 border-t border-gray-100">
                    <div className="text-center">
                      <div className="text-xs text-gray-500 mb-1">Beginner</div>
                      <div className="text-sm font-bold" style={{ color: '#32CD32' }}>{user.beginnerLevel}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-gray-500 mb-1">Inter.</div>
                      <div className="text-sm font-bold" style={{ color: '#00CED1' }}>{user.intermediateLevel}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-gray-500 mb-1">Expert</div>
                      <div className="text-sm font-bold" style={{ color: '#FFA500' }}>{user.expertLevel}</div>
                    </div>
                  </div>
                </div>
              ))}
        </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead style={{ backgroundColor: '#f8f9fa' }}>
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider" style={{ color: '#0F0E0E' }}>
                        Rank
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider" style={{ color: '#0F0E0E' }}>
                        User
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider" style={{ color: '#0F0E0E' }}>
                        Level
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider" style={{ color: '#0F0E0E' }}>
                        Challenges
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider" style={{ color: '#0F0E0E' }}>
                        Accuracy
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider" style={{ color: '#0F0E0E' }}>
                        Progress
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider" style={{ color: '#0F0E0E' }}>
                        Points
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.slice(3).map((user) => (
                      <tr
                        key={user.rank}
                        onMouseEnter={() => setHoveredRow(user.rank)}
                        onMouseLeave={() => setHoveredRow(null)}
                        className={`border-b border-gray-100 transition-all duration-200 cursor-pointer ${
                          hoveredRow === user.rank ? 'bg-gray-50 shadow-sm' : 'bg-white'
                        }`}
                      >
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold" style={{ color: '#0F0E0E' }}>
                              {user.rank}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-3">
                            <span className={`transition-transform ${hoveredRow === user.rank ? 'scale-110' : 'scale-100'}`} style={{ fontSize: '1.75rem' }}>
                              {user.avatar}
                            </span>
                            <div className="text-sm font-semibold" style={{ color: '#0F0E0E' }}>
                              {user.name}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-2">
                            <span
                              className="px-2.5 py-1 rounded-lg text-xs font-bold text-white"
                              style={{ backgroundColor: getLevelColor(user.level) }}
                            >
                              {user.level}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-2">
                            <Trophy className="w-4 h-4 text-gray-400" />
                            <span className="text-sm font-medium text-gray-700">{user.totalChallenges}</span>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-50 w-fit">
                            <Target className="w-4 h-4 text-green-500" />
                            <span className="text-sm font-semibold text-green-600">{user.accuracy.toFixed(1)}%</span>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex gap-2">
                            <div className="px-2 py-1 rounded text-xs font-semibold bg-green-100 text-green-700" title="Beginner Level">
                              B: {user.beginnerLevel}
                            </div>
                            <div className="px-2 py-1 rounded text-xs font-semibold bg-blue-100 text-blue-700" title="Intermediate Level">
                              I: {user.intermediateLevel}
                            </div>
                            <div className="px-2 py-1 rounded text-xs font-semibold bg-orange-100 text-orange-700" title="Expert Level">
                              E: {user.expertLevel}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-1.5 font-bold text-base" style={{ color: '#2039E5' }}>
                            <Star className="w-5 h-5" style={{ fill: '#2039E5' }} />
                            <span>{user.points.toFixed(1)}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}
