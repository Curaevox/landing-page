"use client";

import { PillBadge } from "./ui/PillBadge";
import { PrimaryButton } from "./ui/PrimaryButton";
import { ScrollReveal } from "./animations/ScrollReveal";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-[1200px] px-6 pb-[80px] lg:px-8">
      <ScrollReveal>
        <div className="grid gap-[21px] rounded-[14px] bg-halo p-[35px] lg:grid-cols-2 lg:items-center lg:p-[70px]">
          <div>
            <PillBadge>About us</PillBadge>
            <h2 className="mt-[14px] font-display text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[40px]">
              No patient should wait on hold for care.
            </h2>
          </div>
          <div>
            <p className="text-[18px] leading-[1.5] text-muted">
              Curaevox builds AI voice agents for the two moments that decide whether someone gets
              care, the first call in, and the follow-up after. We pair natural conversation with
              real tools: doctor matching, live availability, automated booking, and structured
              follow-up. Clinicians get their time back; patients get answered, every time, in their
              own language.
            </p>
            <div className="mt-[28px]">
              <PrimaryButton href="/about" showArrow>
                Our story
              </PrimaryButton>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
