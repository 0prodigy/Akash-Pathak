export function Footer() {
  return (
    <footer className="border-t
      dark:bg-[#0f0f0f] dark:border-[#252525]
      light:bg-[#faf8f5] light:border-[#e0dcd5]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm
            dark:text-[#747474] light:text-[#9ca3af]">
            Built with Next.js & Tailwind. Infrastructure engineer exploring AI systems.
          </p>
          
          <div className="flex gap-6 text-sm">
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
    </footer>
  );
}
