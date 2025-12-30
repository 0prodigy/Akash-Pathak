'use client';

import { ThemeToggle } from './ThemeToggle';
import { useState } from 'react';

export function Navigation() {
  const [showWorkModal, setShowWorkModal] = useState(false);
  const [showProjectsModal, setShowProjectsModal] = useState(false);

  return (
    <>
      <nav className="fixed top-0 right-0 z-50 px-6 py-6 md:px-10 md:py-8">
        <div className="flex items-center gap-6">
          {/* Links */}
          <div className="flex items-center gap-5 text-sm">
            <button
              onClick={() => setShowWorkModal(true)}
              className="transition-colors duration-200
                dark:text-[#a8a8a8] dark:hover:text-[#c89968]
                light:text-[#6b7280] light:hover:text-[#a0714f]">
              Work
            </button>
            <button
              onClick={() => setShowProjectsModal(true)}
              className="transition-colors duration-200
                dark:text-[#a8a8a8] dark:hover:text-[#c89968]
                light:text-[#6b7280] light:hover:text-[#a0714f]">
              Projects
            </button>
            <a
              href="https://github.com/0prodigy"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200
                dark:text-[#a8a8a8] dark:hover:text-[#c89968]
                light:text-[#6b7280] light:hover:text-[#a0714f]">
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/akash-pathak-0796a7165"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200
                dark:text-[#a8a8a8] dark:hover:text-[#c89968]
                light:text-[#6b7280] light:hover:text-[#a0714f]">
              LinkedIn
            </a>
            <a
              href="mailto:pathakvikash9211@gmail.com"
              className="transition-colors duration-200
                dark:text-[#a8a8a8] dark:hover:text-[#c89968]
                light:text-[#6b7280] light:hover:text-[#a0714f]">
              Email
            </a>
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </nav>

      {/* Work Experience Modal */}
      {showWorkModal && (
        <WorkModal onClose={() => setShowWorkModal(false)} />
      )}

      {/* Projects Modal */}
      {showProjectsModal && (
        <ProjectsModal onClose={() => setShowProjectsModal(false)} />
      )}
    </>
  );
}

function WorkModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-6 py-12
      dark:bg-black/60 light:bg-black/40"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-lg
        dark:bg-[#1a1a1a] light:bg-white
        dark:border dark:border-[#252525] light:border light:border-[#e0dcd5]
        p-8 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl
            dark:text-[#a8a8a8] light:text-[#6b7280]
            hover:dark:text-[#f5f1ed] hover:light:text-[#1a1a1a]"
        >
          ×
        </button>

        <h2
          className="text-3xl font-bold mb-8
          dark:text-[#f5f1ed] light:text-[#1a1a1a]"
        >
          Experience
        </h2>

        {/* Lyric */}
        <div
          className="mb-12 pb-8 border-b
          dark:border-[#252525] light:border-[#e0dcd5]"
        >
          <div className="mb-4">
            <h3
              className="text-xl font-semibold
              dark:text-[#f5f1ed] light:text-[#1a1a1a]"
            >
              Lyric
            </h3>
            <p
              className="text-sm
              dark:text-[#c89968] light:text-[#a0714f]"
            >
              Software Engineer — June 2024 – Present
            </p>
          </div>
          <p
            className="mb-4
            dark:text-[#a8a8a8] light:text-[#6b7280]"
          >
            Built distributed compute infrastructure from scratch using Ray and
            Spark for supply chain ML workloads. Also developed initial web
            dashboard UI and component libraries for the platform.
          </p>
          <ul
            className="space-y-2 text-sm mb-4
            dark:text-[#a8a8a8] light:text-[#6b7280]"
          >
            <li className="flex gap-3">
              <span className="dark:text-[#c89968] light:text-[#a0714f]">
                →
              </span>
              <span>
                Reduced 8-hour compute jobs to 30 minutes through Ray
                orchestration
              </span>
            </li>
            <li className="flex gap-3">
              <span className="dark:text-[#c89968] light:text-[#a0714f]">
                →
              </span>
              <span>
                Built observability and monitoring for distributed systems
              </span>
            </li>
            <li className="flex gap-3">
              <span className="dark:text-[#c89968] light:text-[#a0714f]">
                →
              </span>
              <span>
                Created reusable component library and design system for
                internal dashboards
              </span>
            </li>
            <li className="flex gap-3">
              <span className="dark:text-[#c89968] light:text-[#a0714f]">
                →
              </span>
              <span>
                Optimized infrastructure costs across the entire stack
              </span>
            </li>
          </ul>

          <div>
            <h4
              className="font-semibold mb-2 text-sm
              dark:text-[#f5f1ed] light:text-[#1a1a1a]"
            >
              Tech Stack
            </h4>
            <p
              className="text-sm
              dark:text-[#a8a8a8] light:text-[#6b7280]"
            >
              Python, Kubernetes, Ray, Spark, React, TypeScript, OpenTelemetry,
              AWS
            </p>
          </div>
        </div>

        {/* Tune.ai */}
        <div className="pb-8">
          <div className="mb-4">
            <h3
              className="text-xl font-semibold
              dark:text-[#f5f1ed] light:text-[#1a1a1a]"
            >
              Tune.ai (formerly NimbleBox.ai)
            </h3>
            <p
              className="text-sm
              dark:text-[#c89968] light:text-[#a0714f]"
            >
              Founding Engineer — March 2021 – June 2024
            </p>
          </div>

          <div className="mb-6">
            <h4
              className="font-semibold mb-3 text-sm
              dark:text-[#f5f1ed] light:text-[#1a1a1a]"
            >
              As Team Lead
            </h4>
            <ul
              className="space-y-2 text-sm
              dark:text-[#a8a8a8] light:text-[#6b7280]"
            >
              <li className="flex gap-3">
                <span className="dark:text-[#c89968] light:text-[#a0714f]">
                  →
                </span>
                <span>Led 8-person team across core platform projects</span>
              </li>
              <li className="flex gap-3">
                <span className="dark:text-[#c89968] light:text-[#a0714f]">
                  →
                </span>
                <span>
                  Standardized observability with OpenTelemetry across all
                  services
                </span>
              </li>
              <li className="flex gap-3">
                <span className="dark:text-[#c89968] light:text-[#a0714f]">
                  →
                </span>
                <span>
                  Reduced development time by 40% through component reuse
                </span>
              </li>
              
            </ul>
          </div>

          <div
            className="mb-6 p-4 rounded-lg
            dark:bg-[#0f0f0f] light:bg-[#f9fafb]
            dark:border dark:border-[#252525] light:border light:border-[#e0dcd5]"
          >
            <h4
              className="font-semibold mb-3 text-sm
              dark:text-[#f5f1ed] light:text-[#1a1a1a]"
            >
              Key Projects & Impact
            </h4>
            <ul
              className="space-y-2 text-sm
              dark:text-[#a8a8a8] light:text-[#6b7280]"
            >
              <li>
                <strong>GPU Billing:</strong> Built system handling $1M+ monthly
                operations with 99.9% accuracy
              </li>
              <li>
                <strong>Model Serving:</strong> Designed dynamic proxy
                architecture cutting latency by 40%
              </li>
              <li>
                <strong>Data Processing Pipeline:</strong> Architected data processing pipeline running inference on 100K+
                documents/day for extraction tasks with 96% accuracy, becoming the
                biggest revenue driver for Tune AI.
              </li>
              <li>
                <strong>Kubernetes Operators:</strong> Orchestration layer for
                ML workflows with GPU-aware scheduling
              </li>
              <li>
                <strong>Model Caching:</strong> S3-backed system reducing cold
                starts by 60%
              </li>
              <li>
                <strong>Product Scale:</strong> Shipped infrastructure powering
                500K+ users on Tune Chat
              </li>
              <li>
                <strong>Llama Deployment:</strong> Among first to deploy Meta
                Llama 2 (24 hours after release) and Llama 3 (1 hour).
                Recognized by Meta as India partner.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h4
              className="font-semibold mb-3 text-sm
              dark:text-[#f5f1ed] light:text-[#1a1a1a]"
            >
              Tech Stack
            </h4>
            <p
              className="text-sm
              dark:text-[#a8a8a8] light:text-[#6b7280]"
            >
              Go, Python, TypeScript, Kubernetes, Docker, gRPC, Terraform,
              PostgreSQL, Redis, OpenTelemetry, Prometheus, React, Next.js,
              TailwindCSS, AWS, GCP
            </p>
          </div>

          <div
            className="text-sm
            dark:text-[#747474] light:text-[#9ca3af]"
          >
            <p>
              Saw Tune through the full startup journey—from PMF discovery to
              scaling with major enterprise customers. Backed by Accel,
              Techstars, and recognized by Meta as an India partner.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectsModal({ onClose }: { onClose: () => void }) {
  const projects = [
    {
      title: 'OpenE2B',
      subtitle: 'Open Source AI Sandbox',
      description: 'Building an open-source alternative to E2B. Provides secure, isolated execution environments for AI agents with sub-second startup times.',
      highlights: [
        'Dual runtime: Firecracker microVMs for production, Docker for development',
        'Custom orchestrator managing lifecycle, networking, and resource limits',
        'SDK-compatible API targeting interoperability'
      ],
      tech: ['Go', 'Firecracker', 'Docker', 'gRPC'],
      github: 'https://github.com/0prodigy/OpenE2B',
    },
    {
      title: 'Secure VM Connectivity System',
      subtitle: 'VPN Tunneling Protocol',
      description: 'Custom protocol system for establishing secure connections to virtual machines inside private VPNs.',
      highlights: [
        'Custom RSock protocol for tunneling through restricted networks',
        'Go binary + client SDK for cross-platform connectivity',
        'SSH and TCP protocol support with automatic failover'
      ],
      tech: ['Go', 'gRPC', 'SSH'],
      github: null,
    },
    {
      title: 'ML Workflow Kubernetes Operator',
      subtitle: 'Model Lifecycle Orchestration',
      description: 'Kubernetes operator for AI/ML model lifecycles—training, deployment, and scaling.',
      highlights: [
        'Custom CRDs for ML workflows with GPU-aware scheduling',
        'Model versioning and automated rollback',
        'S3-backed caching reducing cold starts by 60%'
      ],
      tech: ['Go', 'Kubernetes', 'Kubebuilder'],
      github: null,
    },
    {
      title: 'TCP Load Balancer',
      subtitle: 'Multi-Tenant Network Edge',
      description: 'L4 load balancer for routing traffic inside private VPNs with authentication at the network edge.',
      highlights: [
        'Lua-based request processing for high-performance auth',
        'Dynamic backend discovery from Kubernetes',
        'Connection pooling and health checking',
        'Multi-tenant isolation with network policies'
      ],
      tech: ['Lua', 'Go', 'Kubernetes'],
      github: null,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-6 py-12
      dark:bg-black/60 light:bg-black/40"
      onClick={onClose}>
      <div className="w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-lg
        dark:bg-[#1a1a1a] light:bg-white
        dark:border dark:border-[#252525] light:border light:border-[#e0dcd5]
        p-8 md:p-10"
        onClick={(e) => e.stopPropagation()}>
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl
            dark:text-[#a8a8a8] light:text-[#6b7280]
            hover:dark:text-[#f5f1ed] hover:light:text-[#1a1a1a]">
          ×
        </button>

        <h2 className="text-3xl font-bold mb-8
          dark:text-[#f5f1ed] light:text-[#1a1a1a]">
          Projects
        </h2>

        <div className="space-y-8">
          {projects.map((project) => (
            <div key={project.title} className="pb-8 border-b
              dark:border-[#252525] light:border-[#e0dcd5]
              last:border-b-0 last:pb-0">
              <div className="mb-3">
                <h3 className="text-lg font-semibold
                  dark:text-[#f5f1ed] light:text-[#1a1a1a]">
                  {project.title}
                </h3>
                <p className="text-sm
                  dark:text-[#c89968] light:text-[#a0714f]">
                  {project.subtitle}
                </p>
              </div>

              <p className="text-sm mb-4 leading-relaxed
                dark:text-[#a8a8a8] light:text-[#6b7280]">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider mb-2
                  dark:text-[#a8a8a8] light:text-[#6b7280]">
                  Highlights
                </h4>
                <ul className="space-y-1">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="text-xs pl-3 border-l-2
                      dark:border-[#c89968] dark:text-[#a8a8a8]
                      light:border-[#a0714f] light:text-[#6b7280]">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-xs px-2 py-1 rounded
                    dark:bg-[#252525] dark:text-[#c89968]
                    light:bg-[#f0f0f0] light:text-[#a0714f]">
                    {tech}
                  </span>
                ))}
              </div>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium transition-colors
                    dark:text-[#c89968] dark:hover:text-[#d4a876]
                    light:text-[#a0714f] light:hover:text-[#8b5e42]">
                  View on GitHub →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
