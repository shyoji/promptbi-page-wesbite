import { Briefcase, DollarSign, Clock, Building } from 'lucide-react';

export default function CareerOutcomes() {
  const stats = [
    {
      icon: Briefcase,
      value: '5x',
      label: 'Higher Employment Rate',
      description: 'PromptBI graduates get hired faster',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: DollarSign,
      value: '$65K',
      label: 'Average Starting Salary',
      description: 'Entry-level data analyst positions',
      color: 'from-cyan-500 to-teal-500'
    },
    {
      icon: Clock,
      value: '45',
      label: 'Days Average Job Hunt',
      description: 'From graduation to offer letter',
      color: 'from-teal-500 to-green-500'
    },
    {
      icon: Building,
      value: '200+',
      label: 'Partner Companies',
      description: 'Actively hiring our graduates',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const caseStudies = [
    {
      name: 'Maria Rodriguez',
      before: 'Retail Manager',
      after: 'Junior Data Analyst',
      company: 'Tech Unicorn',
      salary: '$70K',
      time: '90 days'
    },
    {
      name: 'David Park',
      before: 'Recent CS Grad',
      after: 'Data Analyst',
      company: 'Fortune 500',
      salary: '$68K',
      time: '30 days'
    },
    {
      name: 'Aisha Patel',
      before: 'Finance Intern',
      after: 'Business Analyst',
      company: 'Consulting Firm',
      salary: '$72K',
      time: '45 days'
    }
  ];

  return (
    <section id="careers" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Real <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Results</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            PromptBI skills = better job chances. Here's the proof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-transparent hover:shadow-2xl transition-all"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-4xl font-black text-gray-900 mb-2">{stat.value}</div>
              <div className="text-lg font-bold text-gray-900 mb-2">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity`} />
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((story, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 hover:shadow-xl transition-shadow"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-4">{story.name}</h4>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Before:</span>
                    <span className="font-semibold text-gray-900">{story.before}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">After:</span>
                    <span className="font-semibold text-blue-600">{story.after}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Company:</span>
                    <span className="font-semibold text-gray-900">{story.company}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Salary:</span>
                    <span className="font-semibold text-green-600">{story.salary}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Timeline:</span>
                    <span className="font-semibold text-gray-900">{story.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-500 to-green-500 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Hiring PromptBI Graduates?</h3>
          <p className="text-xl text-teal-50 mb-8 max-w-2xl mx-auto">
            Access our talent pool of job-ready data analysts with proven skills
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-teal-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all">
              Partner With Us
            </button>
            <button className="bg-teal-600 text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-white hover:bg-teal-700 transition-all">
              View Talent Pool
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
