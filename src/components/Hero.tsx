import { useState } from 'react';
import { X, ChevronRight, ChevronLeft } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface HeroProps {
  onCTAClick: () => void;
}

type ModalType = 'waitlist' | 'ambassador' | null;

export default function Hero({ onCTAClick }: HeroProps) {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role_status: '',
    company_or_school: '',
    job_title: '',
    primary_goal: '',
    experience_level: '',
    biggest_challenge: '',
    timeline: '',
    why_interested: '',
    campus_name: '',
    country: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      role_status: '',
      company_or_school: '',
      job_title: '',
      primary_goal: '',
      experience_level: '',
      biggest_challenge: '',
      timeline: '',
      why_interested: '',
      campus_name: '',
      country: ''
    });
    setStep(1);
    setSubmitSuccess(false);
  };

  const handleSubmit = async (e: React.FormEvent, type: string) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (type === 'ambassador') {
        const { error } = await supabase
          .from('campus_ambassadors')
          .insert([
            {
              name: formData.name,
              email: formData.email,
              phone: formData.phone || null,
              campus_name: formData.campus_name,
              country: formData.country,
              why_interested: formData.why_interested || null,
            },
          ]);

        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('beta_testers')
          .insert([
            {
              full_name: formData.name,
              email: formData.email,
              phone: formData.phone || null,
              role_status: formData.role_status || null,
              company_or_school: formData.company_or_school || null,
              job_title: formData.job_title || null,
              primary_goal: formData.primary_goal || null,
              experience_level: formData.experience_level || null,
              biggest_challenge: formData.biggest_challenge || null,
              timeline: formData.timeline || null,
              why_interested: formData.why_interested || null,
              source: type,
            },
          ]);

        if (error) throw error;
      }

      setSubmitSuccess(true);

      setTimeout(() => {
        setActiveModal(null);
        resetForm();
      }, 2500);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (activeModal === 'ambassador' && step < 3) {
      setStep(step + 1);
    } else if (activeModal === 'waitlist' && step < 4) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const canProceedWaitlist = () => {
    switch (step) {
      case 1:
        return formData.name && formData.email && formData.role_status;
      case 2:
        return formData.primary_goal && formData.experience_level;
      case 3:
        return formData.biggest_challenge && formData.timeline;
      case 4:
        return true;
      default:
        return false;
    }
  };

  const canProceedAmbassador = () => {
    switch (step) {
      case 1:
        return formData.name && formData.email;
      case 2:
        return formData.campus_name && formData.country;
      case 3:
        return true;
      default:
        return false;
    }
  };

  const renderModal = () => {
    if (!activeModal) return null;

    const modalConfig = {
      waitlist: {
        title: 'Join the Waitlist',
        description: 'Be among the first to experience PromptBI',
        totalSteps: 4,
      },
      ambassador: {
        title: 'Become a Campus Ambassador',
        description: 'Lead data science revolution at your campus',
        totalSteps: 3,
      },
    };

    const config = modalConfig[activeModal];

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in overflow-y-auto">
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 my-8 animate-scale-in" style={{ border: '1px solid rgba(32, 57, 229, 0.1)' }}>
          <button
            onClick={() => {
              setActiveModal(null);
              resetForm();
            }}
            className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" style={{ color: '#0F0E0E' }} />
          </button>

          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2" style={{ color: '#0F0E0E' }}>
              {config.title}
            </h2>
            <p className="text-sm mb-4" style={{ color: '#0F0E0E', opacity: 0.6 }}>
              {config.description}
            </p>
            <div className="flex space-x-2">
              {Array.from({ length: config.totalSteps }).map((_, i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full flex-1 transition-all ${
                    i + 1 <= step ? 'bg-gradient-to-r from-blue-600 to-cyan-500' : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
          </div>

          {submitSuccess ? (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">✅</div>
              <p className="text-lg font-semibold" style={{ color: '#2039E5' }}>
                Success! We'll be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={(e) => handleSubmit(e, activeModal)} className="space-y-4">
              {activeModal === 'waitlist' && (
                <>
                  {step === 1 && (
                    <>
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#0F0E0E' }}>
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none"
                          style={{ borderColor: '#e5e5e5', color: '#0F0E0E' }}
                          onFocus={(e) => (e.target.style.borderColor = '#2039E5')}
                          onBlur={(e) => (e.target.style.borderColor = '#e5e5e5')}
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#0F0E0E' }}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none"
                          style={{ borderColor: '#e5e5e5', color: '#0F0E0E' }}
                          onFocus={(e) => (e.target.style.borderColor = '#2039E5')}
                          onBlur={(e) => (e.target.style.borderColor = '#e5e5e5')}
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#0F0E0E' }}>
                          What best describes you? *
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {['Student', 'Employed Full-Time', 'Career Switcher', 'Between Jobs'].map((option) => (
                            <button
                              key={option}
                              type="button"
                              onClick={() => setFormData({ ...formData, role_status: option })}
                              className={`p-3 rounded-xl border-2 transition-all text-left ${
                                formData.role_status === option
                                  ? 'border-blue-500 bg-blue-50'
                                  : 'border-gray-200 hover:border-blue-300'
                              }`}
                            >
                              <span className="font-semibold text-sm text-gray-900">{option}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {step === 2 && (
                    <>
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#0F0E0E' }}>
                          Company or School
                        </label>
                        <input
                          type="text"
                          value={formData.company_or_school}
                          onChange={(e) => setFormData({ ...formData, company_or_school: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none"
                          style={{ borderColor: '#e5e5e5', color: '#0F0E0E' }}
                          onFocus={(e) => (e.target.style.borderColor = '#2039E5')}
                          onBlur={(e) => (e.target.style.borderColor = '#e5e5e5')}
                          placeholder="Google, MIT, etc."
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#0F0E0E' }}>
                          Current Job Title
                        </label>
                        <input
                          type="text"
                          value={formData.job_title}
                          onChange={(e) => setFormData({ ...formData, job_title: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none"
                          style={{ borderColor: '#e5e5e5', color: '#0F0E0E' }}
                          onFocus={(e) => (e.target.style.borderColor = '#2039E5')}
                          onBlur={(e) => (e.target.style.borderColor = '#e5e5e5')}
                          placeholder="Marketing Manager, Student, etc."
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#0F0E0E' }}>
                          What's your primary goal? *
                        </label>
                        <div className="space-y-2">
                          {[
                            'Get my first data job',
                            'Switch to data career',
                            'Upskill in current role',
                            'Start a side hustle',
                            'Learn for personal projects'
                          ].map((option) => (
                            <button
                              key={option}
                              type="button"
                              onClick={() => setFormData({ ...formData, primary_goal: option })}
                              className={`w-full p-3 rounded-xl border-2 transition-all text-left ${
                                formData.primary_goal === option
                                  ? 'border-blue-500 bg-blue-50'
                                  : 'border-gray-200 hover:border-blue-300'
                              }`}
                            >
                              <span className="font-semibold text-sm text-gray-900">{option}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#0F0E0E' }}>
                          Your experience with data? *
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            'Complete beginner',
                            'I use Excel/Sheets',
                            'Some Python/SQL',
                            'Intermediate level'
                          ].map((option) => (
                            <button
                              key={option}
                              type="button"
                              onClick={() => setFormData({ ...formData, experience_level: option })}
                              className={`p-3 rounded-xl border-2 transition-all text-left ${
                                formData.experience_level === option
                                  ? 'border-blue-500 bg-blue-50'
                                  : 'border-gray-200 hover:border-blue-300'
                              }`}
                            >
                              <span className="font-semibold text-sm text-gray-900">{option}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {step === 3 && (
                    <>
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#0F0E0E' }}>
                          What's your biggest challenge right now? *
                        </label>
                        <textarea
                          required
                          value={formData.biggest_challenge}
                          onChange={(e) => setFormData({ ...formData, biggest_challenge: e.target.value })}
                          rows={4}
                          className="w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none resize-none"
                          style={{ borderColor: '#e5e5e5', color: '#0F0E0E' }}
                          onFocus={(e) => (e.target.style.borderColor = '#2039E5')}
                          onBlur={(e) => (e.target.style.borderColor = '#e5e5e5')}
                          placeholder="e.g., Don't know where to start, Can't find time to learn, etc."
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#0F0E0E' }}>
                          When do you want to get results? *
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {['ASAP (1-2 months)', '3-6 months', '6-12 months', 'Just exploring'].map((option) => (
                            <button
                              key={option}
                              type="button"
                              onClick={() => setFormData({ ...formData, timeline: option })}
                              className={`p-3 rounded-xl border-2 transition-all text-left ${
                                formData.timeline === option
                                  ? 'border-blue-500 bg-blue-50'
                                  : 'border-gray-200 hover:border-blue-300'
                              }`}
                            >
                              <span className="font-semibold text-sm text-gray-900">{option}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {step === 4 && (
                    <>
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#0F0E0E' }}>
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none"
                          style={{ borderColor: '#e5e5e5', color: '#0F0E0E' }}
                          onFocus={(e) => (e.target.style.borderColor = '#2039E5')}
                          onBlur={(e) => (e.target.style.borderColor = '#e5e5e5')}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#0F0E0E' }}>
                          Why do you want to join PromptBI?
                        </label>
                        <textarea
                          value={formData.why_interested}
                          onChange={(e) => setFormData({ ...formData, why_interested: e.target.value })}
                          rows={3}
                          className="w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none resize-none"
                          style={{ borderColor: '#e5e5e5', color: '#0F0E0E' }}
                          onFocus={(e) => (e.target.style.borderColor = '#2039E5')}
                          onBlur={(e) => (e.target.style.borderColor = '#e5e5e5')}
                          placeholder="What excites you about learning data science with us?"
                        />
                      </div>
                    </>
                  )}
                </>
              )}

              {activeModal === 'ambassador' && (
                <>
                  {step === 1 && (
                    <>
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#0F0E0E' }}>
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none"
                          style={{ borderColor: '#e5e5e5', color: '#0F0E0E' }}
                          onFocus={(e) => (e.target.style.borderColor = '#2039E5')}
                          onBlur={(e) => (e.target.style.borderColor = '#e5e5e5')}
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#0F0E0E' }}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none"
                          style={{ borderColor: '#e5e5e5', color: '#0F0E0E' }}
                          onFocus={(e) => (e.target.style.borderColor = '#2039E5')}
                          onBlur={(e) => (e.target.style.borderColor = '#e5e5e5')}
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#0F0E0E' }}>
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none"
                          style={{ borderColor: '#e5e5e5', color: '#0F0E0E' }}
                          onFocus={(e) => (e.target.style.borderColor = '#2039E5')}
                          onBlur={(e) => (e.target.style.borderColor = '#e5e5e5')}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </>
                  )}

                  {step === 2 && (
                    <>
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#0F0E0E' }}>
                          Name of Your Campus *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.campus_name}
                          onChange={(e) => setFormData({ ...formData, campus_name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none"
                          style={{ borderColor: '#e5e5e5', color: '#0F0E0E' }}
                          onFocus={(e) => (e.target.style.borderColor = '#2039E5')}
                          onBlur={(e) => (e.target.style.borderColor = '#e5e5e5')}
                          placeholder="Harvard University"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#0F0E0E' }}>
                          Country *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none"
                          style={{ borderColor: '#e5e5e5', color: '#0F0E0E' }}
                          onFocus={(e) => (e.target.style.borderColor = '#2039E5')}
                          onBlur={(e) => (e.target.style.borderColor = '#e5e5e5')}
                          placeholder="United States"
                        />
                      </div>
                    </>
                  )}

                  {step === 3 && (
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#0F0E0E' }}>
                        Why do you want to be a campus ambassador?
                      </label>
                      <textarea
                        value={formData.why_interested}
                        onChange={(e) => setFormData({ ...formData, why_interested: e.target.value })}
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none resize-none"
                        style={{ borderColor: '#e5e5e5', color: '#0F0E0E' }}
                        onFocus={(e) => (e.target.style.borderColor = '#2039E5')}
                        onBlur={(e) => (e.target.style.borderColor = '#e5e5e5')}
                        placeholder="Tell us why you're interested..."
                      />
                    </div>
                  )}
                </>
              )}

              <div className="flex items-center justify-between pt-4">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 font-semibold transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div />
                )}

                {((activeModal === 'waitlist' && step < 4) || (activeModal === 'ambassador' && step < 3)) ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={activeModal === 'waitlist' ? !canProceedWaitlist() : !canProceedAmbassador()}
                    className="flex items-center space-x-2 px-6 py-3 text-white font-semibold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ backgroundColor: '#2039E5' }}
                  >
                    <span>Continue</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting || (activeModal === 'waitlist' ? !canProceedWaitlist() : !canProceedAmbassador())}
                    className="px-8 py-3 text-white font-semibold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ backgroundColor: '#2039E5' }}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="relative pt-24 pb-16 px-6 lg:px-12 overflow-visible bg-white">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center max-w-5xl mx-auto mb-12">
          <h1 className="text-[3.5rem] sm:text-[4.5rem] lg:text-[6rem] font-bold mb-8 tracking-[-0.04em] leading-[0.95] text-balance" style={{ color: '#0F0E0E' }}>
            Learn Data Science the Fun Way. 5x Faster to Jobs.
          </h1>

          <p className="text-xl sm:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed" style={{ color: '#0F0E0E', opacity: 0.7 }}>
            From Python basics to dashboards and storytelling, PromptBI makes data science easy, fun, and employable.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-4">
            <button
              onClick={() => setActiveModal('waitlist')}
              className="group px-8 py-4 text-white text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              style={{
                backgroundColor: '#2039E5',
                boxShadow: '0 8px 24px 0 rgba(32, 57, 229, 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#1a2ec9';
                e.currentTarget.style.boxShadow = '0 12px 32px 0 rgba(32, 57, 229, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#2039E5';
                e.currentTarget.style.boxShadow = '0 8px 24px 0 rgba(32, 57, 229, 0.3)';
              }}
            >
              Join Waitlist
            </button>

            <button
              onClick={() => setActiveModal('ambassador')}
              className="group px-8 py-4 bg-white text-lg font-semibold rounded-xl border-2 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              style={{
                color: '#0F0E0E',
                borderColor: '#e5e5e5',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#2039E5';
                e.currentTarget.style.backgroundColor = '#f8f9ff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e5e5e5';
                e.currentTarget.style.backgroundColor = '#ffffff';
              }}
            >
              Be a Campus Ambassador
            </button>
          </div>

          <div className="text-center mb-8">
            <p className="text-base font-medium" style={{ color: '#0F0E0E', opacity: 0.5 }}>
              Limited early access — secure your spot today.
            </p>
          </div>
        </div>

        <div className="mt-16 max-w-6xl mx-auto perspective-2000">
          <div
            className={`relative group cursor-pointer ${isImageExpanded ? 'scale-105' : ''}`}
            onClick={() => setIsImageExpanded(!isImageExpanded)}
          >
            <div
              className="absolute -inset-2 rounded-3xl opacity-30 group-hover:opacity-60 blur-2xl transition-all duration-700 animate-float-glow"
              style={{ background: 'linear-gradient(135deg, rgba(32, 57, 229, 0.4), rgba(32, 57, 229, 0.2), rgba(32, 57, 229, 0.4))' }}
            />

            <div
              className="relative bg-white rounded-2xl border p-3 shadow-[0_20px_60px_rgba(32,57,229,0.15)] hover:shadow-[0_30px_80px_rgba(32,57,229,0.25)] transition-all duration-700 transform hover:-translate-y-2 animate-float"
              style={{ borderColor: 'rgba(32, 57, 229, 0.2)' }}
            >
              <div className="rounded-xl overflow-hidden ring-2 ring-offset-2" style={{ ringColor: 'rgba(32, 57, 229, 0.1)' }}>
                <div className="relative overflow-hidden">
                  <img
                    src="/Screenshot 2025-10-01 at 22.47.38.png"
                    alt="PromptBI Analytics Platform"
                    className="w-full h-auto transform transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <div className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl" style={{ border: '1px solid rgba(32, 57, 229, 0.2)' }}>
                      <p className="text-sm font-semibold" style={{ color: '#2039E5' }}>
                        Click to explore PromptBI
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-60 blur-2xl animate-ping-slow" style={{ backgroundColor: 'rgba(32, 57, 229, 0.3)' }} />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full opacity-40 blur-2xl animate-ping-slower" style={{ backgroundColor: 'rgba(32, 57, 229, 0.2)' }} />
          </div>
        </div>
      </div>

      {renderModal()}

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes float-glow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }

        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        @keyframes ping-slower {
          0% {
            transform: scale(1);
            opacity: 0.4;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-glow {
          animation: float-glow 4s ease-in-out infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-ping-slower {
          animation: ping-slower 4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }

        .perspective-2000 {
          perspective: 2000px;
        }
      `}</style>
    </section>
  );
}
