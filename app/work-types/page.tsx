import React from 'react';
import { BookOpen, Crystal, Paintbrush } from '@/components/PixelIcons';
import type { Metadata } from 'next';
import { WORK_TYPES_PREVIEW } from '@/content/site-data';
import { SectionHeading } from '@/components/SectionHeading';
import { OrnateFrame } from '@/components/OrnateFrame';
import { WorkTypePreview } from '@/components/WorkTypePreview';
import portfolioArt from '@/content/portfolio-art.json';
import { RPGCommandButton } from '@/components/RPGCommandButton';

export const metadata: Metadata = {
  title: 'Select Your Type of Work · Amanda Durango',
  description:
    'Specializations of Amanda Durango: The Art, The Story, and The Concept.',
};

const emblems = { art: <Paintbrush size={21} />, story: <BookOpen size={21} />, concept: <Crystal size={21} /> };

const previewSelection = {
  art: ['character-design/14', 'character-design/4', 'character-design/20'],
  story: ['comics/17', 'comics/18', 'comics/19', 'comics/20'],
  concept: ['concept-art/3', 'concept-art/5', 'concept-art/6'],
};

const artworkBySrc = new Map(
  portfolioArt.flatMap(group => group.artworks.map(artwork => [artwork.src, artwork] as const))
);

export default function WorkTypesPage() {
  return (
    <div className="flex flex-col gap-6">
      <SectionHeading ornate title="Select Your Type of Work" />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {WORK_TYPES_PREVIEW.map((specialty) => (
          <OrnateFrame
            key={specialty.id}
            as="article"
            variant="panel"
            innerClassName="flex h-full flex-col justify-between gap-5 p-5"
          >
            <div className="flex flex-col gap-4">
              {/* Title Plaque */}
              <div className="border-b border-[#88d8ce]/20 pb-3 text-center">
                <span className="specialty-emblem" aria-hidden="true">{emblems[specialty.id]}</span>
                <h2 className="font-display text-xl font-semibold tracking-[0.14em] text-[#ffffff] uppercase">
                  {specialty.title}
                </h2>
                <p className="mt-1 text-xs tracking-[0.12em] text-[#88d8ce] uppercase">
                  {specialty.subtitle}
                </p>
              </div>

              <WorkTypePreview
                images={previewSelection[specialty.id].flatMap((id) => {
                  const artwork = artworkBySrc.get(`/portfolio-art/${id}.webp`);
                  return artwork ? [{ src: artwork.src, title: artwork.title }] : [];
                })}
              />

              {/* Description */}
              <p className="font-editorial text-center text-base leading-relaxed text-[#dce7e6]">
                {specialty.description}
              </p>

              {/* Attributes */}
              <div className="flex flex-col gap-2 border-t border-[#88d8ce]/20 pt-3">
                <p className="text-center font-display text-[11px] tracking-[0.2em] text-[#88d8ce] uppercase">
                  ✦ Attributes ✦
                </p>
                {specialty.attributes.map((attr) => (
                  <div
                    key={attr.name}
                    className="flex items-center justify-between gap-3 text-xs text-[#dce7e6]"
                  >
                    <span className="uppercase tracking-wider">{attr.name}</span>
                    <div aria-hidden="true" className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((segment) => (
                        <span
                          key={segment}
                          className={
                            segment <= attr.level
                              ? 'h-2 w-4 border border-[#99cccc]/70 bg-[#99cccc]/75'
                              : 'h-2 w-4 border border-[#88d8ce]/25 bg-[#1c2022]'
                          }
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <RPGCommandButton
              label={specialty.ctaLabel}
              href={specialty.href}
              variant="secondary"
              className="rpg-plaque w-full"
            />
          </OrnateFrame>
        ))}
      </div>
    </div>
  );
}
