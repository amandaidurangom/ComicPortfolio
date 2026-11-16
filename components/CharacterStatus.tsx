import React from 'react';
import { DecorativeMeter } from '@/content/types';

export interface CharacterStatusProps {
  hp: DecorativeMeter;
  mp: DecorativeMeter;
  specs: string[];
}

export function CharacterStatus({
  hp,
  mp,
  specs,
}: CharacterStatusProps) {
  return (
    <div className="flex flex-col gap-4">
      {/* HP & MP Visual Bars */}
      <div
        aria-label="Character status meters"
        className="flex flex-col gap-2.5 border-y border-[#88d8ce]/20 py-3"
      >
        {/* HP Bar */}
        <div className="flex items-center gap-2.5" aria-hidden="true">
          <span className="font-display w-7 text-xs font-semibold tracking-wider text-[#88d8ce]">
            {hp.label}
          </span>
          <div className="relative h-2.5 flex-1 overflow-hidden border border-[#88d8ce]/30 bg-[#1c2022]">
            <div
              className="h-full bg-gradient-to-r from-[#b33f43] to-[#f45b56]"
              style={{ width: `${hp.percentage}%` }}
            />
          </div>
          <span className="font-mono w-14 text-right text-xs text-[#dce7e6] tabular-nums">
            {hp.current}/{hp.max}
          </span>
        </div>

        {/* MP Bar */}
        <div className="flex items-center gap-2.5" aria-hidden="true">
          <span className="font-display w-7 text-xs font-semibold tracking-wider text-[#88d8ce]">
            {mp.label}
          </span>
          <div className="relative h-2.5 flex-1 overflow-hidden border border-[#88d8ce]/30 bg-[#1c2022]">
            <div
              className="h-full bg-gradient-to-r from-[#487c79] to-[#88d8ce]"
              style={{ width: `${mp.percentage}%` }}
            />
          </div>
          <span className="font-mono w-14 text-right text-xs text-[#dce7e6] tabular-nums">
            {mp.current}/{mp.max}
          </span>
        </div>
      </div>

      {/* Specs Section */}
      <div className="flex flex-col gap-2.5">
        <div className="relative border border-[#88d8ce]/22 bg-[#1c2022]/85 px-3 py-1.5 text-center">
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
          <h3 className="font-display text-xs font-semibold tracking-[0.18em] text-[#88d8ce] uppercase">
            Specs
          </h3>
        </div>

        <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 lg:grid-cols-1" aria-label="Specializations">
          {specs.map((spec) => (
            <li
              key={spec}
              className="flex items-center gap-2.5 border-b border-[#88d8ce]/15 px-2 py-1.5 text-xs text-[#ffffff] last:border-b-0 sm:text-sm"
            >
              <span aria-hidden="true" className="text-[10px] text-[#99cccc]/85">
                ◇
              </span>
              <span>{spec}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
