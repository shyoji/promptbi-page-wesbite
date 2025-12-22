export default function TrustedBy() {
  const companies = [
    { name: 'Shortlist', url: 'https://www.shortlist.net/' },
    { name: 'Delta 40', url: 'https://www.delta40.com/' },
    { name: 'Samaking', url: 'https://samaking.africa/' },
    { name: 'Farm2Feed', url: 'https://www.farmtofeedkenya.com/' },
    { name: 'Strathmore', url: 'https://strathmore.edu/' }
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50/50 to-white px-6 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <p className="text-xs font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent uppercase tracking-widest">Trusted by</p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
            {companies.map((company, index) => (
              <a
                key={index}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center p-6 rounded-2xl transition-all duration-300 hover:bg-white/80 hover:backdrop-blur-sm hover:shadow-xl hover:shadow-blue-500/5 hover:border hover:border-blue-200/50"
              >
                <div className="text-center">
                  <span className="text-base md:text-lg font-bold text-gray-400 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-violet-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {company.name}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
