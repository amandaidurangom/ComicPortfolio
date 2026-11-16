import React from 'react';
import type { Metadata } from 'next';
import { SectionHeading } from '@/components/SectionHeading';
import { RPGPanel } from '@/components/RPGPanel';
import { RPGCommandButton } from '@/components/RPGCommandButton';

export const metadata: Metadata = {
  title: 'Contact · Amanda Durango',
  description:
    'Project inquiries and quotation requests for Amanda Durango.',
};

const INQUIRY_FIELDS = [
  'Client Name',
  'Email',
  'Project Type',
  'Project Brief',
  'Approximate Budget',
  'Desired Deadline',
];

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-6">
      <SectionHeading ornate title="Contact" />

      <RPGPanel variant="subtle"
        panelTitle="Project Inquiry"
        panelSubtitle="Concept Art, Comics, Illustration and Design"
      >
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {INQUIRY_FIELDS.map((field) => (
            <div
              key={field}
              className="relative border border-[#88d8ce]/20 bg-[#1c2022]/80 px-4 py-3"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-px -left-px h-2 w-2 border-t border-l border-[#88d8ce]"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-px -right-px h-2 w-2 border-r border-b border-[#88d8ce]"
              />
              <span className="font-body text-xs font-semibold tracking-[0.12em] text-[#dce7e6] uppercase">
                {field}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-2 flex flex-wrap items-center justify-between gap-4 border-t border-[#88d8ce]/20 pt-4">
          <RPGCommandButton
            label="PLAYING HALL"
            href="/hall"
            variant="secondary"
          />
          <RPGCommandButton
            label="THE ART PORTFOLIO"
            href="/portfolio"
            variant="primary"
          />
        </div>
      </RPGPanel>
    </div>
  );
}
