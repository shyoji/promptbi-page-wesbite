import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onCTAClick: () => void;
}

export default function Hero({ onCTAClick }: HeroProps) {
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
    </section>
  );
}
