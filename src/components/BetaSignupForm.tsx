import { useState, useEffect } from 'react';
import { ChevronLeft, Sparkles, Loader2, CheckCircle2, Users, Zap, Gift, Award } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface BetaSignupFormProps {
  isOpen: boolean;
  onClose: () => void;
  source: string;
}

export default function BetaSignupForm({ isOpen, onClose, source }: BetaSignupFormProps) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    email: '',
    full_name: '',
    phone: '',
    role_status: '',
    company_or_school: '',
    job_title: '',
    primary_goal: '',
    experience_level: '',
    biggest_challenge: '',
    timeline: '',
    linkedin_url: '',
    portfolio_url: '',
    referral_source: '',
    why_interested: '',
    beta_perks_interest: [] as string[]
  });

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !e.shiftKey && isOpen && !submitted) {
        e.preventDefault();
        if (canProceed()) {
          nextStep();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [step, formData, isOpen, submitted]);

  if (!isOpen) return null;

  const updateField = (field: string, value: string | string[]) => {
    setFormData({ ...formData, [field]: value });
  };

  const togglePerk = (perk: string) => {
    const perks = formData.beta_perks_interest.includes(perk)
      ? formData.beta_perks_interest.filter(p => p !== perk)
      : [...formData.beta_perks_interest, perk];
    updateField('beta_perks_interest', perks);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError('');

    try {
      const { error: submitError } = await supabase
        .from('beta_testers')
        .insert([{ ...formData, source }]);

      if (submitError) {
        console.error('Supabase error:', submitError);
        if (submitError.code === '23505') {
          setError('This email is already registered for beta!');
        } else {
          setError(`Unable to submit: ${submitError.message || 'Please try again or contact support.'}`);
        }
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      setError('Something went wrong. Please try again or contact support.');
    } finally {
      setLoading(false);
    }
  };

  const nextStep = () => {
    if (step < 5) setStep(step + 1);
    setError('');
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
    setError('');
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.email && formData.full_name;
      case 2:
        return formData.role_status;
      case 3:
        return formData.primary_goal;
      case 4:
        return formData.experience_level;
      case 5:
        return formData.referral_source;
      default:
        return false;
    }
  };

  const progress = (step / 5) * 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative bg-white rounded-2xl max-w-md w-full my-8 shadow-2xl">
        {submitted ? (
          <div className="p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full mb-4">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-3">
              Welcome to Beta!
            </h3>
            <p className="text-base text-gray-700 mb-6">
              Check your email for next steps and exclusive beta perks.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-bold hover:shadow-xl transition-all"
            >
              Let's Go!
            </button>
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gray-100 rounded-t-2xl overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <div className="mb-4 flex items-center justify-between">
                <div className="text-xs font-bold text-blue-600">
                  {step} / 5
                </div>
                <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl">
                  ×
                </button>
              </div>

              <div className="flex-1 flex flex-col justify-center w-full">
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-black text-gray-900 mb-2">
                        Let's get to know you
                      </h3>
                      <p className="text-sm text-gray-600">Tell us a bit about yourself</p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => updateField('email', e.target.value)}
                          className="w-full px-0 py-3 text-base bg-transparent border-0 border-b-2 border-gray-300 focus:border-blue-600 focus:ring-0 outline-none transition-all placeholder-gray-400"
                          placeholder="you@example.com"
                          autoFocus
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={formData.full_name}
                          onChange={(e) => updateField('full_name', e.target.value)}
                          className="w-full px-0 py-3 text-base bg-transparent border-0 border-b-2 border-gray-300 focus:border-blue-600 focus:ring-0 outline-none transition-all placeholder-gray-400"
                          placeholder="Jane Doe"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-black text-gray-900 mb-2">
                        What best describes you?
                      </h3>
                      <p className="text-sm text-gray-600">Help us personalize your experience</p>
                    </div>

                    <div>
                      <div className="space-y-2">
                        {['Student', 'Employed Full-Time', 'Career Switcher', 'Between Jobs'].map((option) => (
                          <button
                            key={option}
                            onClick={() => updateField('role_status', option)}
                            className={`w-full p-3 rounded-xl border-2 transition-all text-left ${
                              formData.role_status === option
                                ? 'border-blue-600 bg-blue-50'
                                : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-semibold text-sm text-gray-900">{option}</span>
                              {formData.role_status === option && (
                                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-black text-gray-900 mb-2">
                        What's your primary goal?
                      </h3>
                      <p className="text-sm text-gray-600">What do you want to achieve?</p>
                    </div>

                    <div>
                      <div className="space-y-2">
                        {[
                          'Get my first data job',
                          'Switch to data career',
                          'Upskill in current role',
                          'Start a side hustle'
                        ].map((option) => (
                          <button
                            key={option}
                            onClick={() => updateField('primary_goal', option)}
                            className={`w-full p-3 rounded-xl border-2 transition-all text-left ${
                              formData.primary_goal === option
                                ? 'border-blue-600 bg-blue-50'
                                : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-semibold text-sm text-gray-900">{option}</span>
                              {formData.primary_goal === option && (
                                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-black text-gray-900 mb-2">
                        Your experience with data?
                      </h3>
                      <p className="text-sm text-gray-600">No judgment - we meet you where you are</p>
                    </div>

                    <div>
                      <div className="space-y-2">
                        {[
                          'Complete beginner',
                          'I use Excel/Sheets',
                          'Some Python/SQL',
                          'Intermediate level'
                        ].map((option) => (
                          <button
                            key={option}
                            onClick={() => updateField('experience_level', option)}
                            className={`w-full p-3 rounded-xl border-2 transition-all text-left ${
                              formData.experience_level === option
                                ? 'border-blue-600 bg-blue-50'
                                : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-semibold text-sm text-gray-900">{option}</span>
                              {formData.experience_level === option && (
                                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {step === 5 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-black text-gray-900 mb-2">
                        How did you hear about us?
                      </h3>
                      <p className="text-sm text-gray-600">Last question!</p>
                    </div>

                    <div>
                      <div className="space-y-2">
                        {[
                          'Google/Search',
                          'LinkedIn',
                          'Twitter/X',
                          'Friend/Colleague',
                          'YouTube',
                          'TikTok',
                          'Reddit',
                          'Other'
                        ].map((option) => (
                          <button
                            key={option}
                            onClick={() => updateField('referral_source', option)}
                            className={`w-full p-3 rounded-xl border-2 transition-all text-left ${
                              formData.referral_source === option
                                ? 'border-blue-600 bg-blue-50'
                                : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-semibold text-sm text-gray-900">{option}</span>
                              {formData.referral_source === option && (
                                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {error && (
                  <div className="mt-6 text-red-600 text-sm text-center bg-red-50 py-3 rounded-lg">
                    {error}
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
                {step > 1 ? (
                  <button
                    onClick={prevStep}
                    className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 font-semibold text-sm px-3 py-2 rounded-lg hover:bg-gray-100 transition-all"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div />
                )}

                <div className="flex items-center space-x-2">
                  <div className="text-xs text-gray-500 hidden md:block">
                    Press <kbd className="px-1.5 py-0.5 bg-gray-100 rounded text-xs font-mono">Enter ↵</kbd>
                  </div>
                  {step < 5 ? (
                    <button
                      onClick={nextStep}
                      disabled={!canProceed()}
                      className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-bold text-sm hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Continue
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={loading || !canProceed()}
                      className="flex items-center space-x-2 px-6 py-2.5 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-full font-bold text-sm hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Joining...</span>
                        </>
                      ) : (
                        <>
                          <span>Join Beta</span>
                          <CheckCircle2 className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
