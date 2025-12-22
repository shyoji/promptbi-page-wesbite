import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

interface HeroProps {
  onCTAClick: () => void;
}

export default function Hero({ onCTAClick }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative px-6 pt-40 pb-32 md:pt-48 md:pb-40 overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/30 to-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.15),rgba(255,255,255,0))]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_20%,rgba(147,51,234,0.1),transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center space-y-10">
          <div className={`space-y-8 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-blue-500/10 backdrop-blur-xl border border-blue-200/50 rounded-full shadow-lg shadow-blue-500/10">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-semibold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent uppercase tracking-wider">Performance-Based Hiring</span>
            </div>

            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-bold bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-[0.95] tracking-[-0.055em] text-balance px-4">
              Hire analysts based on{' '}
              <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-blue-600 bg-clip-text text-transparent">
                real job performance
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-[1.5] tracking-[-0.01em] text-balance px-4">
              Screen candidates using real job simulations, before interviews begin.
            </p>
          </div>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 ${isVisible ? 'animate-fadeInUp animation-delay-100' : 'opacity-0'}`}>
            <button
              onClick={onCTAClick}
              className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-base font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/25 active:scale-[0.98]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative flex items-center gap-3">
                See a Real Job Simulation
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <button
              className="group relative px-10 py-5 bg-white/80 backdrop-blur-sm text-gray-900 text-base font-semibold border-2 border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:border-gray-300 hover:bg-white hover:shadow-xl active:scale-[0.98]"
            >
              <span className="relative flex items-center gap-3">
                Request a Demo
                <svg className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
            </button>
          </div>

          <div className={`pt-24 flex flex-wrap justify-center gap-12 md:gap-20 ${isVisible ? 'animate-fadeInUp animation-delay-200' : 'opacity-0'}`}>
            <div className="flex flex-col items-center group cursor-default">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-blue-600 to-violet-600 bg-clip-text text-transparent mb-2 tracking-[-0.04em] group-hover:scale-110 transition-transform duration-300">300+</div>
              <div className="text-sm text-gray-600 font-medium tracking-wide">Analysts Interviewed</div>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent self-center hidden md:block" />
            <div className="flex flex-col items-center group cursor-default">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-blue-600 to-violet-600 bg-clip-text text-transparent mb-2 tracking-[-0.04em] group-hover:scale-110 transition-transform duration-300">28k+</div>
              <div className="text-sm text-gray-600 font-medium tracking-wide">Job Simulations</div>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent self-center hidden md:block" />
            <div className="flex flex-col items-center group cursor-default">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-blue-600 to-violet-600 bg-clip-text text-transparent mb-2 tracking-[-0.04em] group-hover:scale-110 transition-transform duration-300">5k+</div>
              <div className="text-sm text-gray-600 font-medium tracking-wide">Active Users</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
