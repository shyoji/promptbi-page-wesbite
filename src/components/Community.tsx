import { Users, Star, Award, Quote } from 'lucide-react';

export default function Community() {
  const testimonials = [
    {
      name: 'Jackline M.',
      role: 'Data Analyst at Tech Startup',
      content: 'I finally understood Python in 2 weeks thanks to PromptBI. The community challenges kept me motivated!'
    },
    {
      name: 'Marcus T.',
      role: 'Career Switcher',
      content: 'From marketing to data science in 60 days. PromptBI made the impossible possible.'
    },
    {
      name: 'Priya S.',
      role: 'Recent Graduate',
      content: 'Got 3 interviews in my first month. The dashboard projects in my portfolio were game-changers.'
    }
  ];

  const leaderboard = [
    { rank: 1, name: 'Alex Chen', points: 12450 },
    { rank: 2, name: 'Sarah Kim', points: 11890 },
    { rank: 3, name: 'Jordan Lee', points: 10340 }
  ];

  return (
    <section id="community" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Users className="w-4 h-4" />
            <span>10,000+ Active Learners</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Join the <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Movement</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn together, grow together, win together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <Award className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">Top Performers</h3>
            </div>
            <div className="space-y-4">
              {leaderboard.map((entry) => (
                <div
                  key={entry.rank}
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center space-x-4">
                    <div>
                      <div className="font-bold text-gray-900">{entry.name}</div>
                      <div className="text-sm text-gray-600">Rank #{entry.rank}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">{entry.points.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">points</div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-bold hover:shadow-lg transition-all">
              View Full Leaderboard
            </button>
          </div>

          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <Quote className="w-8 h-8 text-blue-600 mb-4" />
                <p className="text-gray-700 mb-4 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                  <div className="ml-auto flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Become a PromptBI Ambassador</h3>
          <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
            Share your journey, inspire others, and unlock exclusive perks
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
}
