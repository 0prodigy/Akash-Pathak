export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-32
      dark:bg-[#0f0f0f]
      light:bg-[#faf8f5]">
      <div className="max-w-2xl text-center">
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-10
          dark:text-[#f5f1ed] light:text-[#1a1a1a]
          leading-[1.1]">
          Akash Pathak
        </h1>

        <div className="space-y-6">
          <p className="text-lg md:text-xl leading-relaxed
            dark:text-[#a8a8a8] light:text-[#6b7280]
            max-w-xl mx-auto">
            I build systems that scale. Currently at Lyric setting up distributed compute infrastructure. Before that, I spent 3 years at Tune.ai—helped scale the platform to 500K+ users and architected systems handling millions in GPU billing.
          </p>

          <p className="text-sm md:text-base leading-relaxed
            dark:text-[#747474] light:text-[#9ca3af]
            max-w-lg mx-auto">
            Work spans the full stack—from Kubernetes operators and infrastructure to dashboards and UI libraries. Interested in how we orchestrate compute for AI at scale.
          </p>
        </div>
      </div>
    </section>
  );
}
