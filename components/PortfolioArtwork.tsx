'use client';

import { useId, useRef, useState } from 'react';
import type { PointerEvent } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Maximize2, X } from '@/components/PixelIcons';

type PortfolioArtworkProps = {
  description: string;
  artworks: { src: string; fullSrc?: string; title: string; width: number; height: number }[];
};

export function PortfolioArtwork({ description, artworks }: PortfolioArtworkProps) {
  const [index, setIndex] = useState(0);
  const [previous, setPrevious] = useState<PortfolioArtworkProps['artworks'][number] | null>(null);
  const image = artworks[index];
  const { title } = image;
  const dialog = useRef<HTMLDialogElement>(null);
  const pendingIndex = useRef(0);
  const request = useRef(0);
  const [zoomed, setZoomed] = useState(false);

  function moveZoom(event: PointerEvent<HTMLButtonElement>) {
    const { currentTarget, clientX, clientY, pointerType } = event;
    if (pointerType === 'touch') return;
    const bounds = currentTarget.getBoundingClientRect();
    currentTarget.style.setProperty('--zoom-x', `${100 * (clientX - bounds.left) / bounds.width}%`);
    currentTarget.style.setProperty('--zoom-y', `${100 * (clientY - bounds.top) / bounds.height}%`);
  }

  async function moveArtwork(offset: number) {
    const nextIndex = (pendingIndex.current + offset + artworks.length) % artworks.length;
    pendingIndex.current = nextIndex;
    const ticket = ++request.current;
    const next = artworks[nextIndex];
    const preload = new window.Image();
    preload.src = next.fullSrc ?? next.src;
    try {
      await preload.decode();
    } catch {
      if (ticket === request.current) pendingIndex.current = index;
      return;
    }
    if (ticket !== request.current || !dialog.current?.open || nextIndex === index) return;
    setPrevious(image);
    setIndex(nextIndex);
    setZoomed(false);
  }

  const headingId = useId();
  const descriptionId = useId();

  return (
    <>
      {artworks.map((thumbnail, thumbnailIndex) => (
        <div key={thumbnail.src} className="relative">
          <Image
            src={thumbnail.src}
            alt={thumbnail.title}
            width={thumbnail.width}
            height={thumbnail.height}
            unoptimized
            className="aspect-[4/3] w-full rounded-[var(--radius-panel)] border border-[#88d8ce]/20 bg-[#232729] object-contain"
          />
          <button
            type="button"
            aria-haspopup="dialog"
            aria-label={`Expand ${thumbnail.title}`}
            className="group absolute inset-0 rounded-[var(--radius-panel)] focus-visible:outline-2"
            onClick={() => {
              request.current++;
              pendingIndex.current = thumbnailIndex;
              setIndex(thumbnailIndex);
              setPrevious(null);
              setZoomed(false);
              dialog.current?.showModal();
            }}
          >
            <span className="absolute right-1.5 bottom-1.5 rounded bg-[#1c2022]/90 p-1.5 text-[#ffffff] group-hover:bg-[#495154]">
              <Maximize2 aria-hidden="true" size={14} />
            </span>
          </button>
        </div>
      ))}
      <dialog
        ref={dialog}
        aria-labelledby={headingId}
        aria-describedby={descriptionId}
        className="portfolio-dialog"
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <div className="space-y-4 p-4 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <h2 id={headingId} aria-live="polite" className="font-display text-lg text-[#ffffff] sm:text-2xl">{title}</h2>
            <form method="dialog">
              <button type="submit" aria-label="Close artwork" className="grid h-11 w-11 place-items-center rounded bg-[#34383a] text-[#ffffff]">
                <X aria-hidden="true" size={20} />
              </button>
            </form>
          </div>
          <div className="relative grid h-[min(64dvh,95vw)] place-items-center">
            {previous && (
              <Image
                key={previous.src}
                src={previous.fullSrc ?? previous.src}
                alt=""
                width={previous.width}
                height={previous.height}
                unoptimized
                className="portfolio-artwork-out pointer-events-none absolute inset-0 h-full w-full object-contain"
              />
            )}
            <button
              key={image.src}
              type="button"
              className={`portfolio-zoom relative mx-auto block max-w-full overflow-hidden rounded-[var(--radius-panel)] ${previous ? 'portfolio-artwork-in' : ''}`}
              aria-label={`Zoom artwork — ${title}`}
              aria-pressed={zoomed}
              onPointerMove={moveZoom}
              onPointerLeave={(event) => {
                event.currentTarget.style.removeProperty('--zoom-x');
                event.currentTarget.style.removeProperty('--zoom-y');
              }}
              onClick={() => setZoomed(current => !current)}
            >
              <Image
                src={image.fullSrc ?? image.src}
                alt={title}
                width={image.width}
                height={image.height}
                unoptimized
                className="block h-auto max-h-[min(64dvh,95vw)] w-auto max-w-full"
              />
            </button>
          </div>
          <p id={descriptionId} className="text-sm leading-relaxed text-[#dce7e6]">{description}</p>
          <div className="flex flex-wrap justify-between gap-2">
            <button
              type="button"
              onClick={() => moveArtwork(-1)}
              className="inline-flex min-h-11 items-center gap-1 rounded bg-[#34383a] px-3 text-sm text-[#ffffff]"
            >
              <ChevronLeft aria-hidden="true" size={16} /> Previous artwork
            </button>
            <button
              type="button"
              onClick={() => moveArtwork(1)}
              className="inline-flex min-h-11 items-center gap-1 rounded bg-[#34383a] px-3 text-sm text-[#ffffff]"
            >
              Next artwork <ChevronRight aria-hidden="true" size={16} />
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
