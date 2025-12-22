import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

type UserType = 'analysts' | 'hiring';

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState<UserType>('analysts');

  const analystsSteps = [
    {
      number: 1,
      title: 'Do the actual job, not a test',
      description: 'Complete a realistic job simulation using messy data and real business questions. No resumes. No trick questions.'
    },
    {
      number: 2,
      title: 'Work under real conditions',
      description: "You're evaluated on how you think, prioritize, and explain decisions, not on perfect outputs or AI-polished answers."
    },
    {
      number: 3,
      title: 'Be judged on real performance',
      description: 'Your reasoning, analysis, and communication are assessed using criteria that mirror real analyst work.'
    },
    {
      number: 4,
      title: 'Get surfaced to hiring teams',
      description: 'Top performers are ranked and shared directly with companies hiring for real roles.'
    }
  ];

  const hiringSteps = [
    {
      number: 1,
      title: 'Replace early screening with a job simulation',
      description: 'One realistic simulation replaces resume screening, take-home tests, and early technical interviews.'
    },
    {
      number: 2,
      title: 'Watch candidates do the job',
      description: 'See how candidates reason through ambiguity, handle messy data, and communicate insights.'
    },
    {
      number: 3,
      title: 'Filter out unqualified candidates early',
      description: 'PromptBI filters 70–80% of unqualified candidates before interviews begin.'
    },
    {
      number: 4,
      title: 'Interview only proven candidates',
      description: 'Receive a ranked shortlist based on real job performance, not subjective impressions.'
    }
  ];

  const steps = activeTab === 'analysts' ? analystsSteps : hiringSteps;
  const result = activeTab === 'analysts'
    ? "You're evaluated on ability and job readiness — not background, pedigree, or presentation."
    : "Faster hiring, fewer interviews, and materially lower risk of bad hires.";
  const ctaText = activeTab === 'analysts'
    ? "Try a Real Job Simulation"
    : "Create a Job Simulation";

  return (
    <section id="how-it-works" className="relative py-24 md:py-32 px-6 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="max-w-3xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4">
            How it works
          </h2>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100/80 backdrop-blur-sm rounded-xl p-1.5 shadow-sm">
            <button
              onClick={() => setActiveTab('analysts')}
              className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeTab === 'analysts'
                  ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/25'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              For Analysts
            </button>
            <button
              onClick={() => setActiveTab('hiring')}
              className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeTab === 'hiring'
                  ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/25'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              For Hiring Teams
            </button>
          </div>
        </div>

        <div className="space-y-6 mb-10">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex gap-5 items-start p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:border-blue-300/50 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white flex items-center justify-center text-base font-bold shadow-lg shadow-blue-500/25">
                {step.number}
              </div>
              <div className="flex-1 pt-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-50 via-violet-50/50 to-blue-50 border border-blue-200/50 rounded-2xl p-8 mb-10 shadow-lg shadow-blue-500/10">
          <p className="text-base text-gray-900 leading-relaxed">
            <span className="font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">Result: </span>
            {result}
          </p>
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-base font-semibold rounded-xl hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 active:scale-95 transition-all duration-300"
          >
            {ctaText}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
