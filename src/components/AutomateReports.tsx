import { Play, ArrowRight, Bell, Calendar, Mail } from 'lucide-react';
import { useState } from 'react';

export default function AutomateReports() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-rose-400/20 to-pink-400/20 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
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

            <div className="lg:col-span-7 order-1 lg:order-2">
              <div
                className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl cursor-pointer group hover:shadow-3xl transition-all bg-gradient-to-br from-white to-orange-50"
                onClick={handleOpenModal}
              >
                <div className="aspect-video relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 via-orange-100/50 to-rose-100/50" />

                  <div className="absolute inset-0 p-8 flex items-center justify-center">
                    <div className="space-y-4 w-full max-w-md">
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

                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 via-transparent to-transparent" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-orange-500/30 rounded-full animate-ping" />
                      <div className="relative w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all border-4 border-white">
                        <Play className="w-8 h-8 text-white ml-1 fill-white" />
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/95 backdrop-blur-xl rounded-full px-4 py-2 flex items-center space-x-2 border-2 border-orange-200 shadow-lg">
                      <Play className="w-4 h-4 text-orange-600" />
                      <span className="text-sm text-orange-900 font-semibold">Watch Demo</span>
                    </div>
                  </div>

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

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={handleCloseModal}
        >
          <div className="relative w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/ORnRhIMLo9I?autoplay=1"
                  title="Automate Reports & Alerts"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <button
              onClick={handleCloseModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 text-sm"
            >
              Press ESC to close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
