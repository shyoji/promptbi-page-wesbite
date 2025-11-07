import { useEffect, useState } from 'react';
import { Trophy, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import HackathonCard from './HackathonCard';
import { supabase } from '../lib/supabase';

interface Hackathon {
  id: string;
  title: string;
  slug: string;
  description: string;
  thumbnail_url?: string;
  start_date: string;
  end_date: string;
  status: 'upcoming' | 'ongoing' | 'completed';
  registered_participants: number;
  max_participants?: number;
  partner_name?: string;
}

export default function HackathonsSection() {
  const [hackathons, setHackathons] = useState<Hackathon[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetchHackathons();
  }, []);

  const fetchHackathons = async () => {
    try {
      const { data, error } = await supabase
        .from('hackathons')
        .select('*')
        .in('status', ['upcoming', 'ongoing'])
        .order('start_date', { ascending: true });

      if (error) throw error;

      setHackathons(data || []);
    } catch (error) {
      console.error('Error fetching hackathons:', error);
    } finally {
      setLoading(false);
    }
  };

  const displayedHackathons = showAll ? hackathons : hackathons.slice(0, 3);

  if (loading) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </section>
    );
  }

  if (hackathons.length === 0) {
    return null;
  }

  return (
    <section id="hackathons" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join Our Hackathons
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcase your data analysis skills, compete with peers, and win exciting prizes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedHackathons.map((hackathon) => (
            <HackathonCard
              key={hackathon.id}
              id={hackathon.id}
              title={hackathon.title}
              slug={hackathon.slug}
              description={hackathon.description}
              thumbnailUrl={hackathon.thumbnail_url}
              startDate={hackathon.start_date}
              endDate={hackathon.end_date}
              status={hackathon.status}
              registeredParticipants={hackathon.registered_participants}
              maxParticipants={hackathon.max_participants}
              partnerName={hackathon.partner_name}
            />
          ))}
        </div>

        {hackathons.length > 3 && (
          <div className="text-center">
            {!showAll ? (
              <button
                onClick={() => setShowAll(true)}
                className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <span>Load More Hackathons</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            ) : (
              <Link
                to="/hackathons"
                className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <span>View All Hackathons</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
