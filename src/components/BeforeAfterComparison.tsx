import { useState, useEffect } from 'react';
import { X, Check } from 'lucide-react';

export default function BeforeAfterComparison() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('before-after-comparison');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const beforeMetrics = [
    { text: '45–70 days to hire one analyst', icon: X },
    { text: '3–5 interview rounds per candidate', icon: X },
    { text: '18–27 total hours of recruiter + hiring manager time per hire', icon: X },
    { text: '30–50% of interviewees are false positives', icon: X },
    { text: 'Bad hires identified 3–6 months post-hire', icon: X },
    { text: '$25k–$40k+ average cost per bad analyst hire', icon: X },
    { text: 'Hiring outcomes are probabilistic, with costs compounding after the offer.', icon: X }
  ];

  const afterMetrics = [
    { text: '20–30 days to hire using one real job simulation', icon: Check },
    { text: '1–2 interview rounds only', icon: Check },
    { text: '7–11 total hours of recruiter + manager time per hire', icon: Check },
    { text: '70–80% of unqualified candidates filtered before interviews', icon: Check },
    { text: 'Job readiness validated before offer acceptance', icon: Check },
    { text: 'Bad-hire risk reduced prior to onboarding spend', icon: Check },
    { text: 'Hiring becomes measurable and controlled.', icon: Check }
  ];

  return (
    <section
      id="before-after-comparison"
      className="relative py-32 md:py-40 px-6 bg-gradient-to-b from-white via-violet-50/20 to-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="max-w-7xl mx-auto relative">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-[-0.04em] text-balance">
            <span className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Reduce Hiring Cost and Risk With{' '}
            </span>
            <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-blue-600 bg-clip-text text-transparent">
              Real Job Simulations
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-white/80 backdrop-blur-sm border-2 border-red-200/50 rounded-3xl p-8 md:p-10 h-full shadow-xl shadow-red-500/5">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full mb-4">
                  <X className="w-4 h-4 text-red-600" />
                  <span className="text-sm font-semibold text-red-600 uppercase tracking-wider">Before</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Before PromptBI</h3>
              </div>

              <div className="space-y-5">
                {beforeMetrics.map((metric, index) => (
                  <div
                    key={index}
                    className={`flex gap-4 items-start transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-red-100 flex items-center justify-center mt-0.5">
                      <metric.icon className="w-4 h-4 text-red-600" strokeWidth={2.5} />
                    </div>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      {metric.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative bg-gradient-to-br from-blue-50 via-violet-50 to-blue-50 border-2 border-blue-200/50 rounded-3xl p-8 md:p-10 h-full shadow-xl shadow-blue-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-violet-400/5 rounded-3xl" />
              <div className="relative">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-violet-500/10 border border-blue-300/50 rounded-full mb-4 shadow-lg shadow-blue-500/10">
                    <Check className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent uppercase tracking-wider">After</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-2">After PromptBI</h3>
                </div>

                <div className="space-y-5">
                  {afterMetrics.map((metric, index) => (
                    <div
                      key={index}
                      className={`flex gap-4 items-start transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'}`}
                      style={{ transitionDelay: `${400 + index * 100}ms` }}
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center mt-0.5 shadow-lg shadow-blue-500/25">
                        <metric.icon className="w-4 h-4 text-white" strokeWidth={2.5} />
                      </div>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        {metric.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
