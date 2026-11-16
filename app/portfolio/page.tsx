import React from 'react';
import type { Metadata } from 'next';
import portfolioArt from '@/content/portfolio-art.json';
import { SectionHeading } from '@/components/SectionHeading';
import { PortfolioGallery } from '@/components/PortfolioGallery';

export const metadata: Metadata = {
  title: 'The Art Portfolio · Amanda Durango',
  description:
    'The Art Portfolio of Amanda Durango — Concept Art, Comics, Illustration, and Design.',
};

export default async function ArtPortfolioPage({
  searchParams,
}: {
  searchParams: Promise<{ specialty?: string | string[] }>;
}) {
  const { specialty } = await searchParams;
  const initialCategory =
    specialty === 'art' ? 'character-design' :
    specialty === 'story' ? 'comics' :
    specialty === 'concept' ? 'concept-art' : 'all';

  return (
    <div className="flex flex-col gap-8">
      <SectionHeading ornate title="The Art Portfolio" />
      <PortfolioGallery key={initialCategory} categories={portfolioArt} initialCategory={initialCategory} />
    </div>
  );
}
