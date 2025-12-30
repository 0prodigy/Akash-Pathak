'use client';

import { Mail, Linkedin, Github } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formState, setFormState] = useState({ email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    console.log('Form submitted:', formState);
    setSubmitted(true);
    setTimeout(() => {
      setFormState({ email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 px-6
      dark:bg-[#1a1a1a]
      light:bg-[#f0f0f0]">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-4
          dark:text-[#f5f1ed] light:text-[#1a1a1a]">
          Get in Touch
        </h2>
        <p className="text-lg mb-12
          dark:text-[#a8a8a8] light:text-[#6b7280]">
          Interested in discussing infrastructure, distributed systems, or AI platform engineering? Let's connect.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest mb-4
                dark:text-[#c89968] light:text-[#a0714f]">
                Contact Methods
              </h3>
              <div className="space-y-3">
                <a
                  href="mailto:pathakvikash9211@gmail.com"
                  className="inline-flex items-center gap-3 transition-colors
                    dark:text-[#a8a8a8] dark:hover:text-[#c89968]
                    light:text-[#6b7280] light:hover:text-[#a0714f]">
                  <Mail size={20} />
                  pathakvikash9211@gmail.com
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest mb-4
                dark:text-[#c89968] light:text-[#a0714f]">
                Social
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/0prodigy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors
                    dark:text-[#a8a8a8] dark:hover:text-[#c89968]
                    light:text-[#6b7280] light:hover:text-[#a0714f]">
                  <Github size={20} />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/akash-pathak-0796a7165"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors
                    dark:text-[#a8a8a8] dark:hover:text-[#c89968]
                    light:text-[#6b7280] light:hover:text-[#a0714f]">
                  <Linkedin size={20} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Your email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg border text-base outline-none transition-colors
                  dark:bg-[#0f0f0f] dark:border-[#252525] dark:text-[#f5f1ed] dark:placeholder-[#6b7280]
                  dark:focus:border-[#c89968]
                  light:bg-white light:border-[#e0dcd5] light:text-[#1a1a1a] light:placeholder-[#a8a8a8]
                  light:focus:border-[#a0714f]"
              />
            </div>
            <div>
              <textarea
                placeholder="Your message"
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg border text-base outline-none transition-colors resize-none
                  dark:bg-[#0f0f0f] dark:border-[#252525] dark:text-[#f5f1ed] dark:placeholder-[#6b7280]
                  dark:focus:border-[#c89968]
                  light:bg-white light:border-[#e0dcd5] light:text-[#1a1a1a] light:placeholder-[#a8a8a8]
                  light:focus:border-[#a0714f]"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg font-medium transition-colors
                dark:bg-[#c89968] dark:text-[#0f0f0f] dark:hover:bg-[#d4a876]
                light:bg-[#a0714f] light:text-white light:hover:bg-[#8b5e42]">
              {submitted ? 'Message sent! ✓' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
