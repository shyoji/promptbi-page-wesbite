import { ChevronLeft, ChevronRight, MapPin, DollarSign, CheckCircle2, Star, Award, Briefcase, Clock, TrendingUp, ArrowUpRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTypewriter } from '../hooks/useTypewriter';

interface Expert {
  name: string;
  role: string;
  available: boolean;
  rate: string;
  location: string;
  image: string;
  verified: boolean;
  experience: string;
  skills: string[];
  projectsCompleted: number;
  responseTime: string;
  rating: number;
  bio: string;
  testimonial?: {
    rating: number;
    text: string;
    author: string;
    authorTitle: string;
  } | null;
  backgroundColor?: string;
}

export default function HireExperts() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { displayedText: headerText } = useTypewriter({
    text: 'Analysts That Think Like a CEO',
    speed: 35,
    delay: 200,
    enabled: isVisible
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const experts: Expert[] = [
    {
      name: 'Joan Tirop',
      role: 'Data Analyst',
      available: true,
      rate: '$15/hr',
      location: 'Nairobi',
      image: '/Tirop.png',
      verified: true,
      backgroundColor: '#E5E5E5',
      experience: '5+ years',
      skills: ['Python', 'SQL', 'Tableau', 'Excel'],
      projectsCompleted: 127,
      responseTime: '< 2 hours',
      rating: 4.9,
      bio: 'Data analyst specializing in business intelligence and predictive analytics. Expert in transforming complex datasets into actionable insights.',
      testimonial: null
    },
    {
      name: 'Bertha Kasiera',
      role: 'Junior Analyst',
      available: true,
      rate: '$20/hr',
      location: 'Nairobi',
      image: '/Bertha Kasiera image.png',
      verified: true,
      backgroundColor: '#F5F5F5',
      experience: '2+ years',
      skills: ['Power BI', 'Excel', 'SQL', 'Data Visualization'],
      projectsCompleted: 45,
      responseTime: '< 2 hours',
      rating: 4.8,
      bio: 'Junior data analyst with a passion for turning data into insights. Skilled in data visualization and reporting.',
      testimonial: null
    },
    {
      name: 'Jackline Kibiwott',
      role: 'Business Intelligence Analyst',
      available: true,
      rate: '$15/hr',
      location: 'Nairobi',
      image: '/Gemini_Generated_Image_r0kdv0r0kdv0r0kd.png',
      verified: true,
      backgroundColor: '#7FCDEE',
      experience: '6+ years',
      skills: ['SQL', 'Power BI', 'DAX', 'ETL'],
      projectsCompleted: 89,
      responseTime: '< 3 hours',
      rating: 4.8,
      bio: 'BI analyst focused on creating comprehensive dashboards and reports. Expert in data warehousing and business intelligence solutions.',
      testimonial: null
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % experts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + experts.length) % experts.length);
  };

  const getVisibleExperts = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % experts.length;
      visible.push({ ...experts[index], originalIndex: index });
    }
    return visible;
  };

  return (
    <section ref={sectionRef} className="relative py-40 md:py-48 px-6 overflow-hidden bg-gray-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.03),transparent_70%)]" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm mb-8">
            <div className="w-2 h-2 bg-gray-900 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Verified Experts</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 tracking-tight leading-[1.1]">
            Grow Your Data Team With
            <br />
            <span className="text-gray-900 min-h-[1.2em] inline-block">
              {headerText}
              {isVisible && headerText.length < 'Analysts That Think Like a CEO'.length && (
                <span className="animate-pulse">|</span>
              )}
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Access a new generation of analysts skilled in AI-driven data analytics, trained by top engineers from Disney, Uber, and Meta.
          </p>
        </div>

        <div className="flex items-center justify-center gap-6 mb-16">
          <button
            onClick={prevSlide}
            className="group w-16 h-16 rounded-full bg-white border-2 border-gray-300 hover:border-gray-900 flex items-center justify-center transition-all hover:shadow-lg active:scale-95"
            aria-label="Previous expert"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-gray-900 transition-colors" strokeWidth={2.5} />
          </button>

          <div className="flex gap-3">
            {experts.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-10 bg-gray-900' : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to expert ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="group w-16 h-16 rounded-full bg-gray-900 hover:bg-gray-800 flex items-center justify-center transition-all hover:shadow-xl shadow-xl active:scale-95"
            aria-label="Next expert"
          >
            <ChevronRight className="w-6 h-6 text-white" strokeWidth={2.5} />
          </button>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 transition-all duration-700 ease-in-out">
            {getVisibleExperts().map((expert, idx) => (
              <div
                key={`${expert.name}-${idx}`}
                className="group relative flex justify-center transition-all duration-700 ease-in-out"
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative w-full max-w-[340px]">
                  <div
                    className="relative rounded-3xl overflow-hidden aspect-[3/4] transition-all duration-500 group-hover:shadow-2xl group-hover:scale-[1.02] border border-gray-200"
                    style={{ backgroundColor: expert.backgroundColor }}
                  >
                    <img
                      src={expert.image}
                      alt={`${expert.name} - ${expert.role} with ${expert.experience} experience specializing in ${expert.skills.join(', ')}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 ${hoveredCard === idx ? 'opacity-100' : 'opacity-0'}`} />

                    {expert.verified && (
                      <div className={`absolute top-6 right-6 w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 border ${
                        hoveredCard === idx
                          ? 'bg-white border-white/50'
                          : 'bg-blue-600 border-blue-500/50'
                      }`}>
                        <CheckCircle2 className={`w-5 h-5 transition-colors ${
                          hoveredCard === idx ? 'text-blue-600' : 'text-white'
                        }`} fill="currentColor" />
                      </div>
                    )}

                    <div className={`absolute inset-6 flex flex-col justify-between transition-all duration-500 ${
                      hoveredCard === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                    }`}>
                      <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-xl border border-white/50">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 mb-1">
                              {expert.name}
                            </h3>
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50" />
                              <span className="text-sm text-gray-600 font-medium">{expert.role}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 bg-gradient-to-br from-amber-50 to-amber-100 px-3 py-1.5 rounded-xl shadow-sm border border-amber-200">
                            <Star className="w-4 h-4 text-amber-600" fill="currentColor" />
                            <span className="text-sm font-bold text-gray-900">{expert.rating}</span>
                          </div>
                        </div>

                        <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2">
                          {expert.bio}
                        </p>

                        <div className="grid grid-cols-2 gap-2 mb-4">
                          <div className="flex items-center gap-2 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-2.5 border border-blue-200">
                            <Award className="w-4 h-4 text-blue-600 flex-shrink-0" />
                            <div className="min-w-0">
                              <p className="text-xs font-bold text-gray-900 truncate">{expert.experience}</p>
                              <p className="text-[10px] text-gray-500">Experience</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-2.5 border border-emerald-200">
                            <Briefcase className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                            <div className="min-w-0">
                              <p className="text-xs font-bold text-gray-900 truncate">{expert.projectsCompleted}</p>
                              <p className="text-[10px] text-gray-500">Projects</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-2.5 border border-orange-200">
                            <Clock className="w-4 h-4 text-orange-600 flex-shrink-0" />
                            <div className="min-w-0">
                              <p className="text-xs font-bold text-gray-900 truncate">{expert.responseTime}</p>
                              <p className="text-[10px] text-gray-500">Response</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-2.5 border border-blue-200">
                            <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
                            <div className="min-w-0">
                              <p className="text-xs font-bold text-gray-900 truncate">{expert.location}</p>
                              <p className="text-[10px] text-gray-500">Location</p>
                            </div>
                          </div>
                        </div>

                        <div className="mb-4">
                          <p className="text-xs font-semibold text-gray-700 mb-2">Top Skills</p>
                          <div className="flex flex-wrap gap-1.5">
                            {expert.skills.map((skill, i) => (
                              <span key={i} className="text-xs px-2.5 py-1 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 rounded-full border border-blue-200 font-medium shadow-sm">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        <button className="w-full group px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-sm font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2">
                          <span>View Profile</span>
                          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </button>
                      </div>
                    </div>

                    <div className={`absolute bottom-6 left-6 right-6 transition-all duration-500 ${
                      hoveredCard === idx ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                    }`}>
                      <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/50">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50" />
                          <span className="text-sm text-emerald-600 font-semibold">Available Now</span>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {expert.name}
                        </h3>

                        <div className="flex items-center gap-4 text-gray-600 mb-2">
                          <div className="flex items-center gap-1.5">
                            <DollarSign className="w-4 h-4" strokeWidth={2.5} />
                            <span className="text-sm font-semibold">{expert.rate}</span>
                          </div>
                          <div className="w-px h-4 bg-gray-300" />
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4" strokeWidth={2.5} />
                            <span className="text-sm">{expert.location}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 text-amber-600">
                          <Star className="w-4 h-4" fill="currentColor" />
                          <span className="text-sm font-bold">{expert.rating}</span>
                          <span className="text-xs text-gray-500">({expert.projectsCompleted} projects)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center">
          <button
            onClick={() => navigate('/leaderboard')}
            className="group relative inline-flex items-center justify-center gap-3 px-16 py-6 bg-gray-900 text-white text-xl font-bold rounded-full transition-all shadow-2xl hover:shadow-3xl transform hover:scale-[1.02] active:scale-95"
          >
            <span className="relative">Check Out the Leaderboard</span>
            <ArrowUpRight className="relative w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={2.5} />
          </button>
          <p className="mt-6 text-lg text-gray-600 flex items-center justify-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-gray-900" />
            <span>All Analysts Are Vetted, Skilled, and Ready to Start Immediately</span>
          </p>
        </div>
      </div>
    </section>
  );
}
