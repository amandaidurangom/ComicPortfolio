import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function pixelIcon(path: string) {
  return function PixelIcon({ size = 16, ...props }: IconProps) {
    return (
      <svg aria-hidden="true" viewBox="0 0 16 16" width={size} height={size} fill="currentColor" shapeRendering="crispEdges" {...props}>
        <path d={path} />
      </svg>
    );
  };
}

export const ChevronRight = pixelIcon('M5 2h2v2h2v2h2v4H9v2H7v2H5v-3h2V9h2V7H7V5H5z');
export const ChevronLeft = pixelIcon('M11 2H9v2H7v2H5v4h2v2h2v2h2v-3H9V9H7V7h2V5h2z');
export const X = pixelIcon('M2 2h3v2h2v2h2V4h2V2h3v3h-2v2h-2v2h2v2h2v3h-3v-2H9v-2H7v2H5v2H2v-3h2V9h2V7H4V5H2z');
export const Maximize2 = pixelIcon('M1 1h6v2H3v4H1zm8 0h6v6h-2V3H9zM1 9h2v4h4v2H1zm12 0h2v6H9v-2h4z');
export const Shield = pixelIcon('M2 2h12v8h-2v2h-2v2H6v-2H4v-2H2zm2 2v5h2v2h1V4z');
export const BookOpen = pixelIcon('M1 2h5v1h2v1h1V3h2V2h4v11h-4v1H5v-1H1zm2 2v7h3v1h1V5H5V4zm9 0v1h-2v7h1v-1h2V4z');
export const MessageSquareQuote = pixelIcon('M1 2h14v10H7v2H5v2H3v-4H1zm2 2v6h2v2l2-2h6V4zm2 1h2v3H5zm4 0h2v3H9z');

export const TreasureChest = pixelIcon('M3 2h10v2h2v10H1V4h2zm0 3v2h4V5zm6 0v2h4V5zM3 9v3h10V9h-3v2H6V9z');
export const CharacterCard = pixelIcon('M2 1h12v14H2zm2 2v10h8V3zm3 1h2v1h1v3H6V5h1zm-1 5h4v1h1v2H5v-2h1z');
export const QuestFlag = pixelIcon('M2 1h2v1h5v1h5v7H9V9H4v6H2zm2 3v3h5v1h3V5H9V4z');
export const Paintbrush = pixelIcon('M13 1h2v3h-2v2h-2v2H9v2H6V7h2V5h2V3h3zM3 9h3v2h2v2H6v1H1v-2h2z');
export const Crystal = pixelIcon('M6 1h4v2h2v2h2v6h-2v2h-2v2H6v-2H4v-2H2V5h2V3h2zm1 3v2H5v4h2v2h2v-2H7V6h2V4z');
