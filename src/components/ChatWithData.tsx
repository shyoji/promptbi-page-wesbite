export default function ChatWithData() {
  return (
    <section className="relative py-40 md:py-48 px-6 lg:px-8 overflow-hidden bg-[#0A0A0A]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent_70%)]" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-10">
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-sm font-semibold text-white/90 tracking-wide uppercase">Conversational Analytics</span>
          </div>

          <h2 className="text-6xl sm:text-7xl md:text-8xl font-bold mb-10 leading-[1] tracking-tight">
            <span className="block text-white">Talk to your data.</span>
            <span className="block text-white/50 mt-4">Get instant answers.</span>
          </h2>

          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            No SQL. No technical barriers. Just natural conversations that unlock insights from your data in seconds.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/20 bg-white/[0.03] backdrop-blur-xl shadow-2xl">
              <div className="w-full aspect-video bg-black flex items-center justify-center">
                <iframe
                  className="w-full h-full"
                  src="https://www.tella.tv/video/ngugis-video-6lwh/embed"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  title="PromptBI Demo Video"
                  style={{ border: 'none' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
