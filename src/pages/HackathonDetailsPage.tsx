import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Calendar,
  Users,
  MapPin,
  Award,
  Trophy,
  Clock,
  CheckCircle,
  Timer,
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HackathonRegistrationModal from '../components/HackathonRegistrationModal';
import RegistrationConfirmationModal from '../components/RegistrationConfirmationModal';
import { supabase } from '../lib/supabase';

interface Award {
  position: string;
  prize: string;
  description?: string;
}

interface Winner {
  position: number;
  name: string;
  project?: string;
  prize?: string;
}

interface Hackathon {
  id: string;
  title: string;
  slug: string;
  description: string;
  full_description: string;
  thumbnail_url?: string;
  start_date: string;
  end_date: string;
  registration_deadline: string;
  status: 'upcoming' | 'ongoing' | 'completed';
  registered_participants: number;
  max_participants?: number;
  awards: Award[];
  winners: Winner[];
  partner_name?: string;
  partner_logo_url?: string;
  location?: string;
}

export default function HackathonDetailsPage() {
  const { slug } = useParams<{ slug: string }>();
  const [hackathon, setHackathon] = useState<Hackathon | null>(null);
  const [loading, setLoading] = useState(true);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (slug) {
      fetchHackathon();
    }
  }, [slug]);

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(20, 0, 0, 0);

      const endTimeUTC = tomorrow.getTime() - (3 * 60 * 60 * 1000);
      const endTime = new Date(endTimeUTC);

      const diff = endTime.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeRemaining({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeRemaining({ hours, minutes, seconds });
    };

    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(interval);
  }, []);

  const fetchHackathon = async () => {
    try {
      const { data, error } = await supabase
        .from('hackathons')
        .select('*')
        .eq('slug', slug)
        .maybeSingle();

      if (error) throw error;

      setHackathon(data);
    } catch (error) {
      console.error('Error fetching hackathon:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatDateTime = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getStatusBadge = (status: string) => {
    const badges = {
      upcoming: 'bg-blue-100 text-blue-800',
      ongoing: 'bg-green-100 text-green-800',
      completed: 'bg-gray-100 text-gray-800',
    };
    return badges[status as keyof typeof badges] || badges.upcoming;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  if (!hackathon) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Hackathon Not Found
            </h1>
            <Link
              to="/hackathons"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              ← Back to Hackathons
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative h-64 md:h-96 bg-gradient-to-br from-blue-500 to-purple-600">
              {hackathon.thumbnail_url ? (
                <img
                  src={hackathon.thumbnail_url}
                  alt={hackathon.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Trophy className="w-32 h-32 text-white opacity-50" />
                </div>
              )}
              <div className="absolute top-6 right-6">
                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusBadge(
                    hackathon.status
                  )}`}
                >
                  {hackathon.status.charAt(0).toUpperCase() +
                    hackathon.status.slice(1)}
                </span>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {hackathon.title}
                </h1>
                {hackathon.partner_name && (
                  <div className="flex items-center gap-3 text-gray-600 mb-6">
                    <span className="text-sm">In partnership with</span>
                    <span className="font-semibold text-blue-600">
                      {hackathon.partner_name}
                    </span>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                  <Calendar className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Event Dates</p>
                    <p className="font-semibold text-gray-900">
                      {formatDate(hackathon.start_date)}
                    </p>
                    <p className="text-sm text-gray-600">to</p>
                    <p className="font-semibold text-gray-900">
                      {formatDate(hackathon.end_date)}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                  <Users className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Participants</p>
                    <p className="font-semibold text-gray-900 text-2xl">
                      {hackathon.registered_participants}
                    </p>
                    {hackathon.max_participants && (
                      <p className="text-sm text-gray-600">
                        of {hackathon.max_participants} max
                      </p>
                    )}
                  </div>
                </div>

                {hackathon.location && (
                  <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg">
                    <MapPin className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Location</p>
                      <p className="font-semibold text-gray-900">
                        {hackathon.location}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {hackathon.status !== 'completed' && (
                <>
                  <div className="mb-8 p-6 bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-xl">
                    <div className="flex items-center gap-3 mb-4">
                      <Timer className="w-6 h-6 text-red-600 flex-shrink-0" />
                      <h3 className="text-xl font-bold text-gray-900">
                        Time Remaining
                      </h3>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-white rounded-lg p-4 text-center shadow-md">
                        <div className="text-4xl font-bold text-red-600 mb-1">
                          {timeRemaining.hours.toString().padStart(2, '0')}
                        </div>
                        <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                          Hours
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-4 text-center shadow-md">
                        <div className="text-4xl font-bold text-red-600 mb-1">
                          {timeRemaining.minutes.toString().padStart(2, '0')}
                        </div>
                        <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                          Minutes
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-4 text-center shadow-md">
                        <div className="text-4xl font-bold text-red-600 mb-1">
                          {timeRemaining.seconds.toString().padStart(2, '0')}
                        </div>
                        <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                          Seconds
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-center text-sm text-gray-700 font-medium">
                      Hackathon ends at 8:00 PM EAT tomorrow
                    </p>
                  </div>

                  <div className="mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start gap-3">
                    <Clock className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">
                        Registration Deadline
                      </p>
                      <p className="text-gray-700">
                        {formatDateTime(hackathon.registration_deadline)}
                      </p>
                    </div>
                  </div>
                </>
              )}

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  About This Hackathon
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 whitespace-pre-line">
                  {hackathon.full_description}
                </div>
              </div>

              {hackathon.awards && hackathon.awards.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Award className="w-6 h-6 text-yellow-500" />
                    Prizes & Awards
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {hackathon.awards.map((award, index) => (
                      <div
                        key={index}
                        className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg border border-yellow-200"
                      >
                        <p className="text-sm font-semibold text-gray-600 mb-2">
                          {award.position}
                        </p>
                        <p className="text-2xl font-bold text-gray-900 mb-2">
                          {award.prize}
                        </p>
                        {award.description && (
                          <p className="text-sm text-gray-600">
                            {award.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {hackathon.status === 'completed' &&
                hackathon.winners &&
                hackathon.winners.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                      <Trophy className="w-6 h-6 text-yellow-500" />
                      Hackathon Winners
                    </h2>
                    <div className="space-y-4">
                      {hackathon.winners.map((winner, index) => {
                        const positionColors = [
                          'from-yellow-400 to-yellow-600',
                          'from-gray-300 to-gray-500',
                          'from-orange-400 to-orange-600',
                        ];
                        const positionLabels = [
                          '1st Place',
                          '2nd Place',
                          '3rd Place',
                        ];

                        return (
                          <div
                            key={index}
                            className="p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
                          >
                            <div className="flex items-center gap-4">
                              <div
                                className={`w-16 h-16 rounded-full bg-gradient-to-br ${
                                  positionColors[winner.position - 1] ||
                                  'from-blue-400 to-blue-600'
                                } flex items-center justify-center flex-shrink-0`}
                              >
                                <span className="text-white font-bold text-xl">
                                  {winner.position}
                                </span>
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <CheckCircle className="w-5 h-5 text-green-500" />
                                  <span className="text-sm font-semibold text-gray-600">
                                    {positionLabels[winner.position - 1] ||
                                      `${winner.position}th Place`}
                                  </span>
                                </div>
                                <p className="text-xl font-bold text-gray-900">
                                  {winner.name}
                                </p>
                                {winner.project && (
                                  <p className="text-sm text-gray-600 mt-1">
                                    Project: {winner.project}
                                  </p>
                                )}
                                {winner.prize && (
                                  <p className="text-sm font-semibold text-blue-600 mt-1">
                                    {winner.prize}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

              {hackathon.status !== 'completed' && (
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <button
                    onClick={() => setIsRegistrationModalOpen(true)}
                    className="w-full md:w-auto px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                  >
                    Register for Hackathon
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {hackathon && (
        <>
          <HackathonRegistrationModal
            isOpen={isRegistrationModalOpen}
            onClose={() => setIsRegistrationModalOpen(false)}
            hackathonTitle={hackathon.title}
            onSuccess={() => {
              setIsRegistrationModalOpen(false);
              setIsConfirmationModalOpen(true);
            }}
          />

          <RegistrationConfirmationModal
            isOpen={isConfirmationModalOpen}
            onClose={() => setIsConfirmationModalOpen(false)}
            hackathonTitle={hackathon.title}
          />
        </>
      )}
    </div>
  );
}
