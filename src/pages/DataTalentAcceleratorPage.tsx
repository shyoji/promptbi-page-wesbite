import { useState, useEffect } from 'react';
import { ArrowRight, Zap, Globe, Briefcase, Users, TrendingUp, Award, Clock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function DataTalentAcceleratorPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 10,
    hours: 12,
    minutes: 30,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    "name": "Vanguard Fellowship Data Analytics Accelerator",
    "provider": {
      "@type": "Organization",
      "name": "PromptBI"
    },
    "description": "Intensive 3-month data analytics training program for aspiring data professionals",
    "timeToComplete": "P3M",
    "occupationalCredentialAwarded": "Data Analytics Certificate",
    "offers": {
      "@type": "Offer",
      "category": "Fellowship Program"
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0D0D0F' }}>
      <SEO
        title="Vanguard Fellowship - Elite Data Analytics Training Program | PromptBI"
        description="Join 100 elite fellows worldwide in an intensive data analytics accelerator. Master SQL, BI tools, strategic thinking, and land high-paying data analyst roles globally."
        keywords="data analytics bootcamp, data analyst training program, SQL training, business intelligence course, data career accelerator, analytics fellowship, data professional development, career transition data analytics"
        ogTitle="Vanguard Fellowship - Become an Elite Data Professional"
        ogDescription="Limited to 100 fellows worldwide. Intensive training in data analytics, BI, and strategic thinking."
        ogImage="https://promptbi.ai/og-image-fellowship.png"
        canonical="https://promptbi.ai/data-talent-accelerator"
        structuredData={structuredData}
      />
      <Navigation />

      <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 overflow-hidden" style={{ backgroundColor: '#0D0D0F' }}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center py-32">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-white/90">Limited to 100 Fellows worldwide</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Become the data professional
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              every company wants.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            The PromptBI Vanguard Fellowship is a selective 3-month accelerator for data talent ready to build, deploy, and monetize AI-driven insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center gap-2">
              <span>Apply for Cohort 1</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 border border-white/10">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Not a course. A launchpad.
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              The Vanguard Fellowship turns raw data talent into market-ready analysts through real business challenges, mentorship from global engineers, and guaranteed job placements.
            </p>
            <p className="text-lg text-white/60 mt-4 max-w-2xl mx-auto">
              Fellows master real-world data skills, build projects with PromptBI, and join a network that defines the future of data in business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">3-Month Accelerator</h3>
              <p className="text-white/70 leading-relaxed">Learn by building real projects.</p>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Global Mentors</h3>
              <p className="text-white/70 leading-relaxed">Engineers from Meta, Safaricom & Twiga Foods.</p>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-pink-500/30 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Briefcase className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Guaranteed Placement</h3>
              <p className="text-white/70 leading-relaxed">We don't just train you, we hire you.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
            How It Works
          </h2>

          <div className="space-y-8">
            <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-2xl font-bold text-white">
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Apply & Qualify</h3>
                  <p className="text-white/70 text-lg leading-relaxed">
                    Submit your application, complete the 2-day Data Sprint, and join the top 100.
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/5 border border-white/10 hover:border-purple-500/30 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl font-bold text-white">
                    2
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Build Real Projects</h3>
                  <p className="text-white/70 text-lg leading-relaxed">
                    Solve real data problems for partner companies — inside PromptBI.
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-pink-500/10 to-red-500/5 border border-white/10 hover:border-pink-500/30 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center text-2xl font-bold text-white">
                    3
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Get Placed & Grow</h3>
                  <p className="text-white/70 text-lg leading-relaxed">
                    Land your first role or paid project. Join the PromptBI Guild for life.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="group px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 border border-white/10 inline-flex items-center gap-2">
              <span>See if you qualify</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
            The Fellowship Experience
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-6 text-white/60 font-semibold">Month</th>
                  <th className="text-left py-4 px-6 text-white/60 font-semibold">Focus</th>
                  <th className="text-left py-4 px-6 text-white/60 font-semibold">Outcome</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-6 px-6 text-white font-bold">1</td>
                  <td className="py-6 px-6 text-white/90">Core Foundations & Data Thinking</td>
                  <td className="py-6 px-6 text-white/70">Real business data challenge</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-6 px-6 text-white font-bold">2</td>
                  <td className="py-6 px-6 text-white/90">AI & Analytics Execution</td>
                  <td className="py-6 px-6 text-white/70">Dashboard projects with PromptBI</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-6 px-6 text-white font-bold">3</td>
                  <td className="py-6 px-6 text-white/90">Productizing Data</td>
                  <td className="py-6 px-6 text-white/70">Showcase project, prepare for Demo Day</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-6 px-6 text-white font-bold">4</td>
                  <td className="py-6 px-6 text-white/90">Placement Month</td>
                  <td className="py-6 px-6 text-white/70">Employment guaranteed + LTV tracking</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-16">
            <p className="text-center text-white/60 mb-8">Get Mentored by Data Engineers from</p>
            <div className="flex flex-wrap items-center justify-center gap-12 opacity-70 hover:opacity-100 transition-opacity">
              <div className="text-white/80 text-2xl font-bold">Meta</div>
              <div className="text-white/80 text-2xl font-bold">Disney</div>
              <div className="text-white/80 text-2xl font-bold">Tesla</div>
              <div className="text-white/80 text-2xl font-bold">Github</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Investment & Pricing
            </h2>
            <p className="text-xl text-white/70 mb-2">
              Make it feel premium and intentional — an investment, not tuition.
            </p>
          </div>

          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-sm mb-8">
            <div className="text-center mb-8">
              <p className="text-lg text-white/60 mb-2">Investment in your career:</p>
              <p className="text-6xl font-bold text-white mb-4">$600</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-2xl">💳</div>
                  <p className="text-xl font-semibold text-white">Pay in full</p>
                </div>
                <p className="text-white/70">$600 upfront</p>
              </div>

              <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-2xl">💼</div>
                  <p className="text-xl font-semibold text-white">Monthly plans</p>
                </div>
                <p className="text-white/70">$80 / $65 / $40 (for first 3 months)</p>
                <p className="text-white/50 text-sm mt-2">Remaining amount after job placement</p>
              </div>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
              <p className="text-white/90 text-lg font-medium italic">
                "We only succeed when you do. Your success is our KPI."
              </p>
            </div>
          </div>

          <div className="text-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl inline-flex items-center gap-2">
              <span>Start Application</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our data tells the story.
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Every Fellow is a datapoint in our mission to redefine how Africa builds data careers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/5 border border-white/10 text-center">
              <Clock className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <p className="text-4xl font-bold text-white mb-2">45 Days</p>
              <p className="text-white/60">Average time to placement</p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/5 border border-white/10 text-center">
              <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <p className="text-4xl font-bold text-white mb-2">94%</p>
              <p className="text-white/60">Employment conversion rate</p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-pink-500/10 to-red-500/5 border border-white/10 text-center">
              <Briefcase className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <p className="text-4xl font-bold text-white mb-2">$30K</p>
              <p className="text-white/60">Average starting salary</p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-red-500/10 to-orange-500/5 border border-white/10 text-center">
              <Award className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <p className="text-4xl font-bold text-white mb-2">12+</p>
              <p className="text-white/60">Top universities represented</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 relative">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Hire from PromptBI Vanguard.
          </h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            Get pre-vetted data talent who've solved your kind of problems.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-12 mb-12 opacity-60">
            <div className="text-white text-xl font-semibold">Meta</div>
            <div className="text-white text-xl font-semibold">Disney</div>
            <div className="text-white text-xl font-semibold">Github</div>
            <div className="text-white text-xl font-semibold">Tesla</div>
          </div>

          <button className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 border border-white/10">
            Become a hiring partner
          </button>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 relative">
        <div className="max-w-4xl mx-auto">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-white/20 backdrop-blur-sm text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 mb-8">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-white">Limited Spots Available</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Only 100 Seats.
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Cohort 1 Applications Close Soon.
            </h3>

            <p className="text-xl text-white/80 mb-12 italic">
              "We don't accept everyone — we accept the exceptional."
            </p>

            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-12">
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <p className="text-3xl font-bold text-white">{timeLeft.days}</p>
                <p className="text-sm text-white/60">Days</p>
              </div>
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <p className="text-3xl font-bold text-white">{timeLeft.hours}</p>
                <p className="text-sm text-white/60">Hours</p>
              </div>
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <p className="text-3xl font-bold text-white">{timeLeft.minutes}</p>
                <p className="text-sm text-white/60">Minutes</p>
              </div>
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <p className="text-3xl font-bold text-white">{timeLeft.seconds}</p>
                <p className="text-sm text-white/60">Seconds</p>
              </div>
            </div>

            <button className="group px-10 py-5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-lg font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-2xl inline-flex items-center gap-3">
              <span>Apply Now</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
