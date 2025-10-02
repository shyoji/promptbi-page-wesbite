import { Play, ArrowRight, X, Maximize2 } from 'lucide-react';
import { useState, useEffect } from 'react';

interface DemoVideoProps {
  onCTAClick: () => void;
}

export default function DemoVideo({ onCTAClick }: DemoVideoProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
        setIsPlaying(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setTimeout(() => setIsPlaying(true), 300);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsPlaying(false);
  };

  return (
    <>
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-100 mb-6">
              <Play className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">2 minute overview</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
              See how it works
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              Watch how PromptBI takes you from complete beginner to job-ready
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <div
                className="relative rounded-2xl overflow-hidden border border-gray-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 cursor-pointer group shadow-2xl hover:shadow-3xl transition-all"
                onClick={handleOpenModal}
              >
                <div className="aspect-video relative">
                  {/* Video thumbnail with mock interface */}
                  <div className="absolute inset-0">
                    {/* Mock browser chrome */}
                    <div className="absolute top-0 left-0 right-0 h-8 bg-slate-800/90 backdrop-blur-xl border-b border-slate-700 flex items-center px-3 space-x-2">
                      <div className="flex space-x-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                      </div>
                      <div className="flex-1 flex justify-center">
                        <div className="bg-slate-700/50 rounded px-3 py-0.5 text-xs text-slate-400">app.promptbi.com</div>
                      </div>
                    </div>

                    {/* Mock dashboard content */}
                    <div className="absolute inset-0 top-8 p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-3 border border-slate-700/50">
                          <div className="h-2 w-16 bg-slate-600 rounded mb-2" />
                          <div className="h-6 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded" />
                        </div>
                        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-3 border border-slate-700/50">
                          <div className="h-2 w-16 bg-slate-600 rounded mb-2" />
                          <div className="h-6 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded" />
                        </div>
                        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-3 border border-slate-700/50">
                          <div className="h-2 w-16 bg-slate-600 rounded mb-2" />
                          <div className="h-6 w-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded" />
                        </div>
                      </div>
                      <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50">
                        <div className="h-32 bg-gradient-to-t from-blue-500/20 to-transparent rounded" />
                      </div>
                    </div>

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-full animate-ping" />
                      <div className="relative w-24 h-24 bg-white/90 backdrop-blur-xl rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all border border-white/20">
                        <Play className="w-10 h-10 text-slate-900 ml-1.5 fill-slate-900" />
                      </div>
                    </div>
                  </div>

                  {/* Expand indicator */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/10 backdrop-blur-xl rounded-lg px-3 py-2 flex items-center space-x-2 border border-white/20">
                      <Maximize2 className="w-4 h-4 text-white" />
                      <span className="text-sm text-white font-medium">Expand</span>
                    </div>
                  </div>

                  {/* Duration badge */}
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-black/60 backdrop-blur-xl rounded-lg px-3 py-1.5 border border-white/10">
                      <span className="text-sm text-white font-medium">2:34</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="text-sm font-semibold text-gray-900 mb-4">What you'll learn</div>
                <div className="space-y-3">
                  {[
                    'Python fundamentals',
                    'Data visualization',
                    'Building dashboards',
                    'SQL & databases',
                    'Portfolio projects',
                    'Interview prep'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={onCTAClick}
                className="w-full px-6 py-4 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-all shadow-lg flex items-center justify-center space-x-2 group"
              >
                <span>Start learning</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-xs text-gray-500 text-center">
                Join 650 beta testers • Free for early users
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 animate-fadeIn"
          onClick={handleCloseModal}
        >
          {/* Glassmorphism backdrop */}
          <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-2xl" />

          {/* Video container */}
          <div
            className="relative w-full max-w-6xl animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Glass border effect */}
            <div className="absolute -inset-[1px] bg-gradient-to-br from-white/20 via-white/5 to-white/20 rounded-3xl" />

            <div className="relative bg-slate-900/50 backdrop-blur-3xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              {/* Close button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 backdrop-blur-xl hover:bg-white/20 rounded-full flex items-center justify-center transition-all border border-white/20 group"
              >
                <X className="w-5 h-5 text-white group-hover:rotate-90 transition-transform" />
              </button>

              {/* Video player */}
              <div className="aspect-video relative">
                {isPlaying ? (
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0&modestbranding=1"
                    title="PromptBI Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="w-full h-full bg-slate-900 flex items-center justify-center">
                    <div className="w-20 h-20 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                  </div>
                )}
              </div>

              {/* Bottom info bar */}
              <div className="bg-gradient-to-r from-slate-900/90 to-slate-800/90 backdrop-blur-xl border-t border-white/10 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-semibold mb-1">PromptBI Platform Demo</h3>
                    <p className="text-slate-400 text-sm">See how our AI-powered learning works</p>
                  </div>
                  <button
                    onClick={onCTAClick}
                    className="px-6 py-2.5 bg-white text-slate-900 rounded-lg font-medium hover:bg-white/90 transition-all flex items-center space-x-2"
                  >
                    <span>Start free</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ESC hint */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="bg-white/10 backdrop-blur-xl rounded-full px-4 py-2 border border-white/20">
              <span className="text-sm text-white/80">Press <kbd className="px-2 py-0.5 bg-white/20 rounded text-white font-medium">ESC</kbd> to close</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
