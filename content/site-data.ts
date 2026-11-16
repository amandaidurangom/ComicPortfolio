import {
  ArtistProfile,
  HallCommand,
  HallSlide,
  NavigationItem,
  PlaceholderAsset,
  SpecialtyPreview,
} from './types';

export const GLOBAL_NAVIGATION: NavigationItem[] = [
  {
    id: 'intro',
    label: 'Intro Hybrid',
    shortLabel: 'Intro',
    href: '/',
  },
  {
    id: 'hall',
    label: 'Playing Hall',
    shortLabel: 'Playing Hall',
    href: '/hall',
  },
  {
    id: 'work-types',
    label: 'Select Your Type of Work',
    shortLabel: 'Work Types',
    href: '/work-types',
  },
  {
    id: 'portfolio',
    label: 'The Art Portfolio',
    shortLabel: 'The Art Portfolio',
    href: '/portfolio',
  },
  {
    id: 'about',
    label: 'About',
    shortLabel: 'About',
    href: '/about',
  },
  {
    id: 'contact',
    label: 'Contact',
    shortLabel: 'Contact',
    href: '/contact',
  },
];

export const INTRO_CONTENT = {
  artistName: 'Amanda Durango',
  headerRole: 'Concept Artist · Illustrator',
  headline: 'Manda Durango',
  subheadline: 'Illustration Portfolio',
  tagline: 'Concept Art, Comics, Illustration and Design',
  heroPlaceholder: {
    id: 'intro-hero-illustration',
    label: 'ILLUSTRATION PLACEHOLDER',
    dimensionsText: '1280 × 540',
    aspectRatioClass: 'aspect-[16/9] sm:aspect-[21/9] lg:aspect-[1280/540]',
    aspectRatioPreset: 'hero',
  } satisfies PlaceholderAsset,
  primaryActions: [
    {
      id: 'start-playing',
      label: 'START PLAYING',
      sublabel: 'Enter Playing Hall',
      href: '/hall',
      variant: 'primary' as const,
    },
    {
      id: 'quick-browse',
      label: 'QUICK BROWSE',
      sublabel: 'Open The Art Portfolio',
      href: '/portfolio',
      variant: 'secondary' as const,
    },
  ],
};

export const ARTIST_PROFILE: ArtistProfile = {
  name: 'Amanda Durango',
  subtitle: 'Concept Art, Comics, Illustration and Design',
  roleHeaderLabel: 'Concept Artist · Illustrator',
  portrait: {
    id: 'hall-artist-portrait',
    label: 'PORTRAIT PLACEHOLDER',
    dimensionsText: '4 : 5',
    aspectRatioClass: 'aspect-[4/5]',
    aspectRatioPreset: 'portrait',
  },
  meters: {
    hp: {
      label: 'HP',
      current: 100,
      max: 100,
      percentage: 85,
    },
    mp: {
      label: 'MP',
      current: 50,
      max: 50,
      percentage: 65,
    },
  },
  specs: [
    'Concept Art',
    'Comic',
    'Animation',
    'Product Design',
    'Character Design',
  ],
  welcomeDialogue: {
    speaker: 'Amanda Durango',
    quote:
      '“Welcome to the Playing Hall. Choose an option to begin your journey, explore my work, or browse by specialty.”',
  },
};

export const HALL_CAROUSEL_SLIDES: HallSlide[] = [
  {
    id: 'hall-slide-01',
    title: 'Winter Landscape',
    categoryTag: 'Concept Art',
    image: {
      src: '/portfolio-art/concept-art/3.webp',
      alt: 'Snow-covered mountain pass with a stone arch and a red banner',
    },
  },
  {
    id: 'hall-slide-02',
    title: 'Orc',
    categoryTag: 'Character Design',
    image: {
      src: '/portfolio-art/character-design/4.webp',
      alt: 'Armored orc carrying a large axe',
    },
  },
  {
    id: 'hall-slide-03',
    title: 'Comic Portfolio',
    categoryTag: 'Sequential Art',
    image: {
      src: '/portfolio-art/comics/17.webp',
      alt: 'Black-and-white and full-color comic pages shown side by side',
    },
  },
];

export const HALL_COMMANDS: HallCommand[] = [
  {
    id: 'cmd-explore-work',
    label: 'EXPLORE WORK',
    sublabel: 'The Art Portfolio',
    href: '/portfolio',
    icon: 'chest',
  },
  {
    id: 'cmd-select-class',
    label: 'SELECT CLASS',
    sublabel: 'Select Your Type of Work',
    href: '/work-types',
    icon: 'shield',
  },
  {
    id: 'cmd-character-profile',
    label: 'CHARACTER PROFILE',
    sublabel: 'About',
    href: '/about',
    icon: 'portrait',
  },
  {
    id: 'cmd-start-quest',
    label: 'START QUEST',
    sublabel: 'Contact',
    href: '/contact',
    icon: 'flag',
  },
];

export const WORK_TYPES_PREVIEW: SpecialtyPreview[] = [
  {
    id: 'art',
    title: 'THE ART',
    subtitle: 'Illustration & Character Art',
    description:
      'Creation of characters, illustration, and final artwork with a narrative focus.',
    ctaLabel: 'SEE MORE ART',
    href: '/portfolio?specialty=art',
    attributes: [
      { name: 'Character Design', level: 4 },
      { name: 'Illustration', level: 4 },
      { name: 'World Building', level: 3 },
    ],
    placeholder: {
      id: 'specialty-art-placeholder',
      label: 'IMAGE PLACEHOLDER',
      dimensionsText: '16 : 10',
      aspectRatioClass: 'aspect-[16/10]',
      aspectRatioPreset: 'card',
    },
  },
  {
    id: 'story',
    title: 'THE STORY',
    subtitle: 'Comics & Sequential Art',
    description:
      'Visual narrative, comics, and storyboards that bring a world and its stories to life.',
    ctaLabel: 'SEE MORE STORIES',
    href: '/portfolio?specialty=story',
    attributes: [
      { name: 'Narrative', level: 4 },
      { name: 'Sequential', level: 4 },
      { name: 'Storyboard', level: 3 },
    ],
    placeholder: {
      id: 'specialty-story-placeholder',
      label: 'IMAGE PLACEHOLDER',
      dimensionsText: '16 : 10',
      aspectRatioClass: 'aspect-[16/10]',
      aspectRatioPreset: 'card',
    },
  },
  {
    id: 'concept',
    title: 'THE CONCEPT',
    subtitle: 'Design & Art Direction',
    description:
      'Art direction, design, and visual development of resources for creative projects.',
    ctaLabel: 'SEE MORE CONCEPT',
    href: '/portfolio?specialty=concept',
    attributes: [
      { name: 'Art Direction', level: 4 },
      { name: 'Visual Design', level: 4 },
      { name: 'Production', level: 3 },
    ],
    placeholder: {
      id: 'specialty-concept-placeholder',
      label: 'IMAGE PLACEHOLDER',
      dimensionsText: '16 : 10',
      aspectRatioClass: 'aspect-[16/10]',
      aspectRatioPreset: 'card',
    },
  },
];
