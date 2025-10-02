import { Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function HowItWorks() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const skills = [
    {
      title: 'Debugging AI Code',
      description: 'Catch hallucinations before they cost millions',
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      title: 'Data Quality & Transformation',
      description: 'Ensure clean, trustworthy datasets',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      title: 'AI-Powered Visualization',
      description: 'Build dashboards that explain themselves',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Statistical + Predictive Thinking',
      description: 'Make forecasts that drive strategy',
      gradient: 'from-indigo-500 to-blue-600'
    },
    {
      title: 'Business Storytelling with Data',
      description: 'Translate numbers into decisions executives act on',
      gradient: 'from-violet-500 to-purple-600'
    },
    {
      title: 'Insight Acceleration',
      description: 'Answer business questions in minutes, not weeks',
      gradient: 'from-fuchsia-500 to-pink-600'
    },
    {
      title: 'Career Readiness',
      description: 'Showcase projects, pitch insights, and stand out in the job market',
      gradient: 'from-cyan-500 to-blue-600'
    }
  ];

  return (
    <section id="how" className="relative py-24 md:py-32 px-4 md:px-6 lg:px-12 overflow-hidden bg-white">
      {/* Subtle Grid Pattern - Notion Style */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`,
        backgroundSize: '20px 20px'
      }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - Notion Minimalist Style */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-pink-50 to-purple-50 border border-purple-100 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span className="text-xs font-semibold text-purple-900 tracking-wide uppercase">30-Day Mastery</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
            What You'll Master
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Seven essential skills for the AI-powered data era
          </p>
        </div>

        {/* Main Content - Notion's Bento Box Layout */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* Hero Feature Card with Illustration */}
          <div className="lg:row-span-2 relative group">
            <div className="relative h-full min-h-[400px] rounded-2xl bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-purple-300">
              {/* Image Container */}
              <div className="relative h-full flex items-center justify-center p-8 md:p-12">
                <img
                  src="/learning.svg"
                  alt="Learning Illustration"
                  className="w-full h-auto max-w-md relative z-10 transition-transform duration-500 group-hover:scale-105"
                />

                {/* Floating Badge - Notion Style */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-lg border border-gray-200">
                  <div className="text-2xl font-bold text-gray-900">650+</div>
                  <div className="text-xs text-gray-600 font-medium">Active Learners</div>
                </div>

                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-lg border border-gray-200">
                  <div className="text-2xl font-bold text-gray-900">30</div>
                  <div className="text-xs text-gray-600 font-medium">Days</div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Grid - Notion's Card Style */}
          <div className="lg:col-span-1 grid gap-4 md:gap-5">
            {skills.map((skill, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative rounded-xl bg-white border transition-all duration-300 cursor-pointer ${
                  hoveredIndex === index
                    ? 'border-purple-300 shadow-xl -translate-y-1'
                    : 'border-gray-200 hover:border-gray-300 shadow-sm'
                }`}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${skill.gradient} opacity-0 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-5' : ''}`} />

                <div className="relative p-5 md:p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1.5 transition-colors">
                        {skill.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>

                    {/* Subtle Arrow */}
                    <svg
                      className={`flex-shrink-0 w-5 h-5 text-gray-400 transition-all duration-300 ${hoveredIndex === index ? 'text-purple-600 translate-x-1' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
