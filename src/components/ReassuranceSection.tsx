import { useState, useEffect } from 'react';
import { CheckCircle2, Sparkles, TrendingUp, Target, Award } from 'lucide-react';

export default function ReassuranceSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('reassurance-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % benefits.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const benefits = [
    {
      title: 'Break down real business problems',
      description: 'Learn to dissect complex scenarios like a senior analyst',
      icon: Target,
      color: '#3b82f6'
    },
    {
      title: 'Work with real data',
      description: 'Handle messy, realistic datasets from actual industries',
      icon: TrendingUp,
      color: '#8b5cf6'
    },
    {
      title: 'Make real decisions',
      description: 'Choose your approach and see the impact of your choices',
      icon: Sparkles,
      color: '#ec4899'
    },
    {
      title: 'Build real experience',
      description: 'Accumulate job-relevant skills through hands-on practice',
      icon: CheckCircle2,
      color: '#10b981'
    },
    {
      title: 'Produce portfolio proof employers trust',
      description: 'Create tangible work samples that showcase your abilities',
      icon: Award,
      color: '#f59e0b'
    }
  ];

  return (
    <section id="reassurance-section" className="relative py-32 md:py-40 lg:py-48 px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, #ec4899 0%, #f97316 100%)',
            animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
          }}
        />
        <div
          className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, #3b82f6 0%, #8b5cf6 100%)',
            animation: 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-8">
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                boxShadow: '0 0 12px rgba(59, 130, 246, 0.6)'
              }}
            />
            <span
              className="text-[12px] font-bold tracking-[0.1em] uppercase"
              style={{
                color: '#475569',
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontFeatureSettings: '"ss01", "ss02"'
              }}
            >
              The Reality Check
            </span>
          </div>

          <h2
            className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-extrabold mb-6 leading-[1.05]"
            style={{
              color: '#0a0a0a',
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              letterSpacing: '-0.04em',
              fontFeatureSettings: '"ss01", "ss02"',
              textRendering: 'optimizeLegibility',
              WebkitFontSmoothing: 'antialiased'
            }}
          >
            Most Analysts Don't Fail the Job.
          </h2>

          <h3
            className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-medium leading-[1.3] max-w-3xl mx-auto"
            style={{
              color: '#64748b',
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              letterSpacing: '-0.025em',
              fontFeatureSettings: '"ss01"'
            }}
          >
            They fail to{' '}
            <span
              className="relative inline-block"
              style={{
                color: '#0a0a0a',
                fontWeight: 700
              }}
            >
              Show They Can Do the Job.
              <svg
                className="absolute -bottom-1 left-0 w-full h-3"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,8 Q50,2 100,8 T200,8"
                  fill="none"
                  stroke="url(#underline-gradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="underline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ec4899" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="#f97316" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#ec4899" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h3>
        </div>

        <div className="mb-16">
          <p
            className={`text-center text-[13px] font-bold uppercase tracking-[0.12em] mb-10 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              color: '#0a0a0a',
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              fontFeatureSettings: '"ss01", "ss02"'
            }}
          >
            Job Simulations Give You a Simple Way To:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              const isActive = activeIndex === index;

              return (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => {
                    setActiveIndex(index);
                    setIsPaused(true);
                  }}
                  onMouseLeave={() => setIsPaused(false)}
                  className={`group relative p-6 rounded-2xl transition-all duration-500 cursor-pointer ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    transitionDelay: `${400 + index * 100}ms`,
                    background: isActive
                      ? 'linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(248, 250, 252, 1) 100%)'
                      : 'linear-gradient(135deg, rgba(248, 250, 252, 0.6) 0%, rgba(241, 245, 249, 0.6) 100%)',
                    border: isActive
                      ? `2px solid ${benefit.color}20`
                      : '2px solid rgba(226, 232, 240, 0.5)',
                    boxShadow: isActive
                      ? `0 8px 32px ${benefit.color}20, 0 2px 8px rgba(0, 0, 0, 0.05)`
                      : '0 2px 8px rgba(0, 0, 0, 0.02)',
                    transform: isActive ? 'translateY(-4px) scale(1.02)' : 'translateY(0) scale(1)'
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-500"
                    style={{
                      background: isActive
                        ? `linear-gradient(135deg, ${benefit.color}15 0%, ${benefit.color}25 100%)`
                        : 'linear-gradient(135deg, rgba(241, 245, 249, 1) 0%, rgba(226, 232, 240, 1) 100%)',
                      transform: isActive ? 'rotate(0deg) scale(1.1)' : 'rotate(-10deg) scale(1)'
                    }}
                  >
                    <Icon
                      className="w-6 h-6 transition-all duration-500"
                      style={{
                        color: isActive ? benefit.color : '#94a3b8',
                        filter: isActive ? `drop-shadow(0 2px 4px ${benefit.color}40)` : 'none'
                      }}
                      strokeWidth={isActive ? 2.5 : 2}
                    />
                  </div>

                  <div className="text-left">
                    <h4
                      className="text-[15px] font-bold mb-2 leading-tight transition-colors duration-300"
                      style={{
                        color: isActive ? '#0a0a0a' : '#475569',
                        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                        fontFeatureSettings: '"ss01"'
                      }}
                    >
                      {benefit.title}
                    </h4>
                    <p
                      className="text-[13px] leading-relaxed transition-all duration-500"
                      style={{
                        color: isActive ? '#64748b' : '#94a3b8',
                        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                        maxHeight: isActive ? '100px' : '0px',
                        opacity: isActive ? 1 : 0,
                        overflow: 'hidden'
                      }}
                    >
                      {benefit.description}
                    </p>
                  </div>

                  {isActive && (
                    <div
                      className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl"
                      style={{
                        background: `linear-gradient(90deg, ${benefit.color} 0%, ${benefit.color}80 100%)`,
                        boxShadow: `0 2px 12px ${benefit.color}40`
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {benefits.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="group p-1"
                aria-label={`Go to benefit ${index + 1}`}
              >
                <div
                  className="h-1 rounded-full transition-all duration-500"
                  style={{
                    width: activeIndex === index ? '32px' : '8px',
                    background: activeIndex === index
                      ? `linear-gradient(90deg, ${benefits[index].color} 0%, ${benefits[index].color}80 100%)`
                      : '#cbd5e1',
                    opacity: activeIndex === index ? 1 : 0.4
                  }}
                />
              </button>
            ))}
          </div>
        </div>


        <div
          className={`text-center mt-16 pt-12 border-t transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            borderColor: 'rgba(226, 232, 240, 0.6)'
          }}
        >
          <p
            className="text-[1.5rem] font-bold mb-3 leading-tight"
            style={{
              color: '#0a0a0a',
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              fontFeatureSettings: '"ss01", "ss02"',
              letterSpacing: '-0.02em'
            }}
          >
            No lessons. No fluff.
          </p>
          <p
            className="text-[1.125rem] leading-relaxed max-w-2xl mx-auto"
            style={{
              color: '#64748b',
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              fontWeight: 450
            }}
          >
            Just the work, and your ability, made visible.
          </p>
        </div>
      </div>
    </section>
  );
}
