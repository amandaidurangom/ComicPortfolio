import React from 'react';
import { PlaceholderAsset } from '@/content/types';
import { cn } from '@/lib/utils';

export interface ArtworkPlaceholderProps {
  asset: PlaceholderAsset;
  className?: string;
}

export function ArtworkPlaceholder({
  asset,
  className,
}: ArtworkPlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`${asset.label} (${asset.dimensionsText})`}
      className={cn(
        'wireframe-crosshair relative flex w-full flex-col items-center justify-center overflow-hidden border border-[#88d8ce]/22 p-4 text-center select-none sm:p-6',
        asset.aspectRatioClass,
        className
      )}
    >
      {/* Delicate Corner Brackets */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 h-3 w-3 border-t border-l border-[#99cccc]/80"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 h-3 w-3 border-t border-r border-[#99cccc]/80"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b border-l border-[#99cccc]/80"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 h-3 w-3 border-r border-b border-[#99cccc]/80"
      />

      {/* Minimal Wireframe Center Label */}
      <div className="relative z-10 flex flex-col items-center gap-1 px-4 py-2">
        <span className="font-display text-xs font-medium tracking-[0.2em] text-[#dce7e6]/90 uppercase sm:text-sm">
          {asset.label}
        </span>
        {asset.sublabel && (
          <span className="text-xs text-[#acbcbe]">
            {asset.sublabel}
          </span>
        )}
        <span className="font-mono text-[11px] tracking-widest text-[#acbcbe]/85 tabular-nums">
          ({asset.dimensionsText})
        </span>
      </div>
    </div>
  );
}
