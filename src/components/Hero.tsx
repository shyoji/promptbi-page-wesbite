import { useState, useEffect } from 'react';
<<<<<<< HEAD
=======
import { ArrowRight } from 'lucide-react';
>>>>>>> 612f09d0ee2957f349cab675c0f7ac358bb88076

interface HeroProps {
  onCTAClick: () => void;
}

export default function Hero({ onCTAClick }: HeroProps) {
<<<<<<< HEAD
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50/30 to-white px-6 pt-40 pb-32 md:pt-48 md:pb-40 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(32,57,229,0.03),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.02),transparent_50%)]" />

      <div className="max-w-5xl mx-auto relative">
        <div className="text-center space-y-12">
          <div className={`space-y-8 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-full premium-shadow">
              <div className="w-1.5 h-1.5 bg-[#2039E5] rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-gray-900 uppercase tracking-wider">Performance-Based Hiring</span>
            </div>

            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-bold text-[#0A0A0A] leading-[0.95] tracking-[-0.055em] text-balance px-4">
              Hire analysts based on real job performance
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto font-light leading-[1.4] tracking-[-0.02em] text-balance px-4">
              Screen candidates using real job simulations, before interviews begin.
            </p>
          </div>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 ${isVisible ? 'animate-fadeInUp animation-delay-100' : 'opacity-0'}`}>
            <button
              onClick={onCTAClick}
              className="group relative px-10 py-5 bg-[#0A0A0A] text-white text-base font-semibold rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] premium-shadow-lg hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <span className="relative flex items-center gap-3">
                See a Real Job Simulation
                <svg className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <button
              className="group relative px-10 py-5 bg-white text-[#0A0A0A] text-base font-semibold border border-gray-300 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:border-gray-900 active:scale-[0.98] premium-shadow hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative flex items-center gap-3">
                Request a Demo
                <svg className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
            </button>
          </div>

          <div className={`pt-24 flex flex-wrap justify-center gap-16 md:gap-24 ${isVisible ? 'animate-fadeInUp animation-delay-200' : 'opacity-0'}`}>
            <div className="flex flex-col items-center group cursor-default">
              <div className="text-4xl md:text-5xl font-bold text-[#0A0A0A] mb-2 tracking-[-0.04em] group-hover:scale-105 transition-transform duration-500">300+</div>
              <div className="text-sm text-gray-500 font-medium tracking-wide">Analysts</div>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent self-center hidden md:block" />
            <div className="flex flex-col items-center group cursor-default">
              <div className="text-4xl md:text-5xl font-bold text-[#0A0A0A] mb-2 tracking-[-0.04em] group-hover:scale-105 transition-transform duration-500">28k+</div>
              <div className="text-sm text-gray-500 font-medium tracking-wide">Job Simulations</div>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent self-center hidden md:block" />
            <div className="flex flex-col items-center group cursor-default">
              <div className="text-4xl md:text-5xl font-bold text-[#0A0A0A] mb-2 tracking-[-0.04em] group-hover:scale-105 transition-transform duration-500">5k+</div>
              <div className="text-sm text-gray-500 font-medium tracking-wide">Active Users</div>
            </div>
          </div>
        </div>
      </div>
=======
  const [showHeadline, setShowHeadline] = useState(false);
  const [showSubtext, setShowSubtext] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    setShowHeadline(true);

    const subtextTimer = setTimeout(() => {
      setShowSubtext(true);
    }, 600);

    const videoTimer = setTimeout(() => {
      setShowVideo(true);
    }, 1200);

    const ctaTimer = setTimeout(() => {
      setShowCTA(true);
    }, 1800);

    return () => {
      clearTimeout(subtextTimer);
      clearTimeout(videoTimer);
      clearTimeout(ctaTimer);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.02),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h1
          className={`font-extrabold mb-10 tracking-tight leading-[1.05] transition-all duration-1000 ${
            showHeadline ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            fontSize: 'clamp(3.5rem, 9vw, 6.5rem)',
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            fontWeight: 900,
            color: '#0A0A0A',
            letterSpacing: '-0.04em'
          }}
        >
          What if every data analyst
          <br />
          thought like a{' '}
          <span className="relative inline-block">
            <span className="relative z-10 text-gray-900">
              CEO
            </span>
          </span>
          ?
        </h1>

        <p
          className={`text-2xl md:text-3xl mb-16 mx-auto transition-all duration-1000 delay-300 ${
            showSubtext ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            fontWeight: 400,
            color: '#525252',
            lineHeight: '1.6',
            maxWidth: '55%',
            margin: '0 auto 4rem'
          }}
        >
          An AI workspace that helps analysts think, plan, and present like CEOs.
        </p>

        <div
          className={`mb-20 transition-all duration-1000 delay-600 ${
            showVideo ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ maxWidth: '85%', margin: '0 auto 5rem' }}
        >
          <div className="relative">
            <div className="relative bg-white rounded-2xl p-6 shadow-2xl border border-gray-100">
              <div className="relative rounded-xl overflow-hidden bg-black aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.tella.tv/video/ngugis-video-6lwh/embed"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  title="PromptBI Demo Video"
                  style={{ border: 'none' }}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className={`transition-all duration-1000 delay-900 ${
            showCTA ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button
            onClick={() => window.location.href = 'https://app.promptbi.ai/'}
            className="group relative inline-flex items-center gap-3 px-16 py-6 text-xl font-bold text-white rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.02] shadow-xl hover:shadow-2xl"
            style={{
              background: '#0A0A0A',
            }}
          >
            <span className="relative z-10">Start Thinking Like a CEO</span>
            <ArrowRight className="relative z-10 w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <p className="mt-8 text-base font-medium text-gray-500">
            No credit card required • Free to start • Join 1200+ Business Analysts
          </p>
        </div>
      </div>

      <style>{`
        @keyframes float-dot {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.4;
          }
          50% {
            transform: translate(20px, -30px) scale(1.5);
            opacity: 0.8;
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(5deg);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes fade-in-video {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fade-in-sequence {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float-dot {
          animation: float-dot 8s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-fade-in-video {
          animation: fade-in-video 1s ease-out 2s forwards;
        }

        .animate-fade-in-sequence {
          animation: fade-in-sequence 0.8s ease-out 3s forwards;
          opacity: 0;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-3000 {
          animation-delay: 3s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .bg-data-grid {
          background-image:
            linear-gradient(rgba(156, 163, 175, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(156, 163, 175, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: grid-flow 20s linear infinite;
        }

        @keyframes grid-flow {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 50px 50px;
          }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: clamp(2rem, 10vw, 3rem) !important;
          }

          p[style*="maxWidth"] {
            max-width: 90% !important;
          }

          div[style*="maxWidth: '90%'"] {
            max-width: 98% !important;
          }
        }
      `}</style>
>>>>>>> 612f09d0ee2957f349cab675c0f7ac358bb88076
    </section>
  );
}
