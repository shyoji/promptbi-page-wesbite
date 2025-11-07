import { Play, ArrowRight, X, Maximize2, Bell, Calendar, Mail } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface DemoVideoProps {
  onCTAClick: () => void;
}

export default function DemoVideo({ onCTAClick }: DemoVideoProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [isSecondPlaying, setIsSecondPlaying] = useState(false);
  const videoRef = useRef<HTMLIFrameElement>(null);
  const secondVideoRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
        setIsPlaying(false);
        setIsSecondModalOpen(false);
        setIsSecondPlaying(false);
      }
    };

    if (isModalOpen || isSecondModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen, isSecondModalOpen]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setTimeout(() => setIsPlaying(true), 300);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsPlaying(false);
  };

  const handleOpenSecondModal = () => {
    setIsSecondModalOpen(true);
    setTimeout(() => setIsSecondPlaying(true), 300);
  };

  const handleCloseSecondModal = () => {
    setIsSecondModalOpen(false);
    setIsSecondPlaying(false);
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
                        <div className="bg-slate-700/50 rounded px-3 py-0.5 text-xs text-slate-400">app.promptbi.ai</div>
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
                onClick={() => window.location.href = 'https://app.promptbi.ai/register/'}
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

      {/* Automate Reports & Alerts Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-rose-400/20 to-pink-400/20 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left side - Content */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 border border-orange-200 mb-6">
                <Bell className="w-4 h-4 text-orange-600" />
                <span className="text-sm font-semibold text-orange-800">Smart Automation</span>
              </div>

              <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-br from-gray-900 via-orange-900 to-rose-900 bg-clip-text text-transparent mb-6 tracking-tight leading-tight">
                Automate Reports & Alerts
              </h2>

              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Set triggers, schedule reports, or receive insights directly to your inbox.
                PromptBI keeps your team informed, before you even ask.
              </p>

              {/* Feature cards */}
              <div className="space-y-4 mb-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-orange-200/50 shadow-lg hover:shadow-xl transition-all group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Scheduled Reports</h3>
                      <p className="text-sm text-gray-600">Automatic delivery on your schedule</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-orange-200/50 shadow-lg hover:shadow-xl transition-all group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Bell className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Smart Triggers</h3>
                      <p className="text-sm text-gray-600">Get alerted when metrics change</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-orange-200/50 shadow-lg hover:shadow-xl transition-all group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Inbox Insights</h3>
                      <p className="text-sm text-gray-600">Insights delivered where you work</p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => window.location.href = 'https://app.promptbi.ai/register/'}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-rose-500 text-white rounded-2xl font-semibold hover:from-orange-600 hover:to-rose-600 transition-all shadow-lg hover:shadow-xl flex items-center space-x-2 group"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right side - Video */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div
                className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl cursor-pointer group hover:shadow-3xl transition-all bg-gradient-to-br from-white to-orange-50"
                onClick={handleOpenSecondModal}
              >
                <div className="aspect-video relative">
                  {/* Colorful gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 via-orange-100/50 to-rose-100/50" />

                  {/* Mock notification interface */}
                  <div className="absolute inset-0 p-8 flex items-center justify-center">
                    <div className="space-y-4 w-full max-w-md">
                      {/* Notification cards with animation */}
                      <div className="bg-white rounded-2xl p-4 shadow-xl border-l-4 border-amber-500 transform translate-x-0 group-hover:-translate-x-2 transition-transform">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <Bell className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="h-3 w-32 bg-gray-800 rounded mb-2" />
                            <div className="h-2 w-full bg-gray-300 rounded mb-1" />
                            <div className="h-2 w-24 bg-gray-300 rounded" />
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-2xl p-4 shadow-xl border-l-4 border-rose-500 transform translate-x-0 group-hover:translate-x-2 transition-transform delay-75">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <Calendar className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="h-3 w-28 bg-gray-800 rounded mb-2" />
                            <div className="h-2 w-full bg-gray-300 rounded mb-1" />
                            <div className="h-2 w-20 bg-gray-300 rounded" />
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-2xl p-4 shadow-xl border-l-4 border-orange-500 transform translate-x-0 group-hover:-translate-x-2 transition-transform delay-150">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <Mail className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="h-3 w-36 bg-gray-800 rounded mb-2" />
                            <div className="h-2 w-full bg-gray-300 rounded mb-1" />
                            <div className="h-2 w-28 bg-gray-300 rounded" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 via-transparent to-transparent" />

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-orange-500/30 rounded-full animate-ping" />
                      <div className="relative w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all border-4 border-white">
                        <Play className="w-8 h-8 text-white ml-1 fill-white" />
                      </div>
                    </div>
                  </div>

                  {/* Watch demo badge */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/95 backdrop-blur-xl rounded-full px-4 py-2 flex items-center space-x-2 border-2 border-orange-200 shadow-lg">
                      <Play className="w-4 h-4 text-orange-600" />
                      <span className="text-sm text-orange-900 font-semibold">Watch Demo</span>
                    </div>
                  </div>

                  {/* Duration badge */}
                  <div className="absolute bottom-6 left-6">
                    <div className="bg-gradient-to-r from-orange-500 to-rose-500 backdrop-blur-xl rounded-full px-4 py-2 border-2 border-white shadow-lg">
                      <span className="text-sm text-white font-bold">1:45</span>
                    </div>
                  </div>
                </div>
              </div>
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
              <div className="aspect-video relative bg-slate-900 overflow-hidden">
                {isPlaying ? (
                  <div className="relative w-full h-full">
                    <iframe
                      ref={videoRef}
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/CTXuhbcwPCs?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&showinfo=0&fs=0&disablekb=1&iv_load_policy=3&enablejsapi=0"
                      title="PromptBI Demo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      style={{ pointerEvents: 'none' }}
                    />
                    <div
                      className="absolute inset-0 bg-transparent z-10"
                      style={{
                        pointerEvents: 'auto',
                        cursor: 'default'
                      }}
                      onClick={(e) => e.preventDefault()}
                      onContextMenu={(e) => e.preventDefault()}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none z-20" />
                    <div className="absolute bottom-6 left-6 flex items-center space-x-3 animate-fadeIn z-30">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                      <span className="text-white text-sm font-medium">LIVE DEMO</span>
                    </div>
                    <div className="absolute top-6 left-6 bg-black/40 backdrop-blur-md rounded-full px-4 py-2 flex items-center space-x-2 animate-fadeIn z-30">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span className="text-white text-xs">Auto-muted</span>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-20 h-20 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 border-4 border-transparent border-t-white/40 rounded-full animate-spin animation-reverse" style={{ animationDuration: '1.5s' }} />
                      </div>
                    </div>
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
                    onClick={() => window.location.href = 'https://app.promptbi.ai/register/'}
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

      {/* Second Video Modal - Automate Reports */}
      {isSecondModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 animate-fadeIn"
          onClick={handleCloseSecondModal}
        >
          {/* Warm gradient backdrop */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/95 via-orange-900/95 to-rose-900/95 backdrop-blur-2xl" />

          {/* Video container */}
          <div
            className="relative w-full max-w-6xl animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Warm gradient border effect */}
            <div className="absolute -inset-[2px] bg-gradient-to-br from-amber-400 via-orange-400 to-rose-400 rounded-3xl blur-sm" />

            <div className="relative bg-gradient-to-br from-orange-50 to-rose-50 rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
              {/* Close button */}
              <button
                onClick={handleCloseSecondModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-gradient-to-br from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 rounded-full flex items-center justify-center transition-all shadow-lg group"
              >
                <X className="w-5 h-5 text-white group-hover:rotate-90 transition-transform" />
              </button>

              {/* Video player */}
              <div className="aspect-video relative bg-gradient-to-br from-amber-900 via-orange-900 to-rose-900 overflow-hidden">
                {isSecondPlaying ? (
                  <div className="relative w-full h-full">
                    <iframe
                      ref={secondVideoRef}
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/ORnRhIMLo9I?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&showinfo=0&fs=0&disablekb=1&iv_load_policy=3&enablejsapi=0"
                      title="Automate Reports & Alerts"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      style={{ pointerEvents: 'none' }}
                    />
                    <div
                      className="absolute inset-0 bg-transparent z-10"
                      style={{
                        pointerEvents: 'auto',
                        cursor: 'default'
                      }}
                      onClick={(e) => e.preventDefault()}
                      onContextMenu={(e) => e.preventDefault()}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 via-transparent to-transparent pointer-events-none z-20" />
                    <div className="absolute bottom-6 left-6 flex items-center space-x-3 animate-fadeIn z-30">
                      <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                      <span className="text-white text-sm font-medium">AUTOMATION DEMO</span>
                    </div>
                    <div className="absolute top-6 left-6 bg-orange-500/80 backdrop-blur-md rounded-full px-4 py-2 flex items-center space-x-2 animate-fadeIn z-30">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span className="text-white text-xs">Auto-muted</span>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-amber-900 via-orange-900 to-rose-900 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-20 h-20 border-4 border-orange-400/40 border-t-orange-400 rounded-full animate-spin" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 border-4 border-transparent border-t-rose-400 rounded-full animate-spin animation-reverse" style={{ animationDuration: '1.5s' }} />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom info bar with warm colors */}
              <div className="bg-gradient-to-r from-amber-100 to-orange-100 border-t-4 border-orange-300 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-gray-900 font-bold mb-1 flex items-center space-x-2">
                      <Bell className="w-5 h-5 text-orange-600" />
                      <span>Automate Reports & Alerts</span>
                    </h3>
                    <p className="text-gray-700 text-sm">Set triggers, schedule reports, and receive insights automatically</p>
                  </div>
                  <button
                    onClick={() => window.location.href = 'https://app.promptbi.ai/register/'}
                    className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-rose-500 text-white rounded-xl font-semibold hover:from-orange-600 hover:to-rose-600 transition-all shadow-lg flex items-center space-x-2"
                  >
                    <span>Start Free</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ESC hint */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="bg-white/10 backdrop-blur-xl rounded-full px-4 py-2 border border-orange-200">
              <span className="text-sm text-white">Press <kbd className="px-2 py-0.5 bg-white/20 rounded text-white font-semibold">ESC</kbd> to close</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
