'use client';

import { useId, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GLOBAL_NAVIGATION } from '@/content/site-data';
import { cn } from '@/lib/utils';

export function GlobalNavigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const navId = useId();
  const menuButton = useRef<HTMLButtonElement>(null);

  return (
    <header
      className="site-header sticky top-0 z-40 isolate w-full bg-[#1c2022]/90"
      onKeyDown={(event) => {
        if (event.key !== 'Escape' || !menuOpen || !menuButton.current?.getClientRects().length) return;
        setMenuOpen(false);
        menuButton.current.focus();
      }}
    >
      <span className="frame-trim" aria-hidden="true">
        <span /><span /><span /><span />
      </span>
      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-4 py-2 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-8 lg:py-4">
        {/* Zone 1: Brand Identity Link to Intro (/) */}
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            aria-current={pathname === '/' ? 'page' : undefined}
            className="inline-flex min-h-[44px] items-center py-1 focus-visible:outline-[2px] focus-visible:outline-[#ff6666] focus-visible:outline-offset-[3px]"
          >
            <Image
              src="/assets/manda-logo.webp"
              alt="Manda Durango"
              width={384}
              height={126}
              unoptimized
              className="h-auto w-28 sm:w-36"
            />
          </Link>
          <button
            ref={menuButton}
            type="button"
            aria-expanded={menuOpen}
            aria-controls={navId}
            onClick={() => setMenuOpen(open => !open)}
            className="font-action inline-flex min-h-11 items-center gap-2 rounded-[var(--radius-control)] border border-[#88d8ce]/40 px-3 text-sm text-white hover:border-[var(--accent-pink)] lg:hidden"
          >
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" shapeRendering="crispEdges">
              <path d={menuOpen ? 'M2 2h2v2h2v2h4V4h2V2h2v2h-2v2h-2v4h2v2h2v2h-2v-2h-2v-2H6v2H4v2H2v-2h2v-2h2V6H4V4H2z' : 'M2 3h12v2H2zm0 4h12v2H2zm0 4h12v2H2z'} />
            </svg>
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>

        {/* Zone 2: Global Navigation Links */}
        <nav
          id={navId}
          aria-label="Global navigation"
          className={cn(
            'gap-1.5 lg:flex lg:flex-wrap lg:items-center lg:justify-end lg:gap-2',
            menuOpen ? 'grid max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-[#88d8ce]/20 pt-2 lg:max-h-none lg:overflow-visible lg:border-0 lg:pt-0' : 'hidden'
          )}
        >
          {GLOBAL_NAVIGATION.map((item) => {
            const isActive =
              item.href === '/'
                ? pathname === '/'
                : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'nav-plaque font-display relative inline-flex min-h-[44px] items-center justify-start rounded-[var(--radius-control)] px-3 py-1.5 text-sm font-medium tracking-[0.09em] uppercase transition-colors duration-150 whitespace-nowrap lg:justify-center lg:rounded-none lg:px-3.5 lg:text-[13px]',
                  isActive
                    ? 'border border-[#88d8ce]/30 bg-[#2b3032] text-[#ff6666]'
                    : 'border border-transparent text-[#dce7e6] hover:border-[#88d8ce]/25 hover:bg-[#232729] hover:text-[#ffffff]'
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
