"use client";

import { ScrollReveal } from "./animations/ScrollReveal";

const STATS = [
  {
    value: "10M",
    label: "projected global health-worker shortfall by 2030 (WHO)",
  },
  {
    value: "86,000",
    label: "projected U.S. physician shortfall by 2036 (AAMC)",
  },
  {
    value: "2 hrs",
    label: "of admin & EHR work for every 1 hour of patient care (Sinsky, Ann Intern Med)",
  },
] as const;

export function Stats() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 pb-[80px] lg:px-8">
      <ScrollReveal>
        <span className="inline-flex items-center rounded-[999px] bg-halo px-3 py-1.5 text-[12px] font-medium text-teal">
          Why now
        </span>
        <h2 className="mt-[20px] font-display text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[40px]">
          The shortage is the context. Access is the fight.
        </h2>
        <p className="mt-[14px] max-w-[640px] text-[18px] leading-[1.5] text-muted">
          There aren&apos;t enough clinicians, and the ones we have spend hours on admin instead of
          patients. Curaevox handles the front door and the follow-up, so that time goes back to
          care.
        </p>

        <div className="mt-[49px] grid gap-[28px] sm:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.value}>
              <p className="font-display text-[44px] font-semibold leading-none tracking-[-0.02em] text-ink sm:text-[56px]">
                {stat.value}
              </p>
              <p className="mt-2 text-[13px] leading-snug text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
