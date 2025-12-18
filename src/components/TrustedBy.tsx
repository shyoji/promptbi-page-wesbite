export default function TrustedBy() {
  const companies = [
    { name: 'Shortlist', url: 'https://www.shortlist.net/' },
    { name: 'Delta 40', url: 'https://www.delta40.com/' },
    { name: 'Samaking', url: 'https://samaking.africa/' },
    { name: 'Farm2Feed', url: 'https://www.farmtofeedkenya.com/' },
    { name: 'Strathmore', url: 'https://strathmore.edu/' }
  ];

  return (
    <section className="bg-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Trusted by</p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 items-center">
            {companies.map((company, index) => (
              <a
                key={index}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center p-6 rounded-xl transition-all duration-300 hover:bg-gray-50"
              >
                <div className="text-center">
                  <span className="text-base md:text-lg font-bold text-gray-400 group-hover:text-gray-900 transition-colors duration-200">
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
