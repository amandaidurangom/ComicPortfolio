import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionHeadingProps {
  title: string;
  kicker?: string;
  subtitle?: string;
  className?: string;
  ornate?: boolean;
  align?: 'center' | 'left';
}

export function SectionHeading({
  title,
  kicker,
  subtitle,
  className,
  ornate = false,
  align = 'center',
}: SectionHeadingProps) {
  const isCentered = align === 'center';

  return (
    <div
      className={cn(
        'mb-6 flex flex-col gap-2.5 sm:mb-8',
        isCentered ? 'items-center text-center' : 'items-start text-left',
        className
      )}
    >
      {kicker && (
        <p className="text-xs font-medium tracking-[0.18em] text-[#88d8ce] uppercase">
          {kicker}
        </p>
      )}

      <div className="flex w-full items-center justify-center gap-3 sm:gap-5">
        {isCentered && (
          <div
            aria-hidden="true"
            className="hidden h-px flex-1 max-w-[160px] bg-gradient-to-r from-transparent via-[#88d8ce]/40 to-[#88d8ce]/75 sm:block"
          />
        )}
        {isCentered && (
          <span aria-hidden="true" className="text-xs text-[#99cccc]/80">
            ✦
          </span>
        )}

        <div className={cn("relative min-w-0 border border-[#88d8ce]/25 bg-[#232729]/80 px-6 py-2 sm:px-9 sm:py-2.5", ornate && "section-title-ornate")}>
          {ornate && (
            <span className="frame-trim" aria-hidden="true">
              <span /><span /><span /><span />
            </span>
          )}
          {/* Corner Brackets on Heading Plaque */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-px -left-px h-2.5 w-2.5 border-t-[1.5px] border-l-[1.5px] border-[#99cccc]"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-px -right-px h-2.5 w-2.5 border-t-[1.5px] border-r-[1.5px] border-[#99cccc]"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-px -left-px h-2.5 w-2.5 border-b-[1.5px] border-l-[1.5px] border-[#99cccc]"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-px -right-px h-2.5 w-2.5 border-b-[1.5px] border-r-[1.5px] border-[#99cccc]"
          />

          <h1 className="font-display text-xl font-semibold tracking-[0.14em] text-[#ffffff] uppercase sm:text-2xl md:text-3xl [text-wrap:balance]">
            {title}
          </h1>
        </div>

        {isCentered && (
          <span aria-hidden="true" className="text-xs text-[#99cccc]/80">
            ✦
          </span>
        )}
        {isCentered && (
          <div
            aria-hidden="true"
            className="hidden h-px flex-1 max-w-[160px] bg-gradient-to-l from-transparent via-[#88d8ce]/40 to-[#88d8ce]/75 sm:block"
          />
        )}
      </div>

      {subtitle && (
        <p className="font-editorial max-w-2xl text-base text-[#dce7e6] sm:text-lg [text-wrap:balance]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
