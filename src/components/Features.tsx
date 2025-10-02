import { Code, Users, Target, Zap, Sparkles, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function Features() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      icon: Code,
      title: 'Real Data, Not Textbooks',
      description: 'Solve challenges with authentic company datasets. Debug AI code and build dashboards employers value.',
      gradient: 'from-pink-500 to-rose-500',
      iconBg: 'bg-gradient-to-br from-pink-50 to-rose-50',
      iconColor: 'text-pink-600'
    },
    {
      icon: Zap,
      title: 'Learn by Doing',
      description: 'Skip the lectures. Jump into problems with AI guidance that explains, nudges, and sharpens your skills in real time.',
      gradient: 'from-purple-500 to-violet-500',
      iconBg: 'bg-gradient-to-br from-purple-50 to-violet-50',
      iconColor: 'text-purple-600'
    },
    {
      icon: Users,
      title: 'Join the Movement',
      description: '650+ learners tackling weekly challenges, competitions, and study squads. Learn faster, stay motivated.',
      gradient: 'from-blue-500 to-cyan-500',
      iconBg: 'bg-gradient-to-br from-blue-50 to-cyan-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: Target,
      title: 'From Learning to Earning',
      description: 'Build portfolio projects and tell data stories that make you 5x more employable.',
      gradient: 'from-indigo-500 to-purple-500',
      iconBg: 'bg-gradient-to-br from-indigo-50 to-purple-50',
      iconColor: 'text-indigo-600'
    }
  ];

  const timeline = [
    {
      week: 'Week 1-2',
      title: 'Master Python Fundamentals',
      description: 'Interactive challenges that make coding second nature'
    },
    {
      week: 'Week 3',
      title: 'Data Analysis & Visualization',
      description: 'Real datasets, real insights, real skills'
    },
    {
      week: 'Week 4',
      title: 'Portfolio & Interview Prep',
      description: 'Show employers you\'re ready to contribute'
    }
  ];

  return (
    <section id="features" className="relative py-20 md:py-32 px-4 md:px-6 lg:px-12 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`,
        backgroundSize: '20px 20px'
      }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-pink-50 to-purple-50 border border-purple-100 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span className="text-xs font-semibold text-purple-900 tracking-wide uppercase">Complete Platform</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
            Everything You Need
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A hands-on platform that transforms learners into job-ready analysts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-20 md:mb-32">
          {features.map((feature, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
              className={`group relative rounded-2xl bg-white border transition-all duration-300 cursor-pointer ${
                hoveredFeature === index
                  ? 'border-purple-200 shadow-2xl -translate-y-2'
                  : 'border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-lg'
              }`}
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 transition-opacity duration-300 ${hoveredFeature === index ? 'opacity-[0.02]' : ''}`} />

              <div className="relative p-8 md:p-10">
                <div className={`w-14 h-14 rounded-xl ${feature.iconBg} flex items-center justify-center mb-6 transition-transform duration-300 ${hoveredFeature === index ? 'scale-110' : ''}`}>
                  <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                </div>

                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed mb-6">
                  {feature.description}
                </p>

              </div>
            </div>
          ))}
        </div>

        <div className="relative rounded-3xl bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-700 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />

          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }} />
          </div>

          <div className="relative p-8 md:p-12 lg:p-16">
            <div className="text-center mb-12 md:mb-16">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                30 Days to Job-Ready
              </h3>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                Zero to employable data analyst in one focused month
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 md:mb-16">
              {timeline.map((item, index) => (
                <div key={index} className="group relative">
                  <div className="relative rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 md:p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                    <div className="inline-block px-3 py-1 rounded-full bg-white/20 border border-white/30 text-xs font-semibold text-white mb-4">
                      {item.week}
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-white/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {index < timeline.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-white/40 to-white/20">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/60" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    More Than Just Python Skills
                  </h4>
                  <p className="text-base md:text-lg text-white/90 leading-relaxed">
                    Graduate with a portfolio of projects, compelling data stories, and the confidence to ace interviews. You'll have proof that gets you hired.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
