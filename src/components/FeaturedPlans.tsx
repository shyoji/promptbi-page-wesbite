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
    <a
      href="https://app.promptbi.ai/"
      className="block relative p-6 md:p-7 border border-gray-200/50 rounded-2xl bg-white/80 backdrop-blur-sm group overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:border-blue-300/50 hover:shadow-xl hover:shadow-blue-500/10"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-violet-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

      <div className="relative z-10">
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent uppercase tracking-wider">{hackathon.partner_name || 'LIVE'}</span>
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight tracking-tight group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-violet-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
            {hackathon.title}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">{hackathon.description}</p>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-200/50">
          <div className="text-xs font-semibold text-gray-500">
            {hackathon.registered_participants.toLocaleString()} participants
          </div>
          <svg
            className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>
    </a>
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
    <section ref={sectionRef} className="relative bg-gradient-to-b from-white via-slate-50/50 to-white px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="max-w-7xl mx-auto relative">
        {loading ? (
          <div className="flex justify-center items-center py-12 sm:py-20">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          <>
            <div className="w-full max-w-7xl mx-auto text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 px-2 sm:px-4 md:px-6 lg:px-8">
              <div className="relative w-full mx-auto">
                <div className="relative rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden border border-gray-200 sm:border-2 shadow-lg sm:shadow-xl shadow-blue-500/10">
                  <div className="relative pb-[75%] sm:pb-[70%] md:pb-[65%] lg:pb-[60%] xl:pb-[56.25%] bg-gray-100">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src="https://www.youtube.com/embed/GjYLDkfNKZo"
                      title="Product Demo Video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight tracking-tight">
                <span className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  Filter 70% of unqualified candidates
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-blue-600 bg-clip-text text-transparent">
                  before interviews
                </span>
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8 sm:mb-10 md:mb-12">
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

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch sm:items-center px-4">
              <div className="flex flex-col items-center gap-2 w-full sm:w-auto">
                <Link
                  to="/hackathons"
                  className="w-full sm:w-auto px-8 py-4 text-sm sm:text-base font-semibold text-gray-900 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-xl hover:border-gray-300 hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 text-center"
                >
                  See a Real Hiring Simulation
                </Link>
                <span className="text-xs text-gray-500 font-medium tracking-wide">Hiring Teams</span>
              </div>
              <div className="flex flex-col items-center gap-2 w-full sm:w-auto">
                <Link
                  to="/hackathons"
                  className="w-full sm:w-auto px-8 py-4 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 active:scale-95 text-center"
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
