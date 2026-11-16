'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { OrnateFrame } from './OrnateFrame';

const portraits = [1, 2, 3, 4, 5, 6];

export interface CharacterPortraitProps {
  name: string;
  subtitle: string;
}

export function CharacterPortrait({
  name,
  subtitle,
}: CharacterPortraitProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setActive(current => (current + 1) % portraits.length);
    }, 2000);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <div className="flex flex-col items-center gap-3">
      {/* Portrait Slot */}
      <OrnateFrame variant="portrait" showCenterCrest className="w-full max-w-[155px]" innerClassName="p-1 sm:p-1">
        <div className="relative aspect-[4/5] overflow-hidden bg-black ring-1 ring-[var(--accent-pink)]/45" role="img" aria-label={`Portrait of ${name}`}>
          {portraits.map((number, index) => (
            <Image
              key={number}
              src={`/assets/hall-portraits/${number}.webp`}
              alt=""
              fill
              loading="eager"
              unoptimized
              className={`object-cover object-[50%_35%] transition-opacity duration-300 motion-reduce:transition-none ${index === active ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
        </div>
      </OrnateFrame>
      <button
        type="button"
        onClick={() => setPaused(current => !current)}
        className="min-h-11 rounded-[var(--radius-control)] bg-[#34383a] px-3 text-sm text-white"
      >
        {paused ? 'Resume portraits' : 'Pause portraits'}
      </button>

      {/* Character Name Plaque with Corner Brackets & Fine Line */}
      <div className="relative w-full border border-[#88d8ce]/22 bg-[#1c2022]/85 px-3 py-2.5 text-center">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-px -left-px h-2 w-2 border-t border-l border-[#88d8ce]"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-px -right-px h-2 w-2 border-t border-r border-[#88d8ce]"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-px -left-px h-2 w-2 border-b border-l border-[#88d8ce]"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-px -right-px h-2 w-2 border-r border-b border-[#88d8ce]"
        />

        <h2 className="font-display text-base font-semibold tracking-[0.12em] text-[#ffffff] uppercase sm:text-lg">
          {name}
        </h2>
        <p className="mt-0.5 text-xs text-[#dce7e6]">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
