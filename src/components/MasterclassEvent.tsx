import { Calendar, Clock, Video, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MasterclassEvent() {
  return (
    <>
      <section id="masterclass" className="relative py-32 px-6 lg:px-12 overflow-hidden bg-gradient-to-br from-violet-50 via-pink-50 to-orange-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-violet-200/40 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-orange-200/40 via-transparent to-transparent" />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 text-white text-[11px] font-bold mb-8 tracking-wider shadow-lg shadow-violet-500/30 animate-pulse">
              <span>FREE MASTERCLASS</span>
            </div>

            <div className="mb-8">
              <h2 className="text-6xl sm:text-7xl lg:text-[6rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-pink-600 to-orange-500 mb-6 tracking-[-0.05em] leading-[0.9] text-balance animate-fade-in">
                Think Like a
                <br />
                Data Analyst
              </h2>
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-orange-400 to-pink-500 rounded-2xl transform -rotate-2 shadow-2xl shadow-orange-500/30">
                <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Critical Thinking Masterclass
                </p>
              </div>
            </div>

            <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-6 font-medium leading-relaxed">
              Learn the questioning mindset that separates good analysts from great ones
            </p>

            <div className="flex items-center justify-center gap-3 text-sm font-semibold text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img src="/IMG_1415.jpeg" alt="Evelyn Cates" className="w-full h-full object-cover" />
                </div>
                <span className="text-gray-900 font-bold">Evelyn Cates</span>
              </div>
              <span className="text-gray-400">•</span>
              <span className="text-violet-600 font-bold">Sr. Analyst @ Disney</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16 max-w-6xl mx-auto">
            <div className="group relative rounded-3xl overflow-hidden bg-white shadow-2xl shadow-violet-500/20 border-4 border-white hover:scale-[1.02] transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <img
                src="/IMG_1415.jpeg"
                alt="Evelyn Cates"
                className="w-full h-80 object-cover"
              />
              <div className="p-8 bg-gradient-to-br from-violet-50 to-pink-50 relative">
                <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-violet-500 to-pink-500 text-white text-xs font-bold rounded-full">
                  EXPERT
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">Evelyn Cates</h3>
                <p className="text-[15px] text-violet-600 mb-6 font-bold">Sr. Consumer Insights Analyst @ Disney</p>
                <div className="space-y-3 text-[14px] text-gray-700">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-md">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold">8+ years experience in data analytics</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-md">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold">Expert in Python, SQL, and Tableau</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-md">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold">Passionate about mentoring new analysts</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-3xl border-4 border-violet-100 p-8 shadow-xl shadow-violet-500/10">
                <h4 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Event Details</h4>
                <div className="space-y-5">
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-violet-50 to-pink-50 rounded-2xl">
                    <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-violet-500/30">
                      <Calendar className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="text-[11px] text-gray-500 font-bold tracking-wide uppercase">Date</div>
                      <div className="text-lg font-black text-gray-900">October 4, 2025</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-pink-50 to-orange-50 rounded-2xl">
                    <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-orange-400 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-pink-500/30">
                      <Clock className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="text-[11px] text-gray-500 font-bold tracking-wide uppercase">Time</div>
                      <div className="text-lg font-black text-gray-900">3:00 PM EAT</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-orange-50 to-violet-50 rounded-2xl">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-violet-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/30">
                      <Video className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="text-[11px] text-gray-500 font-bold tracking-wide uppercase">Format</div>
                      <div className="text-lg font-black text-gray-900">Live Virtual Event</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 via-pink-600 to-orange-500 p-8 border-4 border-white shadow-2xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
                <div className="relative">
                  <h4 className="text-2xl font-black text-white mb-6 tracking-tight">What You'll Master</h4>
                  <div className="space-y-3 text-[15px]">
                    {[
                      'Ask the right questions to uncover insights',
                      'Challenge assumptions like a pro analyst',
                      'Frame problems strategically',
                      'Think critically under pressure',
                      'Develop your analytical intuition'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3 group">
                        <div className="w-6 h-6 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-white/30 transition-colors">
                          <Check className="w-4 h-4 text-white font-bold" />
                        </div>
                        <span className="text-white font-semibold group-hover:scale-105 transition-transform">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/event"
                className="group relative inline-flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-violet-600 via-pink-600 to-orange-500 text-white text-lg font-black rounded-full hover:scale-105 transition-all shadow-2xl shadow-violet-500/40 hover:shadow-3xl hover:shadow-pink-500/50"
              >
                <span>Register for Masterclass</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
            <p className="text-base text-gray-700 font-bold mt-6 flex items-center justify-center gap-2">
              <span className="inline-block w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              Only 247 seats left · Register now!
            </p>
          </div>
        </div>
      </section>

    </>
  );
}