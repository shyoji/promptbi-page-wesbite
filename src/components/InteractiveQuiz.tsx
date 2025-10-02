import { useState } from 'react';
import { ChevronRight, Sparkles, Loader2, CheckCircle2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function InteractiveQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    role: '',
    goal: '',
    experience: '',
    email: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    {
      question: "What's your current situation?",
      options: [
        { value: 'student', label: 'Student' },
        { value: 'employed', label: 'Working Full-Time' },
        { value: 'switching', label: 'Career Switcher' },
        { value: 'unemployed', label: 'Looking for Work' }
      ],
      key: 'role'
    },
    {
      question: "What's your main goal?",
      options: [
        { value: 'first_job', label: 'Get My First Data Job' },
        { value: 'upskill', label: 'Level Up Current Role' },
        { value: 'switch', label: 'Switch to Data Career' },
        { value: 'learn', label: 'Learn for Fun' }
      ],
      key: 'goal'
    },
    {
      question: "Your experience with data?",
      options: [
        { value: 'zero', label: 'Complete Beginner' },
        { value: 'some_excel', label: 'Excel Wizard' },
        { value: 'some_code', label: 'Coded a Bit' },
        { value: 'experienced', label: 'Pretty Experienced' }
      ],
      key: 'experience'
    }
  ];

  const handleAnswer = (value: string) => {
    const currentKey = questions[step].key;
    setAnswers({ ...answers, [currentKey]: value });

    if (step < questions.length - 1) {
      setTimeout(() => setStep(step + 1), 300);
    } else {
      setTimeout(() => setStep(step + 1), 300);
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await supabase.from('leads').insert([
        {
          email: answers.email,
          source: 'quiz',
          user_type: answers.role
        }
      ]);

      await supabase.from('quiz_responses').insert([{
        email: answers.email,
        role: answers.role,
        learning_goal: answers.goal,
        experience_level: answers.experience
      }]);

      setSubmitted(true);
    } catch (err) {
      console.error('Error submitting quiz:', err);
    } finally {
      setLoading(false);
    }
  };

  const getPersonalizedMessage = () => {
    if (answers.experience === 'zero') {
      return "Perfect! We'll start you from the basics and get you job-ready in 30 days.";
    } else if (answers.goal === 'first_job') {
      return "Great! Our graduates land their first data job 5x faster. Let's get you there.";
    } else {
      return "Awesome! We'll help you level up and stand out in the job market.";
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Find Your <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Perfect Path</span>
          </h2>
          <p className="text-xl text-gray-600">30 seconds to your personalized learning plan</p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-2xl">
          {submitted ? (
            <div className="text-center py-8">
              <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
              <h3 className="text-3xl font-black text-gray-900 mb-4">
                You're All Set!
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                {getPersonalizedMessage()}
              </p>
              <p className="text-gray-600">
                Check your email for your personalized learning roadmap!
              </p>
            </div>
          ) : step < questions.length ? (
            <>
              <div className="mb-8">
                <div className="flex space-x-2 mb-4">
                  {questions.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-2 rounded-full flex-1 transition-all ${
                        idx <= step ? 'bg-gradient-to-r from-purple-600 to-pink-500' : 'bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600">Question {step + 1} of {questions.length}</p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {questions[step].question}
              </h3>

              <div className="space-y-3">
                {questions[step].options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    className="w-full p-6 text-left bg-gradient-to-r from-gray-50 to-purple-50 hover:from-purple-100 hover:to-pink-100 rounded-2xl border-2 border-gray-200 hover:border-purple-400 transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-gray-900">{option.label}</span>
                      <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <form onSubmit={handleEmailSubmit} className="space-y-6">
              <div className="text-center mb-6">
                <Sparkles className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Last Step!
                </h3>
                <p className="text-gray-600">
                  Get your personalized learning plan
                </p>
              </div>

              <input
                type="email"
                value={answers.email}
                onChange={(e) => setAnswers({ ...answers, email: e.target.value })}
                placeholder="Enter your email"
                required
                className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors text-gray-900 text-lg"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-bold text-lg hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center space-x-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Creating Your Plan...</span>
                  </>
                ) : (
                  <>
                    <span>Get My Learning Plan</span>
                    <ChevronRight className="w-5 h-5" />
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 text-center">
                Free forever. No credit card required.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
