import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ARTIST_PROFILE, INTRO_CONTENT } from '@/content/site-data';
import { SectionHeading } from '@/components/SectionHeading';
import { RPGPanel } from '@/components/RPGPanel';
import { RPGCommandButton } from '@/components/RPGCommandButton';

export const metadata: Metadata = {
  title: 'About · Amanda Durango',
  description:
    'Amanda Durango is a comic book artist and illustrator specializing in sequential storytelling, character design, and cover art.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-6">
      <SectionHeading ornate title="About" />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(260px,1fr)_2fr]">
        <RPGPanel variant="subtle"
          panelTitle={INTRO_CONTENT.headline}
        >
          <p className="text-sm text-[#dce7e6]">{INTRO_CONTENT.tagline}</p>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-panel)] bg-black">
            <Image
              src="/assets/about-portrait.webp"
              alt={`Portrait of ${ARTIST_PROFILE.name} under pink and cyan lighting`}
              fill
              unoptimized
              className="object-cover object-top"
            />
          </div>
        </RPGPanel>

        <RPGPanel variant="subtle" panelTitle="About Me">
          <div className="flex flex-col gap-4">
            <p className="text-sm leading-relaxed text-[#dce7e6]">
              I’m Amanda Durango, a comic book artist and illustrator based in Buenos Aires, Argentina.
              I help writers, publishers, and independent creators tell stories through expressive characters,
              thoughtful composition, and clear sequential art.
            </p>
            <p className="text-sm leading-relaxed text-[#dce7e6]">
              Over more than ten years, I’ve illustrated comic pages, covers, and character-driven stories
              across fantasy and science fiction. I focus on making each scene easy to follow and giving
              its most important moments room to land.
            </p>
            <div className="border-b border-[#88d8ce]/20 pb-4">
              <h3 className="font-display text-xs font-semibold tracking-[0.14em] text-[#88d8ce] uppercase">
                Specializations
              </h3>
              <ul className="mt-2.5 flex flex-wrap gap-x-4 gap-y-2 text-sm text-[#ffffff]">
                {[
                  'Comic pages and sequential art',
                  'Graphic novels and long-form projects',
                  'Print-ready covers, including wraparound designs',
                  'Character design and character sheets',
                  'Black-and-white and full-color illustration',
                ].map((spec) => (
                  <li key={spec} className="flex items-center gap-2">
                    <span aria-hidden="true" className="text-[10px] text-[#99cccc]/80">
                      ◇
                    </span>
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <section className="space-y-2 border-b border-[#88d8ce]/20 pb-4">
              <h3 className="font-display text-xs tracking-[0.14em] uppercase">How I Work</h3>
              <p className="text-sm leading-relaxed text-[#dce7e6]">
                I start with thumbnails to establish pacing and composition, then move through sketches,
                line art, and final illustration. I share progress and check in at each stage so we can
                make decisions together as the artwork develops.
              </p>
            </section>

            <details className="group rounded-[var(--radius-control)] border border-[#88d8ce]/25 px-4">
              <summary className="cursor-pointer py-3 text-sm font-semibold marker:text-[#88d8ce]">
                Background <span className="ml-2 text-[#88d8ce] group-open:hidden">Read more</span>
                <span className="ml-2 hidden text-[#88d8ce] group-open:inline">Read less</span>
              </summary>
              <ul className="space-y-2 pb-4 text-sm leading-relaxed text-[#dce7e6]">
                <li>Freelance illustrator, graphic designer, and comic book artist on Fiverr since 2015 and Upwork since 2016.</li>
                <li>Graphic designer and illustrator at KaPa99, an advertising agency in Maracaibo, Venezuela (2015–2016).</li>
                <li>Graphic designer for Celebraciones magazine in Cartagena, Colombia (2015).</li>
                <li>Film and media production intern at Clap Media and production assistant on the short film <em>Héroe en Banca</em> (2014).</li>
              </ul>
            </details>

            <details className="group rounded-[var(--radius-control)] border border-[#88d8ce]/25 px-4">
              <summary className="cursor-pointer py-3 text-sm font-semibold marker:text-[#88d8ce]">
                Studies <span className="ml-2 text-[#88d8ce] group-open:hidden">Read more</span>
                <span className="ml-2 hidden text-[#88d8ce] group-open:inline">Read less</span>
              </summary>
              <ul className="space-y-2 pb-4 text-sm leading-relaxed text-[#dce7e6]">
                <li>Motion Graphics and 3D Modeling certifications · Escuela Multimedia Da Vinci (2024)</li>
                <li>Motion Graphics · Animaclick (2019)</li>
                <li>Comic Production · Escuela Argentina de Historietas (2018)</li>
                <li>Audiovisual Production certification · Universidad Dr. Rafael Belloso Chacín (2014–2015)</li>
                <li>BA in Graphic Design, cum laude · Universidad Dr. Rafael Belloso Chacín (2011–2014)</li>
                <li>Bilingual studies · Centro Venezolano Americano del Zulia (2010)</li>
                <li>Comic Art · Museo de Arte Contemporáneo del Zulia (2007–2009)</li>
              </ul>
            </details>

            <section className="space-y-2">
              <h3 className="font-display text-xs tracking-[0.14em] uppercase">Languages</h3>
              <ul className="space-y-1 text-sm text-[#dce7e6]">
                <li>Spanish · Native or bilingual</li>
                <li>English · Fluent</li>
              </ul>
            </section>

            <div className="mt-2 flex flex-wrap items-center justify-end gap-4 pt-2">
              <RPGCommandButton
                label="CONTACT"
                href="/contact"
                variant="primary"
              />
            </div>
          </div>
        </RPGPanel>
      </div>
    </div>
  );
}
