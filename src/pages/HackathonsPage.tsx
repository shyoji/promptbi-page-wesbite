import { useEffect, useState, useMemo } from 'react';
import { Trophy, TrendingUp, Users, Clock, Share2, Award, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { fetchLeaderboard, LeaderboardUser } from '../services/leaderboardService';
import { prepareLinkedInShare, ShareCardData } from '../services/shareCardGenerator';
import LinkedInShareModal from '../components/LinkedInShareModal';

interface TopPerformer {
  rank: number;
  name: string;
  avatar: string;
  score: number;
  progress: number;
  isActive: boolean;
}

export default function HackathonsPage() {
  const [lastUpdated, setLastUpdated] = useState(2);
  const [topPerformers, setTopPerformers] = useState<TopPerformer[]>([]);
  const [allParticipants, setAllParticipants] = useState<TopPerformer[]>([]);
  const [leaderboardLoading, setLeaderboardLoading] = useState(true);
  const [totalParticipants, setTotalParticipants] = useState(0);
  const [displayCount, setDisplayCount] = useState(20);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [shareModalData, setShareModalData] = useState<{ imageUrl: string; postText: string; rank: number } | null>(null);

  useEffect(() => {
    fetchLeaderboardData();

    const updateTimer = setInterval(() => {
      setLastUpdated(prev => (prev === 59 ? 1 : prev + 1));
    }, 60000);

    return () => clearInterval(updateTimer);
  }, []);

  const fetchLeaderboardData = async () => {
    try {
      setLeaderboardLoading(true);
      const leaderboardData = await fetchLeaderboard('week');

      setTotalParticipants(leaderboardData.length);

      const transformUser = (user: LeaderboardUser) => {
        const initials = user.name
          .split(' ')
          .map(n => n[0])
          .join('')
          .toUpperCase()
          .slice(0, 2);

        const progress = user.totalChallenges > 0
          ? Math.min(Math.round((user.successfulChallenges / user.totalChallenges) * 100), 100)
          : 0;

        const isActive = user.accuracy > 50;

        return {
          rank: user.rank,
          name: user.name,
          avatar: initials,
          score: user.points,
          progress: progress,
          isActive: isActive
        };
      };

      const top3 = leaderboardData.slice(0, 3).map(transformUser);
      const all = leaderboardData.map(transformUser);

      setTopPerformers(top3);
      setAllParticipants(all);
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
      setTopPerformers([]);
      setAllParticipants([]);
    } finally {
      setLeaderboardLoading(false);
    }
  };

  const handleShareRank = async (performer: TopPerformer) => {
    const shareData: ShareCardData = {
      rank: performer.rank,
      name: performer.name,
      totalParticipants: totalParticipants
    };

    const { imageUrl, postText } = await prepareLinkedInShare(shareData);
    setShareModalData({ imageUrl, postText, rank: performer.rank });
    setShareModalOpen(true);
  };

  const closeShareModal = () => {
    setShareModalOpen(false);
    setShareModalData(null);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Internship Hackathon",
    "description": "Live data analytics competition with challenges in SQL, BI, and data visualization",
    "startDate": "2025-11-01",
    "endDate": "2025-11-30",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
    "location": {
      "@type": "VirtualLocation",
      "url": "https://promptbi.ai/hackathons"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "organizer": {
      "@type": "Organization",
      "name": "PromptBI",
      "url": "https://promptbi.ai"
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0D0D0F' }}>
      <SEO
        title="Data Hackathons & Analytics Competitions - Win Prizes | PromptBI"
        description="Join live data hackathons with $50K+ prize pools. Internship Hackathon featuring real-world BI challenges, SQL competitions, and analytics projects. Register now!"
        keywords="data hackathon, analytics competition, SQL hackathon, business intelligence contest, data science competition, hackathon prizes, coding challenge event, data analyst competition, DEKUT hackathon"
        ogTitle="Internship Hackathon - $50K Prize Pool"
        ogDescription="Compete in exciting data analytics challenges. Join participants worldwide for glory and prizes."
        ogImage="https://promptbi.ai/og-image-hackathon.png"
        ogType="event"
        canonical="https://promptbi.ai/hackathons"
        structuredData={structuredData}
      />
      <Navigation />

      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl top-0 left-1/4 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl bottom-0 right-1/4 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
              <Zap className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-white/90">Live Competitions</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Internship Hackathon
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Join exciting challenges, showcase your skills, and compete with the best data talent globally
            </p>
          </div>

          <div className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <Award className="w-7 h-7 text-yellow-400" />
                Top 3 Performers This Week
              </h2>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Updated {lastUpdated} min ago</span>
              </div>
            </div>

            {leaderboardLoading ? (
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
              </div>
            ) : topPerformers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {topPerformers.map((performer) => (
                <div
                  key={performer.rank}
                  className={`group relative p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                    performer.rank === 1
                      ? 'bg-gradient-to-br from-yellow-500/20 to-orange-500/10 border-yellow-500/30 shadow-lg shadow-yellow-500/20'
                      : performer.rank === 2
                      ? 'bg-gradient-to-br from-gray-400/20 to-gray-500/10 border-gray-400/30 shadow-lg shadow-gray-400/20'
                      : 'bg-gradient-to-br from-orange-600/20 to-red-500/10 border-orange-600/30 shadow-lg shadow-orange-600/20'
                  }`}
                >
                  <div className="absolute top-4 right-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl ${
                      performer.rank === 1 ? 'bg-yellow-500 text-gray-900' :
                      performer.rank === 2 ? 'bg-gray-400 text-gray-900' :
                      'bg-orange-600 text-white'
                    }`}>
                      {performer.rank}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
                        {performer.avatar}
                      </div>
                      {performer.isActive && (
                        <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 border-2 border-gray-900 rounded-full"></div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{performer.name}</h3>
                      <div className="flex items-center gap-2 text-white/70">
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-2xl font-bold text-white">{performer.score}</span>
                        <span className="text-sm">points</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm text-white/70 mb-2">
                      <span>Coding Logic</span>
                      <span className="font-semibold text-white">{performer.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${
                          performer.rank === 1 ? 'bg-gradient-to-r from-yellow-400 to-orange-500' :
                          performer.rank === 2 ? 'bg-gradient-to-r from-gray-400 to-gray-500' :
                          'bg-gradient-to-r from-orange-500 to-red-500'
                        }`}
                        style={{ width: `${performer.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleShareRank(performer)}
                    className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105 shadow-lg"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Share on LinkedIn</span>
                  </button>
                </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-white/70">
                <p>No leaderboard data available for this week</p>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-6 h-6 text-blue-400" />
                <span className="text-3xl font-bold text-white">{totalParticipants}</span>
              </div>
              <p className="text-white/70">Active Participants This Week</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-2">
                <Trophy className="w-6 h-6 text-yellow-400" />
                <span className="text-3xl font-bold text-white">$50K</span>
              </div>
              <p className="text-white/70">Total Prize Pool</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-6 h-6 text-purple-400" />
                <span className="text-3xl font-bold text-white">12</span>
              </div>
              <p className="text-white/70">Days Remaining</p>
            </div>
          </div>

          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                <Users className="w-10 h-10 text-blue-400" />
                All Active Participants
              </h2>
              <p className="text-xl text-white/70 mb-6">
                Competing this week for glory and prizes
              </p>
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-white/20 backdrop-blur-sm">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-bold text-lg">{totalParticipants}</span>
                <span className="text-white/70">active competitors</span>
              </div>
            </div>

            {leaderboardLoading ? (
              <div className="flex justify-center items-center py-20">
                <div className="relative">
                  <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Trophy className="w-6 h-6 text-blue-400 animate-pulse" />
                  </div>
                </div>
              </div>
            ) : allParticipants.length > 0 ? (
              <div>
                <div className="space-y-3">
                  {allParticipants.slice(0, displayCount).map((participant, index) => (
                  <div
                    key={participant.rank}
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-white/5 via-white/5 to-transparent border border-white/10 backdrop-blur-sm hover:border-white/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-300"></div>

                    <div className="relative p-5 flex items-center gap-4">
                      <div className="relative flex-shrink-0">
                        <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-xl transition-transform duration-200 ${
                          participant.rank === 1
                            ? 'bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 text-gray-900 shadow-lg shadow-yellow-500/50'
                            : participant.rank === 2
                            ? 'bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 text-gray-900 shadow-lg shadow-gray-400/50'
                            : participant.rank === 3
                            ? 'bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/50'
                            : participant.rank <= 10
                            ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                            : 'bg-gradient-to-br from-gray-700 to-gray-800 text-white/90'
                        }`}>
                          <span className="text-2xl">#{participant.rank}</span>
                        </div>

                        {participant.rank <= 3 && (
                          <div className="absolute -top-2 -right-2 text-2xl">
                            {participant.rank === 1 ? '👑' : participant.rank === 2 ? '🥈' : '🥉'}
                          </div>
                        )}
                      </div>

                      <div className="relative flex-shrink-0">
                        <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg shadow-lg transition-transform duration-200">
                          {participant.avatar}
                        </div>

                        {participant.isActive && (
                          <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-400 border-3 border-gray-900 rounded-full shadow-lg"></div>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-bold text-white truncate">
                            {participant.name}
                          </h3>
                          {participant.rank <= 10 && (
                            <span className="flex-shrink-0 px-2 py-0.5 rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400/30 text-yellow-400 text-xs font-semibold">
                              TOP 10
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1.5">
                            <Trophy className="w-4 h-4 text-yellow-400" />
                            <span className="font-bold text-white">{participant.score}</span>
                            <span className="text-white/60">points</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <TrendingUp className="w-4 h-4 text-green-400" />
                            <span className="font-bold text-white">{participant.progress}%</span>
                            <span className="text-white/60">accuracy</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex-shrink-0 w-48 hidden lg:block">
                        <div className="flex items-center justify-between text-xs text-white/60 mb-2">
                          <span className="font-medium">Code Logic</span>
                          <span className="font-bold text-white">{participant.progress}%</span>
                        </div>
                        <div className="relative w-full h-3 bg-white/10 rounded-full overflow-hidden shadow-inner">
                          <div
                            className={`absolute inset-y-0 left-0 rounded-full transition-all duration-300 ease-out ${
                              participant.rank <= 3
                                ? 'bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500'
                                : participant.rank <= 10
                                ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'
                                : 'bg-gradient-to-r from-gray-400 to-gray-600'
                            }`}
                            style={{ width: `${participant.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      <button
                        onClick={() => handleShareRank(participant)}
                        className="flex-shrink-0 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold transition-all duration-200 flex items-center gap-2 opacity-0 group-hover:opacity-100 shadow-lg"
                      >
                        <Share2 className="w-4 h-4" />
                        <span className="hidden xl:inline">Share on LinkedIn</span>
                      </button>
                    </div>

                    <div className="lg:hidden px-5 pb-4">
                      <div className="flex items-center justify-between text-xs text-white/60 mb-2">
                        <span className="font-medium">Code Logic</span>
                        <span className="font-bold text-white">{participant.progress}%</span>
                      </div>
                      <div className="relative w-full h-2.5 bg-white/10 rounded-full overflow-hidden shadow-inner">
                        <div
                          className={`absolute inset-y-0 left-0 rounded-full transition-all duration-300 ease-out ${
                            participant.rank <= 3
                              ? 'bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500'
                              : participant.rank <= 10
                              ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'
                              : 'bg-gradient-to-r from-gray-400 to-gray-600'
                          }`}
                          style={{ width: `${participant.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  ))}
                </div>
                {displayCount < allParticipants.length && (
                  <div className="text-center mt-8">
                    <button
                      onClick={() => setDisplayCount(prev => Math.min(prev + 20, allParticipants.length))}
                      className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:scale-105"
                    >
                      Load More ({allParticipants.length - displayCount} remaining)
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 border border-white/10 mb-4">
                  <Users className="w-10 h-10 text-white/40" />
                </div>
                <p className="text-xl text-white/70">No participants data available for this week</p>
              </div>
            )}
          </div>

        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-white/20 backdrop-blur-sm text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get Leaderboard Updates
            </h2>
            <p className="text-xl text-white/70 mb-8">
              See where you stand today. Weekly email summaries delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {shareModalData && (
        <LinkedInShareModal
          isOpen={shareModalOpen}
          onClose={closeShareModal}
          imageUrl={shareModalData.imageUrl}
          postText={shareModalData.postText}
          rank={shareModalData.rank}
        />
      )}
    </div>
  );
}
