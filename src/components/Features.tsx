<<<<<<< HEAD
import { useState, useEffect, useRef } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

export default function Features() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { displayedText: headerText } = useTypewriter({
    text: 'Hiring Analysts Is Risky & Getting Riskier',
    speed: 40,
    delay: 200,
    enabled: isVisible
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const problems = [
    {
      title: 'Resumes and Take-Home Tests Don't Reflect Real Performance',
      description: ''
    },
    {
      title: 'AI Makes It Easy to Fake Skills and Explanations',
      description: ''
    },
    {
      title: 'Interviews Surface Confidence, Not Capability',
      description: ''
    },
    {
      title: 'You Only Discover a Bad Hire 3–6 Months Later',
      description: ''
    }
  ];

  const evaluationCriteria = [
    'Solve Ambiguous Business Problems',
    'Work With Messy, Real-World Datasets',
    'Make Time-Boxed Decisions',
    'Explain Insights the Way They Would to Stakeholders'
  ];

  return (
    <>
      <section ref={sectionRef} className="py-32 md:py-40 px-6 bg-gradient-to-b from-white via-gray-50/40 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#0A0A0A] mb-8 leading-[1.05] tracking-[-0.045em] text-balance min-h-[1.2em]">
              {headerText}
              {isVisible && headerText.length < 'Hiring Analysts Is Risky & Getting Riskier'.length && (
                <span className="animate-pulse text-[#2039E5]">|</span>
              )}
            </h2>

            <p className="text-2xl md:text-3xl text-gray-500 font-light max-w-3xl mx-auto leading-[1.4] tracking-[-0.02em]">
              Most hiring teams are making decisions with false signals.
            </p>
          </div>

          <div className="space-y-5 mb-16">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 md:p-9 border border-gray-200/80 text-[#0A0A0A] font-semibold hover:border-gray-900 transition-all duration-500 text-lg md:text-xl premium-shadow hover:premium-shadow-lg hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative">{problem.title}</span>
              </div>
            ))}
          </div>

          <div className="relative bg-gradient-to-br from-amber-50 to-orange-50/50 border border-amber-200/60 rounded-3xl p-8 md:p-10 premium-shadow">
            <div className="absolute top-4 left-4 w-1 h-16 bg-gradient-to-b from-amber-400 to-orange-400 rounded-full" />
            <p className="text-lg md:text-xl text-gray-900 font-semibold leading-relaxed pl-6">
              Each bad hire costs $25k–$40k+ — often more in missed decisions and rework.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 md:py-40 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0A0A0A] mb-6 leading-[1.1] tracking-[-0.04em] text-balance">
              Candidates Are Evaluated by Doing the Real Job:
            </h2>
          </div>

          <div className="space-y-5 mb-16">
            {evaluationCriteria.map((criterion, index) => (
              <div
                key={index}
                className="group relative bg-gray-50/80 rounded-3xl p-8 md:p-9 border border-gray-200/60 text-[#0A0A0A] font-semibold hover:bg-gray-100/80 hover:border-gray-300 transition-all duration-500 text-lg md:text-xl premium-shadow hover:-translate-y-0.5"
              >
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-[#2039E5] rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative">{criterion}</span>
=======
import { ArrowRight, Link2 } from 'lucide-react';

export default function Features() {
  const dataSources = [
    {
      category: 'CRM',
      color: 'bg-blue-500',
      borderColor: 'border-blue-200',
      hoverBg: 'hover:bg-blue-50',
      tools: [
        { name: 'Salesforce', initial: 'S', color: 'bg-blue-600' },
        { name: 'HubSpot', initial: 'H', color: 'bg-orange-500' }
      ]
    },
    {
      category: 'Finance',
      color: 'bg-green-500',
      borderColor: 'border-green-200',
      hoverBg: 'hover:bg-green-50',
      tools: [
        { name: 'QuickBooks', initial: 'Q', color: 'bg-green-600' },
        { name: 'Excel', initial: 'X', color: 'bg-emerald-600' }
      ]
    },
    {
      category: 'Operations',
      color: 'bg-slate-500',
      borderColor: 'border-slate-200',
      hoverBg: 'hover:bg-slate-50',
      tools: [
        { name: 'ERP Systems', initial: 'E', color: 'bg-slate-600' },
        { name: 'Google Sheets', initial: 'G', color: 'bg-slate-700' }
      ]
    },
    {
      category: 'Marketing',
      color: 'bg-pink-500',
      borderColor: 'border-pink-200',
      hoverBg: 'hover:bg-pink-50',
      tools: [
        { name: 'Meta', initial: 'M', color: 'bg-blue-700' },
        { name: 'WhatsApp', initial: 'W', color: 'bg-green-500' },
        { name: 'Google Analytics', initial: 'GA', color: 'bg-orange-600' }
      ]
    }
  ];

  return (
    <section id="features" className="relative py-32 md:py-40 px-6 lg:px-8 overflow-hidden bg-gray-50">
      <div className="max-w-7xl mx-auto relative">
        <div className="mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200 mb-8">
            <div className="w-2 h-2 rounded-full bg-gray-900" />
            <span className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Connect Your Data</span>
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-[1.1] tracking-tight">
            Bring all your data together —<br />
            <span className="text-gray-500">no code required</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl">
            Connect your CRM, finance tools, spreadsheets, and marketing platforms in minutes.
            PromptBI centralizes your data from multiple systems into one reliable workspace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {dataSources.map((source, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl p-6 border border-gray-200 ${source.hoverBg} transition-all duration-300 hover:shadow-lg`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 ${source.color} rounded-xl flex items-center justify-center shadow-sm`}>
                  <span className="text-white text-sm font-bold">{source.category.substring(0, 2).toUpperCase()}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {source.category}
                </h3>
              </div>
              <div className="space-y-3">
                {source.tools.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl group-hover:bg-white transition-colors border border-transparent group-hover:border-gray-200"
                  >
                    <div className={`w-8 h-8 ${tool.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white text-xs font-bold">{tool.initial}</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-700">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="relative max-w-6xl mx-auto mb-24">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="flex-1 w-full md:w-auto">
              <div className="grid grid-cols-2 gap-4">
                {dataSources.map((source, index) => (
                  <div
                    key={index}
                    className={`p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all`}
                  >
                    <div className={`w-10 h-10 ${source.color} rounded-lg mb-3 flex items-center justify-center shadow-sm`}>
                      <span className="text-white text-xs font-bold">{source.category.substring(0, 2)}</span>
                    </div>
                    <div className="text-sm font-bold text-gray-900">{source.category}</div>
                    <div className="text-xs text-gray-500 mt-1">{source.tools.length} sources</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center shadow-lg">
                <ArrowRight className="w-9 h-9 text-white" strokeWidth={2.5} />
              </div>
            </div>

            <div className="flex-1 w-full md:w-auto">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 text-center shadow-2xl">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-5 backdrop-blur-sm">
                  <Link2 className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Unified Workspace
                </h3>
                <p className="text-base text-gray-300">
                  All data in one place,<br />ready to analyze
                </p>
>>>>>>> 612f09d0ee2957f349cab675c0f7ac358bb88076
              </div>
            ))}
          </div>

          <div className="bg-gray-900 border-l-4 border-gray-900 rounded-r-xl p-6 md:p-8">
            <p className="text-lg md:text-xl text-gray-100 font-light leading-relaxed">
              You don't ask "Do you know SQL?"<br/>
              You see how candidates reason, prioritize, and decide under real conditions.
            </p>
          </div>
        </div>
<<<<<<< HEAD
      </section>
    </>
=======

        <div className="text-center">
          <button className="inline-flex items-center gap-3 px-10 py-5 bg-gray-900 text-white text-lg font-bold rounded-full hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02]">
            <span>Start connecting your data</span>
            <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
          </button>
          <p className="mt-6 text-base text-gray-600 font-medium">
            Setup takes less than 5 minutes — no technical knowledge required
          </p>
        </div>
      </div>
    </section>
>>>>>>> 612f09d0ee2957f349cab675c0f7ac358bb88076
  );
}
