export function About() {
  return (
    <section id="about" className="py-24 px-6
      dark:bg-[#0f0f0f]
      light:bg-[#faf8f5]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12
          dark:text-[#f5f1ed] light:text-[#1a1a1a]">
          About
        </h2>

        <div className="space-y-6 text-lg leading-relaxed
          dark:text-[#a8a8a8] light:text-[#6b7280]">
          <p>
            I'm an infrastructure engineer who enjoys working at the intersection of distributed systems and AI. My work focuses on building the foundational systems that make AI workloads possible — orchestrating compute across clusters, designing custom networking protocols, and making complex systems observable and debuggable.
          </p>

          <p>
            Currently, I'm deep in the world of Kubernetes operators, Spark orchestration, and distributed data infrastructure. I've built custom protocols for secure VM connectivity, TCP load balancers for multi-tenant environments, and controllers that manage AI/ML model lifecycles at scale.
          </p>

          <p>
            I'm particularly interested in the emerging "AI infrastructure" space — companies like E2B, Modal, and Fly.io that are rethinking how we provision and orchestrate compute for AI agents. I'm building OpenE2B, an open-source sandbox platform, to explore these ideas hands-on.
          </p>

          <p>
            When I'm not debugging distributed systems, you'll find me training martial arts — the discipline translates surprisingly well to debugging race conditions at 2 AM.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t
          dark:border-[#252525] light:border-[#e0dcd5]">
          <h3 className="text-sm font-semibold uppercase tracking-widest mb-6
            dark:text-[#c89968] light:text-[#a0714f]">
            Quick Links
          </h3>
          <div className="flex gap-6 flex-wrap">
            <a href="https://github.com/0prodigy" target="_blank" rel="noopener noreferrer"
              className="transition-colors
                dark:text-[#a8a8a8] dark:hover:text-[#c89968]
                light:text-[#6b7280] light:hover:text-[#a0714f]">
              GitHub
            </a>
            <a href="https://linkedin.com/in/akash-pathak-0796a7165" target="_blank" rel="noopener noreferrer"
              className="transition-colors
                dark:text-[#a8a8a8] dark:hover:text-[#c89968]
                light:text-[#6b7280] light:hover:text-[#a0714f]">
              LinkedIn
            </a>
            <a href="mailto:pathakvikash9211@gmail.com"
              className="transition-colors
                dark:text-[#a8a8a8] dark:hover:text-[#c89968]
                light:text-[#6b7280] light:hover:text-[#a0714f]">
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
