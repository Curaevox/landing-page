"use client";

import { ScrollReveal } from "./animations/ScrollReveal";

const languages = [
  "English",
  "Spanish",
  "Mandarin",
  "Vietnamese",
  "Arabic",
  "Hindi",
  "Tagalog",
  "French",
  "Russian",
  "Portuguese",
  "Korean",
  "Cantonese",
];

function VerticalMarquee() {
  const items = [...languages, ...languages];

  return (
    <div className="relative h-[280px] overflow-hidden sm:h-[320px]">
      <div className="animate-marquee-vertical flex flex-col gap-[28px]">
        {items.map((lang, i) => (
          <span
            key={`${lang}-${i}`}
            className="font-display text-[28px] leading-[1.3] tracking-[-0.84px] text-ink/25 sm:text-[40px] sm:tracking-[-0.4px]"
          >
            {lang}
          </span>
        ))}
      </div>
    </div>
  );
}

export function ClinicalSupport() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 pb-[80px] lg:px-8">
      <div className="grid gap-[21px] lg:grid-cols-2 lg:items-end">
        <ScrollReveal className="rounded-[14px] bg-halo px-[35px] py-[49px] lg:py-[70px]">
          <VerticalMarquee />
        </ScrollReveal>
        <ScrollReveal delay={0.15} className="lg:pb-[21px]">
          <span className="inline-flex items-center rounded-[999px] bg-halo px-3 py-1.5 text-[12px] font-medium text-teal">
            Built for equity
          </span>
          <h2 className="mt-[14px] font-display text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[40px]">
            Every caller gets the same patient, unbiased intake.
          </h2>
          <p className="mt-[14px] text-[18px] leading-[1.5] text-muted">
            Peer-reviewed audits show appointment access varies by race and language: who gets asked
            about insurance, who waits longer, who can even book in their own language. Curaevox asks
            every caller the same questions, in their language, every time.
          </p>
          <p className="mt-4 text-[12px] text-muted-soft">
            JAMA Network Open, 2020; Health Affairs Scholar, 2023.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
