import { Sparkles, TrendingUp, MessageCircle, Target, Lightbulb, Award, Briefcase, Coins } from 'lucide-react';

interface Skill {
  id: string;
  title: string;
  description: string;
  coins: number;
  icon: any;
}

interface Tier {
  level: number;
  title: string;
  subtitle: string;
  skills: Skill[];
  image: string;
}

const skillTiers: Tier[] = [
  {
    level: 1,
    title: 'Core Moves',
    subtitle: 'Your starter abilities. Unlock these to begin your analyst journey.',
    image: '/Screenshot 2025-11-24 at 22.10.45.png',
    skills: [
      {
        id: '1-1',
        title: 'Break Down a Problem',
        description: 'Turn messy questions into clear, structured steps.',
        coins: 100,
        icon: Target
      },
      {
        id: '1-2',
        title: 'Spot Patterns in Data',
        description: 'See trends, shifts, and anomalies fast.',
        coins: 100,
        icon: TrendingUp
      },
      {
        id: '1-3',
        title: 'Ask Sharp Questions',
        description: 'Know what to ask — and why it matters.',
        coins: 100,
        icon: MessageCircle
      }
    ]
  },
  {
    level: 2,
    title: 'Advanced Abilities',
    subtitle: 'Level up your thinking. Unlock deeper analysis.',
    image: '/Screenshot 2025-11-24 at 22.10.37.png',
    skills: [
      {
        id: '2-1',
        title: 'Form Strong Hypotheses',
        description: 'Predict what the data might reveal — before you see it.',
        coins: 200,
        icon: Lightbulb
      },
      {
        id: '2-2',
        title: 'Build Compelling Explanations',
        description: 'Connect insights into a story that makes sense.',
        coins: 200,
        icon: MessageCircle
      },
      {
        id: '2-3',
        title: 'Make Smart Business Decisions',
        description: 'Recommend what to do next with confidence.',
        coins: 200,
        icon: Target
      }
    ]
  },
  {
    level: 3,
    title: 'Mastery',
    subtitle: 'Pro-level moves. This is where analysts shine.',
    image: '/Screenshot 2025-11-24 at 22.24.17.png',
    skills: [
      {
        id: '3-1',
        title: 'Communicate Insights Clearly',
        description: 'Say what\'s happening — simply and powerfully.',
        coins: 300,
        icon: Sparkles
      },
      {
        id: '3-2',
        title: 'Build a Verified Portfolio Item',
        description: 'Turn your simulation into a credible work sample.',
        coins: 300,
        icon: Award
      },
      {
        id: '3-3',
        title: 'Pass Case Interviews with Ease',
        description: 'Apply your skills under pressure and win the room.',
        coins: 300,
        icon: Briefcase
      }
    ]
  }
];

export default function DataIntegration() {
  return (
    <section className="relative py-32 px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(14,165,233,0.08),transparent_50%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 backdrop-blur-sm mb-8">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-bold text-amber-300 tracking-wide uppercase">Skills Journey</span>
          </div>

          <h2 className="text-6xl lg:text-7xl font-bold mb-8 leading-[1.05] tracking-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
              Unlock Your Analyst
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Superpower
            </span>
          </h2>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Progress through a guided journey from beginner to master analyst. Earn coins, unlock abilities, and build a portfolio that wins interviews.
          </p>
        </div>

        <div className="space-y-20">
          {skillTiers.map((tier, tierIndex) => (
            <div key={tier.level} className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500/50 via-cyan-500/50 to-transparent -translate-x-1/2 hidden lg:block" />

              <div className="mb-12 text-center">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full blur-xl opacity-50" />
                    <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full border-4 border-slate-900 shadow-2xl">
                      <span className="text-2xl font-bold text-white">{tier.level}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-4xl lg:text-5xl font-bold mb-3">
                  <span className="text-white">Tier {tier.level}: </span>
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {tier.title}
                  </span>
                </h3>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto">{tier.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
                {tier.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.id}
                      className="group relative"
                      style={{
                        animationDelay: `${skillIndex * 100}ms`
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative h-full bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-500 group-hover:transform group-hover:scale-[1.02]">
                        <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-amber-500/20 border border-amber-500/30 rounded-full">
                          <Coins className="w-4 h-4 text-amber-400" />
                          <span className="text-sm font-bold text-amber-300">{skill.coins}</span>
                        </div>

                        <div className="relative mb-6">
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
                          <div className="relative w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl">
                            <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                          </div>
                        </div>

                        <div className="space-y-3">
                          <h4 className="text-xl font-bold text-white leading-tight group-hover:text-blue-300 transition-colors">
                            {skill.title}
                          </h4>
                          <p className="text-slate-400 leading-relaxed">
                            {skill.description}
                          </p>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left rounded-b-3xl" />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-center">
                <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-3xl overflow-hidden border border-slate-700/50 shadow-2xl group hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 group-hover:opacity-0 transition-opacity duration-500" />
                  <img
                    src={tier.image}
                    alt={`${tier.title} visual`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                </div>
              </div>

              {tierIndex < skillTiers.length - 1 && (
                <div className="flex justify-center mt-12">
                  <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-full">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                    <span className="text-sm font-semibold text-cyan-300 tracking-wide">UNLOCK NEXT TIER</span>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-blue-600/20 rounded-3xl blur-3xl" />
          <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-12 lg:p-16 text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full blur-2xl opacity-50 animate-pulse" />
                <div className="relative flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full shadow-2xl">
                  <Award className="w-10 h-10 text-white" strokeWidth={2.5} />
                </div>
              </div>
            </div>

            <h3 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Complete Your Journey
              </span>
            </h3>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Master all three tiers to unlock your full analyst potential. Build a verified portfolio, earn your credentials, and become interview-ready.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {['Real Projects', 'Verified Skills', 'Portfolio Ready', 'Interview Confident'].map((tag, i) => (
                <span
                  key={i}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-sm font-bold text-blue-300 hover:scale-105 transition-transform cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
