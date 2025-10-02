import { X, Sparkles, CheckCircle2, Loader2, Mail, User, Briefcase } from 'lucide-react';
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  source: string;
}

export default function LeadCaptureModal({ isOpen, onClose, source }: LeadCaptureModalProps) {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [userType, setUserType] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !e.shiftKey && isOpen && !success) {
        e.preventDefault();
        if (canProceed()) {
          nextStep();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [step, email, name, userType, isOpen, success]);

  if (!isOpen) return null;

  const captureMarketingData = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return {
      utm_source: urlParams.get('utm_source') || null,
      utm_medium: urlParams.get('utm_medium') || null,
      utm_campaign: urlParams.get('utm_campaign') || null,
      utm_content: urlParams.get('utm_content') || null,
      utm_term: urlParams.get('utm_term') || null,
      referrer_url: document.referrer || null,
      landing_page: window.location.pathname,
      device_type: /Mobile|Android|iPhone/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
      browser: navigator.userAgent,
      session_id: sessionStorage.getItem('session_id') || crypto.randomUUID()
    };
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError('');

    const marketingData = captureMarketingData();
    sessionStorage.setItem('session_id', marketingData.session_id);

    try {
      const { error: submitError } = await supabase
        .from('leads')
        .insert([{
          email: email.trim(),
          name: name.trim(),
          source,
          user_type: userType,
          ...marketingData
        }]);

      if (submitError) {
        console.error('Supabase error:', submitError);
        if (submitError.code === '23505') {
          setError('This email is already registered!');
        } else {
          setError(`Unable to submit: ${submitError.message || 'Please try again.'}`);
        }
      } else {
        setSuccess(true);
        setTimeout(() => {
          onClose();
          setSuccess(false);
          setEmail('');
          setName('');
          setUserType('');
          setStep(1);
        }, 2500);
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      setError('Oops! Something went wrong. Try again or contact support.');
    } finally {
      setLoading(false);
    }
  };

  const nextStep = () => {
    if (step === 1 && email) {
      setStep(2);
      setError('');
    } else if (step === 2 && name) {
      setStep(3);
      setError('');
    } else if (step === 3 && userType) {
      handleSubmit();
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      setError('');
    }
  };

  const canProceed = () => {
    if (step === 1) return email.trim() !== '';
    if (step === 2) return name.trim() !== '';
    if (step === 3) return userType !== '';
    return false;
  };

  const progress = (step / 3) * 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-gray-200">
        {success ? (
          <div className="text-center p-12">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">You're In!</h3>
            <p className="text-gray-600">Check your email for next steps</p>
          </div>
        ) : (
          <div className="min-h-[500px] flex flex-col">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gray-100 rounded-t-3xl overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="p-8 md:p-12 flex-1 flex flex-col">
              <div className="mb-6 flex items-center justify-between">
                <div className="text-sm font-bold text-purple-600">
                  {step} → 3
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-1 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 flex flex-col justify-center max-w-xl mx-auto w-full">
                {step === 1 && (
                  <div className="space-y-8">
                    <div className="text-center mb-8">
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Sparkles className="w-7 h-7 text-purple-600" />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
                        Start Your Journey
                      </h3>
                      <p className="text-lg text-gray-600">Join 650+ learners mastering data science</p>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        What's your email?
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@example.com"
                          required
                          autoFocus
                          className="w-full pl-8 pr-0 py-4 text-xl bg-transparent border-0 border-b-2 border-gray-300 focus:border-purple-600 focus:ring-0 outline-none transition-all placeholder-gray-400"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
                        What's your name?
                      </h3>
                      <p className="text-lg text-gray-600">We'd love to know what to call you</p>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Jane Doe"
                          autoFocus
                          className="w-full pl-8 pr-0 py-4 text-xl bg-transparent border-0 border-b-2 border-gray-300 focus:border-purple-600 focus:ring-0 outline-none transition-all placeholder-gray-400"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
                        Tell us about yourself
                      </h3>
                      <p className="text-lg text-gray-600">What best describes you?</p>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        I'm a...
                      </label>
                      <div className="space-y-3">
                        {[
                          { value: 'complete_beginner', label: 'Complete Beginner', icon: Briefcase },
                          { value: 'student', label: 'Student', icon: Briefcase },
                          { value: 'career_switcher', label: 'Career Switcher', icon: Briefcase },
                          { value: 'professional', label: 'Working Professional', icon: Briefcase }
                        ].map((option) => (
                          <button
                            key={option.value}
                            onClick={() => setUserType(option.value)}
                            className={`w-full p-5 rounded-2xl border-2 transition-all text-left ${
                              userType === option.value
                                ? 'border-purple-600 bg-purple-50 shadow-lg'
                                : 'border-gray-200 hover:border-purple-300 hover:bg-gray-50'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <option.icon className="w-5 h-5 text-purple-600" />
                                <span className="font-semibold text-lg text-gray-900">{option.label}</span>
                              </div>
                              {userType === option.value && (
                                <CheckCircle2 className="w-5 h-5 text-purple-600" />
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {error && (
                  <div className="mt-6 text-red-600 text-sm text-center bg-red-50 py-2.5 px-4 rounded-xl border border-red-100">
                    {error}
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
                {step > 1 ? (
                  <button
                    onClick={prevStep}
                    className="text-gray-600 hover:text-gray-900 font-semibold px-4 py-3 rounded-xl hover:bg-gray-100 transition-all"
                  >
                    Back
                  </button>
                ) : (
                  <div />
                )}

                <div className="flex items-center space-x-3">
                  <div className="text-xs text-gray-500 hidden md:block">
                    Press <kbd className="px-2 py-1 bg-gray-100 rounded font-mono">Enter ↵</kbd>
                  </div>
                  <button
                    onClick={nextStep}
                    disabled={loading || !canProceed()}
                    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-bold text-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Joining...</span>
                      </>
                    ) : step === 3 ? (
                      <span>Get Started Free</span>
                    ) : (
                      <span>Continue</span>
                    )}
                  </button>
                </div>
              </div>

              {step === 1 && (
                <p className="text-xs text-center text-gray-500 mt-4">
                  No credit card required • Start learning in 2 minutes
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
