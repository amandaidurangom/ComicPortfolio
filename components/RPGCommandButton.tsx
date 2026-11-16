import React from 'react';
import Link from 'next/link';
import {
  TreasureChest,
  Shield,
  CharacterCard,
  QuestFlag,
  ChevronRight,
} from '@/components/PixelIcons';
import { CommandIconKey } from '@/content/types';
import { cn } from '@/lib/utils';

const ICON_MAP: Record<CommandIconKey, React.ComponentType<{ className?: string }>> = {
  chest: TreasureChest,
  shield: Shield,
  portrait: CharacterCard,
  flag: QuestFlag,
};

export interface RPGCommandButtonProps {
  label: string;
  sublabel?: string;
  href?: string;
  onClick?: () => void;
  icon?: CommandIconKey;
  variant?: 'primary' | 'secondary' | 'command';
  className?: string;
  ariaLabel?: string;
  disabled?: boolean;
}

export function RPGCommandButton({
  label,
  sublabel,
  href,
  onClick,
  icon,
  variant = 'command',
  className,
  ariaLabel,
  disabled = false,
}: RPGCommandButtonProps) {
  const IconComponent = icon ? ICON_MAP[icon] : null;

  const baseClasses = cn(
    'group relative inline-flex min-h-[48px] items-center justify-between gap-3 border px-4 py-2.5 text-left transition-colors duration-150',
    'focus-visible:outline-[2px] focus-visible:outline-[#ff6666] focus-visible:outline-offset-[3px]',
    variant === 'primary' &&
      'border-[#88d8ce]/30 bg-[#2b3032]/90 text-[#ffffff] hover:border-[#99cccc]/60 hover:bg-[#34383a] justify-center text-center min-w-[200px]',
    variant === 'secondary' &&
      'border-[#88d8ce]/22 bg-[#232729]/85 text-[#ffffff] hover:border-[#99cccc]/55 hover:bg-[#2b3032] justify-center text-center min-w-[200px]',
    variant === 'command' &&
      'w-full border-[#88d8ce]/22 bg-[#2b3032]/85 text-[#ffffff] hover:border-[#99cccc]/55 hover:bg-[#34383a]',
    disabled && 'opacity-50 pointer-events-none',
    (variant === 'command' || variant === 'primary') && 'rpg-plaque',
    className
  );

  const innerContent = (
    <>
      {/* Four Corner Brackets on Button */}
      <span
        aria-hidden="true"
        className="rpg-plaque-corner pointer-events-none absolute -top-px -left-px h-2.5 w-2.5 border-t-[1.5px] border-l-[1.5px] border-[#88d8ce] transition-colors group-hover:border-[#ff6666]"
      />
      <span
        aria-hidden="true"
        className="rpg-plaque-corner pointer-events-none absolute -top-px -right-px h-2.5 w-2.5 border-t-[1.5px] border-r-[1.5px] border-[#88d8ce] transition-colors group-hover:border-[#ff6666]"
      />
      <span
        aria-hidden="true"
        className="rpg-plaque-corner pointer-events-none absolute -bottom-px -left-px h-2.5 w-2.5 border-b-[1.5px] border-l-[1.5px] border-[#88d8ce] transition-colors group-hover:border-[#ff6666]"
      />
      <span
        aria-hidden="true"
        className="rpg-plaque-corner pointer-events-none absolute -bottom-px -right-px h-2.5 w-2.5 border-b-[1.5px] border-r-[1.5px] border-[#88d8ce] transition-colors group-hover:border-[#ff6666]"
      />

      {variant === 'command' ? (
        <>
          <div className="flex min-w-0 items-center gap-3">
            {IconComponent && (
              <span
                aria-hidden="true"
                className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#88d8ce]/25 bg-[#1c2022] text-[#99cccc] transition-transform duration-150 group-hover:scale-105"
              >
                <IconComponent className="h-4 w-4" />
              </span>
            )}
            <div className="min-w-0">
              <span className="font-action block text-sm tracking-[0.1em] text-[#ffffff] uppercase">
                {label}
              </span>
              {sublabel && (
                <span className="block text-xs text-[#cfdcdd]">
                  {sublabel}
                </span>
              )}
            </div>
          </div>
          <ChevronRight
            aria-hidden="true"
            className="h-4 w-4 shrink-0 text-[#88d8ce]/80 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:text-[#ff6666]"
          />
        </>
      ) : (
        <div className="flex items-center justify-center gap-2.5 px-2">
          <span
            aria-hidden="true"
            className="text-[10px] text-[#99cccc]/85 transition-transform duration-150 group-hover:scale-110"
          >
            ✦
          </span>
          <span className="font-action text-sm tracking-[0.14em] text-[#ffffff] uppercase whitespace-nowrap sm:text-base">
            {label}
          </span>
          <span
            aria-hidden="true"
            className="text-[10px] text-[#99cccc]/85 transition-transform duration-150 group-hover:scale-110"
          >
            ✦
          </span>
        </div>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} aria-label={ariaLabel} className={baseClasses}>
        {innerContent}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
      className={baseClasses}
    >
      {innerContent}
    </button>
  );
}
