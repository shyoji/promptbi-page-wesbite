import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

interface Hackathon {
  id: string;
  title: string;
  slug: string;
  description: string;
  partner_name?: string;
  registered_participants: number;
}

interface PlanCardProps {
  hackathon: Hackathon;
  bgColor: string;
  textColor?: string;
  delay: number;
  isVisible: boolean;
}

function PlanCard({ hackathon, bgColor, textColor = 'text-black', delay, isVisible }: PlanCardProps) {
  return (
    <Link
      to={`/hackathons/${hackathon.slug}`}
      className="block relative p-8 border border-gray-200/60 rounded-3xl bg-white group overflow-hidden transition-all duration-700 hover:scale-[1.04] hover:-translate-y-3 hover:border-gray-900 premium-shadow hover:premium-shadow-lg"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/60 via-white to-gray-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(32,57,229,0.03),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2039E5] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-t-3xl" />

      <div className="relative z-10">
        <div className="mb-6">
          <div className="flex items-center gap-2.5 mb-5">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider group-hover:text-[#2039E5] transition-colors duration-500">{hackathon.partner_name || 'LIVE'}</span>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#2039E5] group-hover:animate-pulse transition-colors duration-500" />
          </div>
          <h3 className="text-xl font-bold text-[#0A0A0A] mb-4 leading-tight tracking-[-0.02em] group-hover:text-[#2039E5] transition-colors duration-500">
            {hackathon.title}
          </h3>
          <p className="text-base text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-500">{hackathon.description}</p>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100 group-hover:border-gray-200 transition-colors duration-500">
          <div className="text-sm font-semibold text-gray-500 group-hover:text-[#0A0A0A] transition-colors duration-500">
            {hackathon.registered_participants.toLocaleString()} participants
          </div>
          <svg
            className="w-6 h-6 text-gray-400 group-hover:text-[#2039E5] transform translate-x-0 group-hover:translate-x-2 transition-all duration-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

export default function FeaturedPlans() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoHovered, setIsVideoHovered] = useState(false);
  const [hackathons, setHackathons] = useState<Hackathon[]>([]);
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    fetchHackathons();
  }, []);

  const fetchHackathons = async () => {
    try {
      const { data, error } = await supabase
        .from('hackathons')
        .select('id, title, slug, description, partner_name, registered_participants')
        .eq('status', 'ongoing')
        .order('created_at', { ascending: true })
        .limit(4);

      if (error) throw error;

      setHackathons(data || []);
    } catch (error) {
      console.error('Error fetching hackathons:', error);
    } finally {
      setLoading(false);
    }
  };

  const cardStyles = [
    { bgColor: '', textColor: 'text-black' },
    { bgColor: '', textColor: 'text-black' },
    { bgColor: '', textColor: 'text-black' },
    { bgColor: '', textColor: 'text-black' }
  ];

  return (
    <section ref={sectionRef} className="bg-white px-6 py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          <>
            <div className="max-w-4xl mx-auto text-center mb-24">
              <div className="relative max-w-3xl mx-auto">
                <div className="relative rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg">
                  <div className="relative pb-[56.25%] bg-gray-100">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                      title="Product Demo Video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mb-16">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight tracking-tight">
                Filter 70% of unqualified candidates
                <br />
                before interviews
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
              {hackathons.map((hackathon, index) => (
                <PlanCard
                  key={hackathon.id}
                  hackathon={hackathon}
                  {...cardStyles[index % cardStyles.length]}
                  delay={index * 150}
                  isVisible={isVisible}
                />
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20">
              <div className="flex flex-col items-center gap-2">
                <Link
                  to="/hackathons"
                  className="px-8 py-4 text-base font-medium text-gray-900 bg-white border-2 border-gray-900 rounded-xl hover:bg-gray-900 hover:text-white transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
                >
                  See a Real Hiring Simulation
                </Link>
                <span className="text-xs text-gray-500 font-medium tracking-wide">Hiring Teams</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Link
                  to="/hackathons"
                  className="px-8 py-4 text-base font-medium text-white bg-[#2039E5] border-2 border-[#2039E5] rounded-xl hover:bg-[#1a2fb8] hover:border-[#1a2fb8] transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
                >
                  Try a Real Job Simulation
                </Link>
                <span className="text-xs text-gray-500 font-medium tracking-wide">For Analysts</span>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
