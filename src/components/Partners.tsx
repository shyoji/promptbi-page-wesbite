import { ExternalLink } from 'lucide-react';

export default function Partners() {
  const partners = [
    {
      name: 'Power Learn Project Africa',
      logo: '/download.jpeg',
      url: 'https://www.powerlearnprojectafrica.org/',
      description: 'Empowering 1 million developers across Africa through accessible, high-quality training programs. Together, we\'re transforming untapped potential into thriving digital careers.',
      gradient: 'from-blue-50 via-white to-blue-50/50',
      borderHover: 'hover:border-blue-500/30',
      shadowHover: 'hover:shadow-blue-500/10',
      bgHover: 'from-blue-500/5',
      textHover: 'group-hover:text-blue-600',
      linkColor: 'text-blue-600'
    },
    {
      name: 'Moringa School',
      logo: '/moringa.jpeg',
      url: 'https://moringaschool.com/',
      description: 'Nurturing Africa\'s tech talent through TVETA-accredited bootcamps in software engineering, data science, and cybersecurity. Building the next generation of tech leaders.',
      gradient: 'from-orange-50 via-white to-orange-50/50',
      borderHover: 'hover:border-orange-500/30',
      shadowHover: 'hover:shadow-orange-500/10',
      bgHover: 'from-orange-500/5',
      textHover: 'group-hover:text-orange-600',
      linkColor: 'text-orange-600'
    }
  ];

  return (
    <section className="py-32 px-6 lg:px-12 bg-white border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[11px] font-semibold text-black/40 tracking-widest uppercase mb-4">Partners</p>
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold text-black mb-6 tracking-[-0.04em] leading-[0.95] text-balance max-w-3xl mx-auto">
            Building together with the best
          </h2>
          <p className="text-lg text-black/50 max-w-2xl mx-auto tracking-[-0.015em] font-light leading-relaxed">
            We partner with leading organizations to provide world-class education and opportunities
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className={`relative h-full p-8 rounded-3xl bg-gradient-to-br ${partner.gradient} border border-black/[0.06] ${partner.borderHover} hover:shadow-2xl ${partner.shadowHover} transition-all duration-500`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${partner.bgHover} to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative flex flex-col items-center text-center h-full">
                  <div className="flex-shrink-0 mb-6">
                    <div className="w-40 h-40 rounded-2xl bg-white border border-black/5 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300 overflow-hidden p-4">
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className={`text-xl font-semibold text-black mb-3 tracking-tight ${partner.textHover} transition-colors`}>
                        {partner.name}
                      </h3>
                      <p className="text-black/60 leading-relaxed text-[14px] font-light mb-4">
                        {partner.description}
                      </p>
                    </div>
                    <div className={`inline-flex items-center gap-2 ${partner.linkColor} font-medium text-sm group-hover:gap-3 transition-all justify-center`}>
                      <span>Visit website</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-black/40 font-light">
            Interested in partnering with us?{' '}
            <a href="mailto:partnerships@promptbi.com" className="text-black/70 hover:text-black font-medium underline underline-offset-2 transition-colors">
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
