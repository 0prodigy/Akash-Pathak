import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Syne } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/app/components/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600'],
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700'],
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Akash Pathak — Infrastructure Engineer',
  description: 'Infrastructure engineer building systems for AI workloads. Kubernetes, distributed systems, observability.',
  keywords: ['infrastructure', 'kubernetes', 'distributed systems', 'backend', 'engineer', 'golang', 'python'],
  openGraph: {
    title: 'Akash Pathak — Infrastructure Engineer',
    description: 'I build the infrastructure layer for AI workloads.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${syne.variable} ${jetbrains.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
