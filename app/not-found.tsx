import React from 'react';
import { OrnateFrame } from '@/components/OrnateFrame';
import { RPGCommandButton } from '@/components/RPGCommandButton';

export default function NotFoundPage() {
  return (
    <div className="mx-auto max-w-2xl py-8">
      <OrnateFrame
        as="section"
        variant="hero"
        showCenterCrest
        innerClassName="flex flex-col items-center gap-5 p-6 text-center sm:p-10"
      >
        <p className="font-display text-xs tracking-[0.22em] text-[#88d8ce] uppercase">
          404 · Uncharted Route
        </p>
        <h1 className="font-display text-2xl font-semibold tracking-[0.12em] text-[#ffffff] uppercase sm:text-3xl">
          Path Not Found
        </h1>
        <p className="font-editorial max-w-md text-base text-[#dce7e6] sm:text-lg">
          The requested path does not correspond to an active section of Amanda Durango’s Hybrid Fantasy RPG Portfolio.
        </p>
        <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
          <RPGCommandButton
            label="RETURN TO PLAYING HALL"
            href="/hall"
            variant="primary"
          />
          <RPGCommandButton
            label="OPEN INTRO HYBRID"
            href="/"
            variant="secondary"
          />
        </div>
      </OrnateFrame>
    </div>
  );
}
