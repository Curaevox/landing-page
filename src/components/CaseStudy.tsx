"use client";

import { PillBadge } from "./ui/PillBadge";
import { PrimaryButton } from "./ui/PrimaryButton";
import { ScrollReveal } from "./animations/ScrollReveal";

export function CaseStudy() {
  return (
    <section id="case-studies" className="mx-auto max-w-[1200px] px-6 pb-[80px] lg:px-8">
      <ScrollReveal className="mb-[49px]">
        <PillBadge>Curaevox at work</PillBadge>
        <h2 className="mt-[14px] font-display text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] text-ink sm:text-[40px]">
          What changes when the phone always gets answered.
        </h2>
      </ScrollReveal>

      <div className="grid gap-[21px] lg:grid-cols-[1.1fr_0.9fr]">
        <div className="block rounded-[16px] bg-mist p-[35px] lg:p-[49px]">
          <span className="inline-flex items-center gap-1.5 rounded-[999px] bg-surface/70 px-2.5 py-1 text-[11px] font-medium tracking-[-0.01em] text-teal">
            Illustrative
          </span>
          <blockquote className="mt-[20px] font-display text-[23px] font-semibold leading-[1.3] tracking-[-0.02em] text-ink sm:text-[28px]">
            &ldquo;After-hours calls used to go to voicemail and we&apos;d lose the patient. Now every
            call is answered, triaged, and booked before morning.&rdquo;
          </blockquote>
          <div className="mt-[28px]">
            <p className="text-[14px] font-medium tracking-[-0.01em] text-ink">Practice Manager</p>
            <p className="text-[12px] text-muted">Multi-site primary care group</p>
          </div>
        </div>

        <div className="flex flex-col gap-[21px]">
          <div className="grid gap-[21px] sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-[16px] bg-halo p-[28px]">
              <p className="font-display text-[40px] font-semibold leading-none tracking-[-0.02em] text-ink sm:text-[48px]">
                0
              </p>
              <p className="mt-2 text-[14px] leading-[1.5] text-muted">
                after-hours calls left unanswered. Every call triaged and booked
              </p>
            </div>
            <div className="rounded-[16px] bg-mint p-[28px]">
              <p className="font-display text-[40px] font-semibold leading-none tracking-[-0.02em] text-ink sm:text-[48px]">
                31% &rarr; 12%
              </p>
              <p className="mt-2 text-[14px] leading-[1.5] text-muted">
                illustrative drop in no-shows with automated reminders and follow-up
              </p>
            </div>
          </div>
          <p className="text-[12px] text-muted-soft">Illustrative outcomes.</p>
          <PrimaryButton href="/#how-it-works" showArrow className="self-start">
            See how it works
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
