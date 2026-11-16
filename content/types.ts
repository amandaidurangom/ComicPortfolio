export type AspectRatioPreset = 'hero' | 'landscape' | 'portrait' | 'card' | 'thumbnail';

export interface PlaceholderAsset {
  id: string;
  label: string;
  sublabel?: string;
  dimensionsText: string;
  aspectRatioClass: string;
  aspectRatioPreset: AspectRatioPreset;
}

export interface DecorativeMeter {
  label: 'HP' | 'MP';
  current: number;
  max: number;
  percentage: number;
}

export interface ArtistProfile {
  name: string;
  subtitle: string;
  roleHeaderLabel: string;
  portrait: PlaceholderAsset;
  meters: {
    hp: DecorativeMeter;
    mp: DecorativeMeter;
  };
  specs: string[];
  welcomeDialogue: {
    speaker: string;
    quote: string;
    guidance?: string;
  };
}

export interface HallSlide {
  id: string;
  title: string;
  categoryTag: string;
  image: { src: string; alt: string };
}

export type CommandIconKey = 'chest' | 'shield' | 'portrait' | 'flag';

export interface HallCommand {
  id: string;
  label: string;
  sublabel: string;
  href: string;
  icon: CommandIconKey;
}

export interface NavigationItem {
  id: string;
  label: string;
  shortLabel?: string;
  href: string;
}

export interface SpecialtyPreview {
  id: 'art' | 'story' | 'concept';
  title: string;
  subtitle: string;
  description: string;
  ctaLabel: string;
  href: string;
  attributes: Array<{
    name: string;
    level: number;
  }>;
  placeholder: PlaceholderAsset;
}

export interface TaxonomyFamily {
  id: string;
  familyName: string;
  accentCode: string;
  entries: string[];
}
