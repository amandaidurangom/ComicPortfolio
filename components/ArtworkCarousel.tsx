'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from '@/components/PixelIcons';
import { HallSlide } from '@/content/types';
import Image from 'next/image';
import { OrnateFrame } from './OrnateFrame';
import { HallArtworkFrame } from './HallArtworkFrame';
import { cn } from '@/lib/utils';

export interface ArtworkCarouselProps {
  slides: HallSlide[];
}

export function ArtworkCarousel({ slides }: ArtworkCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = slides.length;

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      handlePrevious();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      handleNext();
    }
  };

  const activeSlide = slides[currentIndex] ?? slides[0];

  return (
    <OrnateFrame
      as="section"
      ariaLabel="Featured artwork showcase carousel"
      variant="subtle"
      className="flex flex-col"
      innerClassName="flex flex-col gap-4 p-4 sm:p-6"
    >
      {/* Top Carousel Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#88d8ce]/20 pb-2.5">
        <div className="flex items-center gap-2 text-xs text-[#dce7e6]">
          <span className="font-display font-semibold tracking-[0.12em] text-[#88d8ce] uppercase">
            {activeSlide.title}
          </span>
          <span aria-hidden="true">·</span>
          <span>{activeSlide.categoryTag}</span>
        </div>
        <span
          aria-live="polite"
          className="font-mono text-xs tracking-wider text-[#cfdcdd] tabular-nums"
        >
          {currentIndex + 1} / {totalSlides}
        </span>
      </div>

      {/* Artwork Stage */}
      <div
        tabIndex={0}
        onKeyDown={handleKeyDown}
        aria-roledescription="carousel"
        aria-label={`Featured artwork slide ${currentIndex + 1} of ${totalSlides}. Use Left and Right arrow keys to change slide.`}
        className="hall-artwork-stage relative focus-visible:outline-[2px] focus-visible:outline-[#ff6666] focus-visible:outline-offset-[4px]"
      >
        <div aria-live="polite" aria-atomic="true" className="relative aspect-[16/9] bg-[#232729]">
          <Image
            src={activeSlide.image.src}
            alt={activeSlide.image.alt}
            fill
            priority={currentIndex === 0}
            unoptimized
            className="object-contain"
          />
        </div>
        <HallArtworkFrame />
      </div>

      {/* Manual Controls Bar with Corner Brackets & Fine Lines */}
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-1 border-t border-[#88d8ce]/20 pt-3">
        <button
          type="button"
          onClick={handlePrevious}
          aria-label={`Previous slide (currently showing slide ${currentIndex + 1} of ${totalSlides})`}
          className="group relative font-action inline-flex min-h-[44px] items-center justify-center gap-2 border border-[#88d8ce]/25 bg-[#2b3032] px-1.5 py-2 text-[10px] sm:px-4 sm:text-xs tracking-[0.12em] text-[#ffffff] uppercase transition-colors duration-150 hover:border-[#99cccc]/55 hover:bg-[#34383a] cursor-pointer"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-px -left-px h-2 w-2 border-t border-l border-[#88d8ce] group-hover:border-[#ff6666]"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-px -left-px h-2 w-2 border-b border-l border-[#88d8ce] group-hover:border-[#ff6666]"
          />
          <ChevronLeft aria-hidden="true" className="h-4 w-4 text-[#99cccc]" />
          <span>Previous</span>
        </button>

        {/* Position Indicator Diamonds */}
        <div
          role="group"
          aria-label="Select slide position"
          className="flex items-center gap-1"
        >
          {slides.map((slide, index) => {
            const isSelected = index === currentIndex;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1} of ${totalSlides}: ${slide.title}`}
                aria-current={isSelected ? 'true' : undefined}
                className={cn(
                  'flex h-8 w-8 items-center justify-center text-sm transition-colors duration-150 cursor-pointer',
                  isSelected
                    ? 'text-[#ff6666]'
                    : 'text-[#88d8ce]/70 hover:text-[#ffffff]'
                )}
              >
                <span aria-hidden="true">{isSelected ? '◆' : '◇'}</span>
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={handleNext}
          aria-label={`Next slide (currently showing slide ${currentIndex + 1} of ${totalSlides})`}
          className="group relative font-action inline-flex min-h-[44px] items-center justify-center gap-2 border border-[#88d8ce]/25 bg-[#2b3032] px-1.5 py-2 text-[10px] sm:px-4 sm:text-xs tracking-[0.12em] text-[#ffffff] uppercase transition-colors duration-150 hover:border-[#99cccc]/55 hover:bg-[#34383a] cursor-pointer"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-px -right-px h-2 w-2 border-t border-r border-[#88d8ce] group-hover:border-[#ff6666]"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-px -right-px h-2 w-2 border-r border-b border-[#88d8ce] group-hover:border-[#ff6666]"
          />
          <span>Next</span>
          <ChevronRight aria-hidden="true" className="h-4 w-4 text-[#99cccc]" />
        </button>
      </div>
    </OrnateFrame>
  );
}
