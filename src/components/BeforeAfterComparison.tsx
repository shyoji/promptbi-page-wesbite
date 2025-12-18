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
      className="py-32 md:py-40 px-6 bg-gradient-to-b from-white via-gray-50/50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#0A0A0A] mb-6 leading-tight tracking-[-0.04em] text-balance">
            Reduce Hiring Cost and Risk With Real Job Simulations
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Before PromptBI */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-white border-2 border-red-100 rounded-3xl p-8 md:p-10 h-full premium-shadow-lg">
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
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
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

          {/* After PromptBI */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white border-2 border-green-100 rounded-3xl p-8 md:p-10 h-full premium-shadow-lg">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full mb-4">
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">After</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">After PromptBI</h3>
              </div>

              <div className="space-y-5">
                {afterMetrics.map((metric, index) => (
                  <div
                    key={index}
                    className={`flex gap-4 items-start transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'}`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                      <metric.icon className="w-4 h-4 text-green-600" strokeWidth={2.5} />
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
    </section>
  );
}
