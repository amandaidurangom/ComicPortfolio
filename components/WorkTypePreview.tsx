'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

type WorkTypePreviewProps = {
  images: { src: string; title: string }[];
};

export function WorkTypePreview({ images }: WorkTypePreviewProps) {
  const [active, setActive] = useState(0);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (!hovering) return;
    const timer = window.setInterval(() => {
      setActive(index => (index + 1) % images.length);
    }, 2000);
    return () => window.clearInterval(timer);
  }, [hovering, images.length]);

  return (
    <div
      className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-panel)] bg-[#232729]"
      onPointerEnter={(event) => {
        if (event.pointerType === 'touch' || images.length < 2) return;
        setActive(index => (index + 1) % images.length);
        setHovering(true);
      }}
      onPointerLeave={() => setHovering(false)}
      onPointerCancel={() => setHovering(false)}
    >
      {images.map((image, index) => (
        <Image
          key={image.src}
          src={image.src}
          alt={index === active ? image.title : ''}
          aria-hidden={index !== active}
          fill
          unoptimized
          className={`object-contain transition-opacity duration-500 ease-in-out motion-reduce:transition-none ${index === active ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
    </div>
  );
}
