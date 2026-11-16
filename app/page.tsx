import React from 'react';
import { INTRO_CONTENT } from '@/content/site-data';
import { OrnateFrame } from '@/components/OrnateFrame';
import { RPGCommandButton } from '@/components/RPGCommandButton';

export default function IntroHybridPage() {
  return (
    <div className="flex flex-col gap-6">
      <OrnateFrame
        as="section"
        ariaLabel="Intro Hybrid landing showcase"
        variant="hero"
        className="intro-frame"
        showCenterCrest
        innerClassName="flex flex-col gap-4 p-5 sm:p-7"
      >
        {/* Editorial & RPG Title Block */}
        <div className="flex flex-col items-center gap-3 text-center">
          <h1 className="font-display text-2xl font-semibold tracking-[0.12em] text-[#ffffff] sm:text-4xl lg:text-5xl [text-wrap:balance]">
            {INTRO_CONTENT.headline}
          </h1>

          <div className="flex w-full max-w-xl items-center justify-center gap-3">
            <span
              aria-hidden="true"
              className="hidden h-px flex-1 bg-[#88d8ce]/25 sm:block"
            />
            <p className="font-display text-xs tracking-[0.28em] text-[#88d8ce] uppercase sm:text-sm">
              {INTRO_CONTENT.subheadline}
            </p>
            <span
              aria-hidden="true"
              className="hidden h-px flex-1 bg-[#88d8ce]/25 sm:block"
            />
          </div>

          <p className="font-editorial max-w-2xl text-lg text-[#ffffff] sm:text-2xl [text-wrap:balance]">
            {INTRO_CONTENT.tagline}
          </p>
        </div>

        {/* Ornamental Center Divider */}
        <div
          aria-hidden="true"
          className="flex items-center justify-center gap-4 py-1"
        >
          <div className="h-px flex-1 max-w-[240px] bg-gradient-to-r from-transparent via-[#88d8ce]/35 to-[#88d8ce]/70" />
          <span className="text-xs text-[#99cccc]/85">◆</span>
          <div className="h-px flex-1 max-w-[240px] bg-gradient-to-l from-transparent via-[#88d8ce]/35 to-[#88d8ce]/70" />
        </div>

        <iframe
          className="mx-auto block aspect-video w-full max-w-3xl rounded-[var(--radius-panel)] border border-[#88d8ce]/35 bg-black"
          src="https://www.youtube.com/embed/y7Kfm1XeMsY?si=ZAd5e7BV3JkMZsxG"
          title="Manda Durango · Illustration Portfolio"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />

        {/* Primary Dual Navigation Actions: START PLAYING (/hall) & QUICK BROWSE (/portfolio) */}
        <div
          role="group"
          aria-label="Primary portfolio entry paths"
          className="mt-2 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center sm:gap-6"
        >
          {INTRO_CONTENT.primaryActions.map((action) => (
            <RPGCommandButton
              key={action.id}
              label={action.label}
              href={action.href}
              variant={action.variant}
              ariaLabel={`${action.label} — ${action.sublabel}`}
              className="rpg-plaque w-full sm:w-auto sm:min-w-[240px]"
            />
          ))}
        </div>
      </OrnateFrame>
    </div>
  );
}
