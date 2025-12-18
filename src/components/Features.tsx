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
      </section>
    </>
  );
}
