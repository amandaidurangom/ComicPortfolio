'use client';

import { useId, useState } from 'react';
import { PortfolioArtwork } from './PortfolioArtwork';

type PortfolioGalleryProps = {
  categories: {
    id: string;
    label: string;
    artworks: { src: string; fullSrc?: string; title: string; width: number; height: number }[];
  }[];
  initialCategory: string;
};

export function PortfolioGallery({ categories, initialCategory }: PortfolioGalleryProps) {
  const [selected, setSelected] = useState(initialCategory);
  const galleryId = useId();
  const visible = categories.filter(category => selected === 'all' || category.id === selected);
  const total = visible.reduce((count, category) => count + category.artworks.length, 0);
  const filters = [{ id: 'all', label: 'All work' }, ...categories];

  return (
    <>
      <section aria-labelledby="disciplines-heading" className="space-y-3 rounded-[var(--radius-panel)] border border-[#88d8ce]/25 bg-[#232729]/90 p-4 sm:p-5">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h2 id="disciplines-heading" className="font-display text-lg tracking-wide text-[#88d8ce]">
            Disciplines &amp; Categories
          </h2>
          <p role="status" className="text-sm text-[#dce7e6]">
            {total} {total === 1 ? 'artwork' : 'artworks'}
          </p>
        </div>
        <div role="group" aria-label="Filter artwork by category" className="flex flex-wrap gap-2">
          {filters.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              aria-pressed={selected === id}
              aria-controls={galleryId}
              onClick={() => setSelected(id)}
              className="min-h-11 rounded-[var(--radius-control)] border border-[#88d8ce]/40 px-3 py-2 text-sm font-semibold text-white transition-colors hover:border-[var(--accent-pink)] aria-pressed:border-[#88d8ce] aria-pressed:bg-[#88d8ce] aria-pressed:text-[#1c2022]"
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      <div id={galleryId}>
        <div key={selected} className="portfolio-gallery-reveal flex flex-col gap-8">
          {visible.map(({ id, label, artworks }) => (
            <section key={id} id={id} aria-labelledby={`${id}-heading`}>
              <h2 id={`${id}-heading`} className="mb-4 border-b border-[#88d8ce]/20 pb-2 font-display text-lg text-[#88d8ce]">
                {label}
              </h2>
              {artworks.length > 0 && (
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                  <PortfolioArtwork artworks={artworks} description={label} />
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
