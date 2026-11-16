import type { Metadata } from 'next';
import { Barlow_Condensed, Nunito, Pixelify_Sans } from 'next/font/google';
import Link from 'next/link';
import { GlobalNavigation } from '@/components/GlobalNavigation';
import { GLOBAL_NAVIGATION } from '@/content/site-data';
import './globals.css';

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-display',
  display: 'swap',
});

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-body',
  display: 'swap',
});

const pixelify = Pixelify_Sans({
  subsets: ['latin'],
  weight: '500',
  variable: '--font-action',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Amanda Durango — Hybrid Fantasy RPG Portfolio',
  description:
    'Interactive professional portfolio for Amanda Durango combining classic JRPG navigation, dark fantasy ornamental framing, and contemporary editorial presentation for Concept Art, Comics, Illustration, and Design.',
  openGraph: {
    title: 'Amanda Durango — Hybrid Fantasy RPG Portfolio',
    description:
      'Interactive professional portfolio for Amanda Durango combining classic JRPG navigation, dark fantasy ornamental framing, and contemporary editorial presentation for Concept Art, Comics, Illustration, and Design.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amanda Durango — Hybrid Fantasy RPG Portfolio',
    description:
      'Interactive professional portfolio for Amanda Durango combining classic JRPG navigation, dark fantasy ornamental framing, and contemporary editorial presentation for Concept Art, Comics, Illustration, and Design.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${nunito.variable} ${pixelify.variable}`}
    >
      <body
        suppressHydrationWarning
        className="plain-preview flex min-h-screen flex-col bg-[#1c2022] text-[#ffffff]"
      >
        {/* Accessible Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:border focus:border-[#ff6666] focus:bg-[#232729] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#ff6666]"
        >
          Skip to main content
        </a>

        <GlobalNavigation />

        <main
          id="main-content"
          className="mx-auto w-full max-w-[1440px] flex-1 px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10"
        >
          {children}
        </main>

        <footer className="mt-auto border-t border-[#88d8ce]/20 bg-[#1c2022]/90 py-6">
          <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-4 px-4 text-xs text-[#acbcbe] sm:flex-row sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-2 text-center sm:text-left">
              <span className="font-display font-semibold tracking-wider text-[#dce7e6] uppercase">
                Amanda Durango
              </span>
              <span aria-hidden="true">·</span>
              <span>Concept Art, Comics, Illustration and Design</span>
            </div>

            <nav
              aria-label="Footer navigation"
              className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
            >
              {GLOBAL_NAVIGATION.map((item) => (
                <Link
                  key={`footer-${item.id}`}
                  href={item.href}
                  className="text-[#dce7e6] underline-offset-4 transition-colors hover:text-[#ff6666] hover:underline"
                >
                  {item.shortLabel ?? item.label}
                </Link>
              ))}
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
