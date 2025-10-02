import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface FormData {
  name: string;
  email: string;
  role_type: string;
  technical_level: string;
  current_tools: string[];
  tools_other: string;
  job_title: string;
  company_size: string;
  years_experience: string;
  biggest_challenge: string;
  learning_goal: string;
}

export default function MasterclassPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [startTime] = useState(Date.now());
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    role_type: '',
    technical_level: '',
    current_tools: [],
    tools_other: '',
    job_title: '',
    company_size: '',
    years_experience: '',
    biggest_challenge: '',
    learning_goal: ''
  });

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentStep, formData]);

  const updateField = (field: keyof FormData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleTool = (tool: string) => {
    setFormData(prev => ({
      ...prev,
      current_tools: prev.current_tools.includes(tool)
        ? prev.current_tools.filter(t => t !== tool)
        : [...prev.current_tools, tool]
    }));
  };

  const calculateLeadScore = () => {
    let score = 0;

    if (formData.role_type === 'professional') score += 30;
    else if (formData.role_type === 'career_changer') score += 25;
    else if (formData.role_type === 'student') score += 15;

    if (formData.technical_level === 'beginner' || formData.technical_level === 'intermediate') score += 20;
    else if (formData.technical_level === 'non_technical') score += 25;

    if (formData.current_tools.length > 0) score += 15;
    if (formData.company_size === 'medium' || formData.company_size === 'large') score += 20;
    if (formData.biggest_challenge.length > 50) score += 10;
    if (formData.learning_goal.length > 30) score += 10;

    return Math.min(score, 100);
  };

  const captureMarketingData = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return {
      utm_source: urlParams.get('utm_source') || null,
      utm_campaign: urlParams.get('utm_campaign') || null,
      referrer_url: document.referrer || null,
      device_type: /Mobile|Android|iPhone/i.test(navigator.userAgent) ? 'mobile' : 'desktop'
    };
  };

  const handleNext = () => {
    const step = steps[currentStep];

    if (step.validate && !step.validate()) {
      return;
    }

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setError('');
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setError('');
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError('');

    const marketingData = captureMarketingData();
    const completionTime = Math.floor((Date.now() - startTime) / 1000);
    const leadScore = calculateLeadScore();

    try {
      const { error: submitError } = await supabase
        .from('masterclass_registrations')
        .insert([
          {
            name: formData.name.trim(),
            email: formData.email.trim(),
            role_type: formData.role_type,
            technical_level: formData.technical_level,
            current_tools: formData.current_tools,
            tools_other: formData.tools_other || null,
            job_title: formData.job_title || null,
            company_size: formData.company_size || null,
            years_experience: formData.years_experience ? parseInt(formData.years_experience) : null,
            biggest_challenge: formData.biggest_challenge || null,
            learning_goal: formData.learning_goal || null,
            lead_score: leadScore,
            form_completion_time: completionTime,
            event_date: '2025-10-04',
            registered_at: new Date().toISOString(),
            ...marketingData
          }
        ]);

      if (submitError) {
        console.error('Supabase error:', submitError);
        if (submitError.code === '23505') {
          setError('This email is already registered for the masterclass!');
        } else {
          setError('Unable to complete registration. Please try again or contact support.');
        }
      } else {
        setIsSuccess(true);
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    {
      question: "Let's start with your name",
      subtitle: "What should we call you?",
      component: (
        <input
          type="text"
          value={formData.name}
          onChange={(e) => updateField('name', e.target.value)}
          placeholder="Type your answer here..."
          className="w-full px-0 py-4 text-2xl bg-transparent border-0 border-b-2 border-gray-300 focus:border-violet-600 focus:ring-0 outline-none transition-all placeholder-gray-400"
          autoFocus
        />
      ),
      validate: () => {
        if (!formData.name.trim()) {
          setError('Please enter your name');
          return false;
        }
        return true;
      }
    },
    {
      question: "What's your email?",
      subtitle: "We'll send your masterclass link here",
      component: (
        <input
          type="email"
          value={formData.email}
          onChange={(e) => updateField('email', e.target.value)}
          placeholder="name@example.com"
          className="w-full px-0 py-4 text-2xl bg-transparent border-0 border-b-2 border-gray-300 focus:border-violet-600 focus:ring-0 outline-none transition-all placeholder-gray-400"
          autoFocus
        />
      ),
      validate: () => {
        if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          setError('Please enter a valid email address');
          return false;
        }
        return true;
      }
    },
    {
      question: "Which best describes you?",
      subtitle: "This helps us personalize your experience",
      component: (
        <div className="space-y-3">
          {[
            { value: 'student', label: 'Student', desc: 'Currently studying or recent graduate' },
            { value: 'professional', label: 'Working Professional', desc: 'Currently employed in any field' },
            { value: 'career_changer', label: 'Career Changer', desc: 'Transitioning to a new career' },
            { value: 'entrepreneur', label: 'Entrepreneur', desc: 'Building or running a business' }
          ].map(option => (
            <button
              key={option.value}
              onClick={() => updateField('role_type', option.value)}
              className={`w-full text-left p-6 rounded-2xl border-2 transition-all ${
                formData.role_type === option.value
                  ? 'border-violet-600 bg-violet-50 shadow-lg scale-[1.02]'
                  : 'border-gray-200 hover:border-violet-300 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xl font-bold text-gray-900">{option.label}</div>
                  <div className="text-sm text-gray-600 mt-1">{option.desc}</div>
                </div>
                {formData.role_type === option.value && (
                  <CheckCircle2 className="w-6 h-6 text-violet-600 flex-shrink-0" />
                )}
              </div>
            </button>
          ))}
        </div>
      ),
      validate: () => {
        if (!formData.role_type) {
          setError('Please select an option');
          return false;
        }
        return true;
      }
    },
    {
      question: "What's your technical background?",
      subtitle: "No judgment - we meet you where you are",
      component: (
        <div className="space-y-3">
          {[
            { value: 'non_technical', label: 'Non-Technical', desc: 'Little to no technical experience' },
            { value: 'beginner', label: 'Beginner', desc: 'Some basic technical knowledge' },
            { value: 'intermediate', label: 'Intermediate', desc: 'Comfortable with common tools' },
            { value: 'advanced', label: 'Advanced', desc: 'Strong technical skills' }
          ].map(option => (
            <button
              key={option.value}
              onClick={() => updateField('technical_level', option.value)}
              className={`w-full text-left p-5 rounded-xl border-2 transition-all ${
                formData.technical_level === option.value
                  ? 'border-violet-600 bg-violet-50 shadow-lg'
                  : 'border-gray-200 hover:border-violet-300 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg font-bold text-gray-900">{option.label}</div>
                  <div className="text-sm text-gray-600 mt-0.5">{option.desc}</div>
                </div>
                {formData.technical_level === option.value && (
                  <CheckCircle2 className="w-5 h-5 text-violet-600" />
                )}
              </div>
            </button>
          ))}
        </div>
      ),
      validate: () => {
        if (!formData.technical_level) {
          setError('Please select your technical level');
          return false;
        }
        return true;
      }
    },
    {
      question: "Which tools do you currently use?",
      subtitle: "Select all that apply (or skip if none)",
      component: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {[
              'Excel',
              'Google Sheets',
              'Tableau',
              'Power BI',
              'SQL',
              'Python',
              'R',
              'Looker',
              'Metabase',
              'None yet'
            ].map(tool => (
              <button
                key={tool}
                onClick={() => toggleTool(tool)}
                className={`p-4 rounded-xl border-2 transition-all font-semibold ${
                  formData.current_tools.includes(tool)
                    ? 'border-violet-600 bg-violet-50 text-violet-700'
                    : 'border-gray-200 hover:border-violet-300 text-gray-700'
                }`}
              >
                {tool}
              </button>
            ))}
          </div>
          <input
            type="text"
            value={formData.tools_other}
            onChange={(e) => updateField('tools_other', e.target.value)}
            placeholder="Other tools? Type them here..."
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-violet-600 focus:ring-0 outline-none transition-all"
          />
        </div>
      ),
      validate: () => true
    },
    {
      question: "What's your job title?",
      subtitle: "Optional - helps us understand your background",
      component: (
        <input
          type="text"
          value={formData.job_title}
          onChange={(e) => updateField('job_title', e.target.value)}
          placeholder="e.g., Marketing Manager, Data Analyst, Student..."
          className="w-full px-0 py-4 text-2xl bg-transparent border-0 border-b-2 border-gray-300 focus:border-violet-600 focus:ring-0 outline-none transition-all placeholder-gray-400"
          autoFocus
        />
      ),
      validate: () => true
    },
    {
      question: "What's your biggest data challenge?",
      subtitle: "What problem would you most like to solve?",
      component: (
        <textarea
          value={formData.biggest_challenge}
          onChange={(e) => updateField('biggest_challenge', e.target.value)}
          placeholder="Share your biggest challenge with data or analytics..."
          rows={4}
          className="w-full px-0 py-4 text-xl bg-transparent border-0 border-b-2 border-gray-300 focus:border-violet-600 focus:ring-0 outline-none transition-all placeholder-gray-400 resize-none"
          autoFocus
        />
      ),
      validate: () => true
    },
    {
      question: "What do you hope to learn?",
      subtitle: "What's your main goal for this masterclass?",
      component: (
        <textarea
          value={formData.learning_goal}
          onChange={(e) => updateField('learning_goal', e.target.value)}
          placeholder="Tell us what you want to achieve..."
          rows={4}
          className="w-full px-0 py-4 text-xl bg-transparent border-0 border-b-2 border-gray-300 focus:border-violet-600 focus:ring-0 outline-none transition-all placeholder-gray-400 resize-none"
          autoFocus
        />
      ),
      validate: () => true
    }
  ];

  const currentStepData = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-pink-50 to-orange-50 flex items-center justify-center px-6">
        <div className="max-w-2xl w-full">
          <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              You're All Set, {formData.name}!
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Check your email for the masterclass link and calendar invite.
            </p>
            <div className="bg-gradient-to-br from-violet-50 to-pink-50 rounded-2xl p-6 mb-8">
              <div className="text-sm font-bold text-gray-600 mb-2">MARK YOUR CALENDAR</div>
              <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-600">
                October 4, 2025 • 3:00 PM EAT
              </div>
            </div>
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-violet-600 hover:text-violet-700 font-semibold transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to homepage</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-100 z-50">
        <div
          className="h-full bg-gradient-to-r from-violet-600 via-pink-600 to-orange-500 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12 min-h-screen flex flex-col">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-gray-500 hover:text-gray-700 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </Link>
        </div>

        <div className="flex-1 flex flex-col justify-center max-w-2xl">
          <div className="mb-12">
            <div className="text-sm font-bold text-violet-600 mb-4">
              {currentStep + 1} → {steps.length}
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-3 leading-tight">
              {currentStepData.question}
            </h1>
            <p className="text-lg text-gray-600">
              {currentStepData.subtitle}
            </p>
          </div>

          <div className="mb-8">
            {currentStepData.component}
          </div>

          {error && (
            <div className="flex items-center space-x-2 text-red-600 text-sm bg-red-50 p-4 rounded-xl border border-red-200 mb-6">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div className="flex items-center justify-between pt-6 border-t border-gray-200">
            <button
              onClick={handleBack}
              disabled={currentStep === 0}
              className="px-6 py-3 text-gray-600 font-semibold rounded-xl hover:bg-gray-100 transition-all disabled:opacity-0 disabled:cursor-not-allowed"
            >
              Back
            </button>

            <div className="flex items-center space-x-3">
              <div className="text-xs text-gray-500">
                Press <kbd className="px-2 py-1 bg-gray-100 rounded font-mono">Enter ↵</kbd>
              </div>
              <button
                onClick={handleNext}
                disabled={isSubmitting}
                className="px-8 py-4 bg-gradient-to-r from-violet-600 to-pink-600 text-white font-bold rounded-xl hover:shadow-lg transition-all disabled:opacity-50 flex items-center space-x-2"
              >
                {isSubmitting ? (
                  <span>Submitting...</span>
                ) : currentStep === steps.length - 1 ? (
                  <span>Complete Registration</span>
                ) : (
                  <>
                    <span>Next</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-gray-400 mt-8">
          <p>Your information is secure and will never be shared</p>
        </div>
      </div>
    </div>
  );
}
