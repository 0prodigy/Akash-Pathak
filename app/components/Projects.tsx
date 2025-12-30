import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'OpenE2B',
      subtitle: 'Open Source AI Sandbox Platform',
      description: 'Building an open-source alternative to E2B\'s cloud sandbox platform for AI agents. Provides secure, isolated execution environments with sub-second startup times.',
      highlights: [
        'Dual runtime support: Firecracker microVMs and Docker',
        'Custom orchestrator managing sandbox lifecycle',
        'SDK-compatible API targeting E2B interoperability',
      ],
      tech: ['Go', 'Firecracker', 'Docker', 'gRPC'],
      github: 'https://github.com/0prodigy/OpenE2B',
    },
    {
      title: 'ML Workflow Kubernetes Operator',
      subtitle: 'AI/ML Lifecycle Orchestration',
      description: 'Built a Kubernetes operator for orchestrating AI/ML model lifecycles — from training to deployment to scaling.',
      highlights: [
        'Custom CRDs for ML workflows (training jobs, model serving)',
        'GPU-aware scheduling with node affinity',
        'S3-backed model caching reducing cold start times by 60%',
      ],
      tech: ['Go', 'Kubebuilder', 'Kubernetes', 'gRPC'],
    },
    {
      title: 'Secure VM Connectivity System',
      subtitle: 'Private Network Access',
      description: 'Designed and built a custom protocol system for establishing secure connections to virtual machines inside private VPNs.',
      highlights: [
        'Custom RSock protocol for tunneling through restricted networks',
        'Go binary + client SDK for cross-platform connectivity',
        'SSH and TCP protocol support with automatic failover',
      ],
      tech: ['Go', 'gRPC', 'SSH', 'Custom Protocols'],
    },
    {
      title: 'TCP Load Balancer for ML Platform',
      subtitle: 'Multi-Tenant Network Edge',
      description: 'Built an L4 load balancer for routing traffic to VMs and pods running inside a private VPN, with authentication and authorization at the network edge.',
      highlights: [
        'Lua-based request processing for high-performance auth',
        'Dynamic backend discovery from Kubernetes service registry',
        'Connection pooling and health checking',
        'Multi-tenant isolation with network policies',
      ],
      tech: ['Lua', 'Go', 'TCP', 'Kubernetes'],
    },
  ];

  return (
    <section id="projects" className="py-24 px-6
      dark:bg-[#0f0f0f]
      light:bg-[#faf8f5]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-4
          dark:text-[#f5f1ed] light:text-[#1a1a1a]">
          Featured Projects
        </h2>
        <p className="text-lg mb-12
          dark:text-[#a8a8a8] light:text-[#6b7280]">
          A selection of infrastructure systems and platforms I've built.
        </p>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="p-8 rounded-lg border transition-all hover:shadow-lg
                dark:bg-[#1a1a1a] dark:border-[#252525] dark:hover:border-[#c89968]/50
                light:bg-white light:border-[#e0dcd5] light:hover:border-[#a0714f]/50">
              <div className="mb-4">
                <h3 className="text-2xl font-bold mb-1
                  dark:text-[#f5f1ed] light:text-[#1a1a1a]">
                  {project.title}
                </h3>
                <p className="text-sm
                  dark:text-[#c89968] light:text-[#a0714f]">
                  {project.subtitle}
                </p>
              </div>

              <p className="text-base leading-relaxed mb-6
                dark:text-[#a8a8a8] light:text-[#6b7280]">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold uppercase tracking-widest mb-3
                  dark:text-[#a8a8a8] light:text-[#6b7280]">
                  Highlights
                </h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="text-sm pl-4 border-l-2
                        dark:border-[#c89968] dark:text-[#a8a8a8]
                        light:border-[#a0714f] light:text-[#6b7280]">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded
                      dark:bg-[#252525] dark:text-[#c89968]
                      light:bg-[#f0f0f0] light:text-[#a0714f]">
                    {tech}
                  </span>
                ))}
              </div>

              {project.github && (
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium transition-colors
                      dark:text-[#c89968] dark:hover:text-[#d4a876]
                      light:text-[#a0714f] light:hover:text-[#8b5e42]">
                    <Github size={16} />
                    View on GitHub
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
