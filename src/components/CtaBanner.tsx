"use client";

import { ScrollReveal } from "./animations/ScrollReveal";
import { useDemo } from "./DemoProvider";

export function CtaBanner() {
  const { openDemo } = useDemo();

  return (
    <section className="mx-auto max-w-[1200px] px-6 pb-[80px] lg:px-8">
      <ScrollReveal>
        <div className="relative overflow-hidden rounded-[36px] bg-ink px-[35px] py-[56px] text-center lg:px-[70px] lg:py-[80px]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-signal/25 blur-3xl"
          />
          <span className="relative inline-flex items-center gap-2 rounded-[999px] bg-signal px-3 py-1 text-[12px] font-medium text-white">
            <span className="block h-2 w-2 rounded-full bg-white" aria-hidden="true" />
            Live in weeks
          </span>
          <h2 className="relative mt-5 font-display text-[32px] font-bold leading-[1.1] tracking-[-0.025em] text-white sm:text-[44px]">
            Give every patient a line that always picks up.
          </h2>
          <p className="mx-auto mt-[14px] max-w-[560px] text-[18px] leading-[1.4] text-white/70">
            See Curaevox answer, book, and follow up live, on your own numbers.
          </p>
          <div className="mt-[32px] flex justify-center gap-3">
            <button
              type="button"
              onClick={openDemo}
              className="inline-flex items-center gap-2 rounded-[14px] bg-signal px-[24px] py-[15px] text-[15px] font-medium text-white transition-opacity hover:opacity-90"
            >
              Book a demo
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={openDemo}
              className="rounded-[14px] border border-white/20 px-[24px] py-[15px] text-[15px] font-medium text-white transition-colors hover:bg-white/10"
            >
              Talk to sales
            </button>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
