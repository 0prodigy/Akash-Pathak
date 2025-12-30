export function Skills() {
  const skillGroups = [
    {
      category: 'Systems & Infrastructure',
      skills: ['Kubernetes', 'Distributed Systems', 'Firecracker microVMs', 'AWS/GCP/Azure', 'Terraform', 'Docker'],
    },
    {
      category: 'Networking',
      skills: ['TCP/IP', 'gRPC', 'Load Balancing', 'Service Mesh', 'Custom Protocols', 'VPN/Tunneling'],
    },
    {
      category: 'Languages & Runtimes',
      skills: ['Go', 'Python', 'Rust', 'TypeScript', 'PySpark', 'Ray'],
    },
    {
      category: 'Observability',
      skills: ['OpenTelemetry', 'Prometheus', 'Distributed Tracing', 'Profiling', 'pprof', 'Custom Instrumentation'],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6
      dark:bg-[#1a1a1a]
      light:bg-[#f0f0f0]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4
          dark:text-[#f5f1ed] light:text-[#1a1a1a]">
          Technical Expertise
        </h2>
        <p className="text-lg mb-12
          dark:text-[#a8a8a8] light:text-[#6b7280]">
          Core competencies across infrastructure, networking, and platform engineering.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-lg
                dark:bg-[#0f0f0f] dark:border dark:border-[#252525]
                light:bg-white light:border light:border-[#e0dcd5]">
              <h3 className="text-lg font-semibold mb-4
                dark:text-[#c89968] light:text-[#a0714f]">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm
                      dark:bg-[#1a1a1a] dark:text-[#a8a8a8] dark:border dark:border-[#252525]
                      light:bg-[#faf8f5] light:text-[#6b7280] light:border light:border-[#e0dcd5]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
