import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ReactNode } from 'react';
import { BASE_URL, cn } from '@/lib/utils';

import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Providers } from './providers';
import { Header } from '@/components/header';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: `Upenha's Portfolio`,
  description: 'A cool portfolio made with Nextjs, Tailwind and Shadcn UI',
  keywords: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'Server Components',
    'developer',
    'shadcn',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    title: `Upenha's Portfolio`,
    description: 'A cool portfolio made with Nextjs, Tailwind and Shadcn UI',
    siteName: `@upenha on github`,
  },
  authors: [
    {
      name: 'upenha',
      url: BASE_URL,
    },
  ],
  creator: 'upenha',
  twitter: {
    card: 'summary_large_image',
    title: "Upenha's Portfolio",
    description: 'A cool portfolio made with Nextjs, Tailwind and Shadcn UI',
    creator: '@upewantstokys',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(GeistSans.variable, GeistMono.variable, 'font-sans')}>
        <Providers>
          <main className="flex min-h-screen flex-col items-center justify-center font-sans">
            <div className="flex min-h-screen flex-col py-8 min-w-full sm:min-w-[640px] gap-1.5">
              <Header />
              <div className="flex-1">
                <div className="container flex flex-col sm:gap-1.5 gap-4">
                  {children}
                </div>
              </div>
            </div>
          </main>
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
