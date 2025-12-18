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
    <section id="how-it-works" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            How it works
          </h2>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('analysts')}
              className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all ${
                activeTab === 'analysts'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              For Analysts
            </button>
            <button
              onClick={() => setActiveTab('hiring')}
              className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all ${
                activeTab === 'hiring'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              For Hiring Teams
            </button>
          </div>
        </div>

        <div className="space-y-8 mb-10">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex gap-4 items-start"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-medium">
                {step.number}
              </div>
              <div className="flex-1 pt-0.5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <p className="text-base text-gray-900 leading-relaxed">
            <span className="font-semibold">Result: </span>
            {result}
          </p>
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white text-base font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            {ctaText}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
