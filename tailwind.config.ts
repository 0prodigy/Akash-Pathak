import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-inter)',
        mono: 'var(--font-mono)',
      },
      colors: {
        dark: {
          bg: '#0f0f0f',
          card: '#1a1a1a',
          text: '#f5f1ed',
          muted: '#a8a8a8',
          accent: '#c89968',
        },
        light: {
          bg: '#faf8f5',
          card: '#ffffff',
          text: '#1a1a1a',
          muted: '#6b7280',
          accent: '#a0714f',
        },
      },
    },
  },
  plugins: [],
}
export default config
