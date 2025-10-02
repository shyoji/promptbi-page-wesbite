import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Video, Check, Users, Target, Sparkles, ArrowRight } from 'lucide-react';

export default function EventDetailsPage() {
  const [showBookingForm, setShowBookingForm] = useState(false);

  const agenda = [
    {
      time: '3:00 PM',
      title: 'Welcome & Introduction',
      description: 'Meet your instructor and fellow analysts'
    },
    {
      time: '3:10 PM',
      title: 'The Analyst Mindset',
      description: 'Understanding how top analysts think differently'
    },
    {
      time: '3:30 PM',
      title: 'Framework: The 5 Critical Questions',
      description: 'Learn the questioning framework used by elite analysts'
    },
    {
      time: '4:00 PM',
      title: 'Live Case Study',
      description: 'Watch Evelyn solve a real business problem step-by-step'
    },
    {
      time: '4:30 PM',
      title: 'Interactive Exercise',
      description: 'Practice the framework with your cohort'
    },
    {
      time: '4:50 PM',
      title: 'Q&A & Next Steps',
      description: 'Get your questions answered and learn about PromptBI'
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Think Like a Pro',
      description: 'Master the mental models that separate good analysts from great ones'
    },
    {
      icon: Sparkles,
      title: 'Proven Framework',
      description: 'Get a battle-tested questioning framework used at top companies'
    },
    {
      icon: Users,
      title: 'Live Interaction',
      description: 'Ask questions, get feedback, and learn with fellow analysts'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      role: 'Junior Analyst',
      quote: 'This masterclass completely changed how I approach data problems. The framework is gold!'
    },
    {
      name: 'James K.',
      role: 'Career Switcher',
      quote: 'Finally, someone who explains the thinking process, not just the tools. Game changer.'
    },
    {
      name: 'Maria L.',
      role: 'Business Analyst',
      quote: 'Evelyn\'s insights are incredible. I\'ve already applied this in my current role.'
    }
  ];

  if (showBookingForm) {
    window.location.href = '/masterclass';
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-violet-50 via-pink-50 to-orange-50 py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors text-sm font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>

      <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-violet-50 via-pink-50 to-orange-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-violet-200/40 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-orange-200/40 via-transparent to-transparent" />

        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 text-white text-xs font-bold mb-6 tracking-wider shadow-lg shadow-violet-500/30">
              <span>FREE MASTERCLASS</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-pink-600 to-orange-500 mb-6 tracking-tight leading-tight">
              Think Like a Data Analyst
            </h1>

            <div className="inline-block px-6 py-3 bg-gradient-to-r from-orange-400 to-pink-500 rounded-2xl transform -rotate-1 shadow-2xl shadow-orange-500/30 mb-8">
              <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Critical Thinking Masterclass
              </p>
            </div>

            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed font-medium">
              Learn the questioning mindset and analytical framework that separates good analysts from great ones.
              Join Disney's Sr. Analyst Evelyn Cates for a transformative 2-hour live session.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
              <div className="flex items-center space-x-3 bg-white rounded-2xl px-6 py-4 shadow-lg">
                <Calendar className="w-6 h-6 text-violet-600" />
                <div className="text-left">
                  <div className="text-xs text-gray-500 font-bold uppercase">Date</div>
                  <div className="text-lg font-black text-gray-900">October 4, 2025</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white rounded-2xl px-6 py-4 shadow-lg">
                <Clock className="w-6 h-6 text-pink-600" />
                <div className="text-left">
                  <div className="text-xs text-gray-500 font-bold uppercase">Time</div>
                  <div className="text-lg font-black text-gray-900">3:00 PM EAT</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white rounded-2xl px-6 py-4 shadow-lg">
                <Video className="w-6 h-6 text-orange-600" />
                <div className="text-left">
                  <div className="text-xs text-gray-500 font-bold uppercase">Format</div>
                  <div className="text-lg font-black text-gray-900">Live Virtual</div>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowBookingForm(true)}
              className="group inline-flex items-center space-x-3 px-12 py-6 bg-gradient-to-r from-violet-600 via-pink-600 to-orange-500 text-white text-xl font-black rounded-full hover:scale-105 transition-all shadow-2xl shadow-violet-500/40 hover:shadow-3xl"
            >
              <span>Book Your Spot - FREE</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>

            <p className="text-sm text-gray-700 font-bold mt-4 flex items-center justify-center gap-2">
              <span className="inline-block w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              Only 247 seats remaining
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-gradient-to-br from-violet-50 to-pink-50 rounded-3xl p-8 border-2 border-violet-100">
              <h2 className="text-3xl font-black text-gray-900 mb-6">About Your Instructor</h2>
              <div className="flex items-start space-x-4 mb-6">
                <img
                  src="/IMG_1415.jpeg"
                  alt="Evelyn Cates"
                  className="w-20 h-20 rounded-2xl object-cover shadow-lg"
                />
                <div>
                  <h3 className="text-xl font-black text-gray-900">Evelyn Cates</h3>
                  <p className="text-violet-600 font-bold text-sm">Sr. Consumer Insights Analyst @ Disney</p>
                </div>
              </div>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold">8+ years experience in data analytics</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold">Expert in Python, SQL, and Tableau</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold">Passionate about mentoring aspiring analysts</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold">Led insights projects impacting millions</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-violet-600 via-pink-600 to-orange-500 rounded-3xl p-8 text-white">
              <h2 className="text-3xl font-black mb-6">What You'll Master</h2>
              <div className="space-y-4">
                {[
                  'The 5 Critical Questions framework every analyst needs',
                  'How to ask questions that uncover hidden insights',
                  'Challenge assumptions like a senior analyst',
                  'Frame business problems strategically',
                  'Think critically under pressure',
                  'Develop your analytical intuition',
                  'Communicate insights that drive decisions'
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-black text-gray-900 mb-4 text-center">Why Attend This Masterclass?</h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Most training teaches you the tools. This masterclass teaches you how to think.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-black text-gray-900 mb-4 text-center">Session Agenda</h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              2 hours packed with insights, frameworks, and hands-on practice
            </p>
            <div className="space-y-4">
              {agenda.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-violet-50 to-pink-50 rounded-2xl p-6 border-2 border-violet-100 hover:border-violet-300 transition-colors"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-violet-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <span className="text-white font-black text-sm">{item.time}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-black text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-black text-gray-900 mb-4 text-center">What Past Attendees Say</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100"
                >
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic leading-relaxed">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-black text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center bg-gradient-to-br from-violet-50 via-pink-50 to-orange-50 rounded-3xl p-12 border-2 border-violet-100">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Ready to Transform Your Thinking?</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Join 247 aspiring analysts on October 4th and learn the critical thinking skills
              that will accelerate your career.
            </p>
            <button
              onClick={() => setShowBookingForm(true)}
              className="group inline-flex items-center space-x-3 px-12 py-6 bg-gradient-to-r from-violet-600 via-pink-600 to-orange-500 text-white text-xl font-black rounded-full hover:scale-105 transition-all shadow-2xl shadow-violet-500/40"
            >
              <span>Book Your Spot Now</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
            <p className="text-sm text-gray-600 mt-6">
              100% Free · No Credit Card Required · Limited Seats
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
