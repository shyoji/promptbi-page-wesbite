import { Play, Star, Briefcase, TrendingUp } from 'lucide-react';
import { useState } from 'react';

export default function VideoTestimonials() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Data Analyst at Google',
      before: 'Marketing Manager',
      timeline: '90 days',
      thumbnail: 'gradient-from-blue-500-to-cyan-500',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      quote: 'PromptBI changed everything. From zero coding to Google in 3 months.',
      metrics: { salary: '$120K', applications: '15', interviews: '8', offers: '3' }
    },
    {
      id: 2,
      name: 'Marcus Johnson',
      role: 'Business Analyst at Amazon',
      before: 'Restaurant Manager',
      timeline: '60 days',
      thumbnail: 'gradient-from-purple-500-to-pink-500',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      quote: 'I was skeptical, but the community and AI help made learning actually fun.',
      metrics: { salary: '$95K', applications: '12', interviews: '6', offers: '2' }
    },
    {
      id: 3,
      name: 'Priya Patel',
      role: 'Junior Data Scientist at Startup',
      before: 'Recent Graduate',
      timeline: '45 days',
      thumbnail: 'gradient-from-teal-500-to-green-500',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      quote: 'Better than my CS degree. Practical skills that actually got me hired.',
      metrics: { salary: '$85K', applications: '20', interviews: '10', offers: '4' }
    }
  ];

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
            Success stories
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Watch how beta testers transformed their careers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all"
            >
              <div className="relative aspect-video bg-gray-100 overflow-hidden">
                {activeVideo === testimonial.id ? (
                  <iframe
                    className="w-full h-full"
                    src={`${testimonial.videoUrl}?autoplay=1`}
                    title={`${testimonial.name} testimonial`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div
                    className="absolute inset-0 cursor-pointer bg-gradient-to-br from-gray-200 to-gray-300"
                    onClick={() => setActiveVideo(testimonial.id)}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-gray-900 ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-900 font-semibold text-sm border border-gray-200">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="text-gray-900">
                        <div className="font-semibold text-sm">{testimonial.name}</div>
                        <div className="text-xs text-gray-600">{testimonial.timeline}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Before</span>
                    <span className="text-gray-900 font-medium">{testimonial.before}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">After</span>
                    <span className="text-gray-900 font-medium">{testimonial.role}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Salary</span>
                    <span className="text-gray-900 font-semibold">{testimonial.metrics.salary}</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                  <div className="bg-gray-50 rounded-lg py-3">
                    <div className="text-lg font-bold text-gray-900">{testimonial.metrics.applications}</div>
                    <div className="text-xs text-gray-600">Applied</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg py-3">
                    <div className="text-lg font-bold text-gray-900">{testimonial.metrics.interviews}</div>
                    <div className="text-xs text-gray-600">Interviews</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg py-3">
                    <div className="text-lg font-bold text-gray-900">{testimonial.metrics.offers}</div>
                    <div className="text-xs text-gray-600">Offers</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Join 650 beta testers already transforming their careers
          </p>
        </div>
      </div>
    </section>
  );
}
