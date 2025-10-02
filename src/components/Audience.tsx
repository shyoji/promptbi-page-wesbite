import { GraduationCap, TrendingUp, ArrowRight } from 'lucide-react';

export default function Audience() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Built for <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Everyone</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you're starting fresh or leveling up your career
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="group relative bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-12 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-700" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">For Beginners</h3>
              <p className="text-xl text-blue-50 mb-8 leading-relaxed">
                Zero to Data Confident in 30 Days. No coding background required.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span className="text-blue-50">Start from absolute basics</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span className="text-blue-50">Learn by doing, not watching</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span className="text-blue-50">Build a real portfolio</span>
                </li>
              </ul>
              <button className="group/btn bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:shadow-xl transition-all flex items-center space-x-2">
                <span>Start Learning</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-teal-500 to-green-500 rounded-3xl p-12 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-700" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">For Professionals</h3>
              <p className="text-xl text-teal-50 mb-8 leading-relaxed">
                Master storytelling, dashboards, and insights. Grow your career.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span className="text-teal-50">Advanced analytics techniques</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span className="text-teal-50">Executive-level storytelling</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span className="text-teal-50">Career advancement support</span>
                </li>
              </ul>
              <button className="group/btn bg-white text-teal-600 px-6 py-3 rounded-full font-bold hover:shadow-xl transition-all flex items-center space-x-2">
                <span>Level Up</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
