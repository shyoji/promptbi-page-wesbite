import { useState, useEffect } from 'react';

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
    </section>
  );
}
