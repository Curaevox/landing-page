"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollReveal } from "./animations/ScrollReveal";
import { PrimaryButton } from "./ui/PrimaryButton";

const products = [
  {
    title: "Answers, triages, and books on the first call",
    description:
      "A patient calls your number. The agent listens, understands the issue, checks doctor availability and insurance, recommends the right doctor, and books the slot. No hold, no callback.",
    benefits: ["Natural conversation", "Doctor matching", "Live availability & eligibility", "Automated booking"],
    cta: "Explore the Inbound Agent",
    href: "/products/inbound-agent",
    bg: "bg-mist",
    mockup: "inbound" as const,
  },
  {
    title: "Follows up after every visit, automatically",
    description:
      "After the appointment, the agent calls to check on recovery, medication adherence, and next steps, then files a structured follow-up report straight to the doctor's dashboard.",
    benefits: ["Post-visit check-ins", "Adherence & care gaps", "Structured reports", "No-show recovery"],
    cta: "Explore Follow-up",
    href: "/products/follow-up",
    bg: "bg-mint",
    mockup: "outbound" as const,
  },
  {
    title: "Every patient's agent, on one dashboard",
    description:
      "Doctors configure what each agent can do, monitor live and past conversations, attach notes, and get AI summaries. A companion for every patient, all in one place.",
    benefits: ["Per-patient AI companion", "Configure agent actions", "Monitor & annotate", "AI summaries"],
    cta: "Explore the Dashboard",
    href: "/products/dashboard",
    bg: "bg-halo",
    mockup: "dashboard" as const,
  },
];

function FeatureTag({ children }: { children: string }) {
  return (
    <span className="inline-flex w-fit items-center gap-2 rounded-[999px] bg-surface px-[16px] py-[9px] text-[14px] tracking-[-0.01em] text-ink">
      <span className="h-1.5 w-1.5 rounded-full bg-signal" />
      {children}
    </span>
  );
}

function MockCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[14px] bg-surface p-[22px] shadow-[0_24px_60px_-36px_rgba(6,49,47,0.4)]">
      {children}
    </div>
  );
}

function ProductMockup({ type }: { type: "inbound" | "outbound" | "dashboard" }) {
  if (type === "inbound") {
    return (
      <MockCard>
        <div className="flex items-center justify-between border-b border-line pb-3">
          <span className="flex items-center gap-2 text-[12px] text-muted-soft">
            <span className="relative inline-flex h-2 w-2">
              <span className="signal-ring absolute inline-flex h-2 w-2" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
            </span>
            Incoming call · live
          </span>
          <span className="flex items-end gap-[2px]" aria-hidden="true">
            {[0.5, 0.9, 0.4, 1, 0.6].map((h, i) => (
              <span key={i} className="wave-bar w-[2.5px] rounded-full bg-signal" style={{ height: `${h * 16}px`, animationDelay: `${i * 0.1}s` }} />
            ))}
          </span>
        </div>
        <div className="space-y-2 py-3">
          <div className="ml-auto w-fit max-w-[85%] rounded-[10px] rounded-tr-[4px] bg-halo px-3 py-1.5 text-[12px] text-ink">
            I need a dermatologist, ideally this week.
          </div>
          <div className="w-fit max-w-[85%] rounded-[10px] rounded-tl-[4px] bg-teal px-3 py-1.5 text-[12px] text-white">
            Dr. Lee has Monday 9:15 AM and takes your plan. Booking now.
          </div>
        </div>
        <div className="flex items-center justify-between rounded-[10px] bg-ink px-3 py-2.5">
          <span className="text-[12px] text-white">Dr. Lee · Dermatology · Mon 9:15</span>
          <span className="rounded-[999px] bg-signal px-2 py-0.5 text-[10px] font-medium text-white">Booked</span>
        </div>
      </MockCard>
    );
  }
  if (type === "outbound") {
    return (
      <MockCard>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] text-muted-soft">Follow-up report</p>
            <p className="font-display text-[15px] font-semibold text-ink">Maria Alvarez · Day 3</p>
          </div>
          <span className="rounded-[999px] bg-mint px-2.5 py-1 text-[10px] font-medium text-ink">Filed to dashboard</span>
        </div>
        <div className="mt-3 space-y-2 border-t border-line pt-3 text-[12px]">
          <div className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
            <span className="text-muted">Recovering well, mild soreness, within expected range.</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
            <span className="text-muted">Medication adherence: on track (confirmed dosage).</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
            <span className="text-ink">Flag: requests earlier follow-up visit, routed to scheduling.</span>
          </div>
        </div>
      </MockCard>
    );
  }
  return (
    <MockCard>
      <div className="flex items-center justify-between border-b border-line pb-3">
        <p className="font-display text-[15px] font-semibold text-ink">Patients</p>
        <span className="rounded-[999px] bg-halo px-2.5 py-1 text-[10px] text-teal">12 active agents</span>
      </div>
      <div className="space-y-2 py-3">
        {[
          { n: "James Rivera", s: "Booked", tone: "bg-mint text-ink" },
          { n: "Maria Alvarez", s: "Follow-up due", tone: "bg-signal-soft text-ink" },
          { n: "Wei Chen", s: "Summary ready", tone: "bg-sky text-ink" },
        ].map((r) => (
          <div key={r.n} className="flex items-center justify-between rounded-[10px] bg-halo px-3 py-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-mist text-[10px] font-semibold text-ink">
                {r.n.split(" ").map((p) => p[0]).join("")}
              </span>
              <span className="text-[12.5px] text-ink">{r.n}</span>
            </div>
            <span className={`rounded-[999px] px-2 py-0.5 text-[10px] font-medium ${r.tone}`}>{r.s}</span>
          </div>
        ))}
      </div>
      <div className="rounded-[10px] bg-ink px-3 py-2.5">
        <p className="text-[10px] text-white/55">AI summary · James Rivera</p>
        <p className="mt-0.5 text-[11.5px] leading-snug text-white">
          New cardiology referral booked for Thu. Insurance verified. Prefers morning visits.
        </p>
      </div>
    </MockCard>
  );
}

export function ProductSections() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const getScrollDistance = () => Math.max(track.scrollWidth - wrap.offsetWidth, 0);
      if (getScrollDistance() === 0) return;

      const tween = gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: wrap,
          start: "top top",
          end: () => `+=${getScrollDistance() + window.innerHeight * 0.4}`,
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
        gsap.set(track, { clearProps: "transform" });
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="how-it-works" className="py-[80px]">
      <ScrollReveal className="mx-auto mb-[49px] max-w-[1200px] px-6 text-center lg:px-8">
        <span className="inline-flex items-center rounded-[999px] bg-halo px-3 py-1.5 text-[12px] font-medium text-teal">
          How it works
        </span>
        <h3 className="mt-[16px] font-display text-[28px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[40px]">
          Two agents and a dashboard, working as one.
        </h3>
      </ScrollReveal>

      {/* Pinned, vertically-centered horizontal scroll (desktop) that stacks on mobile. */}
      <div ref={wrapRef} className="overflow-hidden lg:h-screen">
        <div className="flex h-full flex-col items-center gap-[21px] lg:flex-row">
          <div
            ref={trackRef}
            className="flex w-full flex-col gap-[21px] px-6 lg:w-max lg:flex-row lg:gap-[24px] lg:px-[40px]"
          >
            {products.map((product) => (
              <ProductCard key={product.title} product={product} />
            ))}
          </div>
        </div>
      </div>

      <ScrollReveal className="mx-auto mt-[80px] max-w-[1200px] px-6 text-center lg:px-8">
        <p className="font-display text-[28px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[40px]">
          One conversation, captured end to end.
        </p>
      </ScrollReveal>
    </section>
  );
}

function ProductCard({ product }: { product: (typeof products)[0] }) {
  return (
    <article
      className={`flex shrink-0 flex-col justify-center gap-[28px] rounded-[16px] ${product.bg} p-[35px] lg:h-[80vh] lg:max-h-[680px] lg:w-[calc(100vw-80px)] lg:max-w-[1360px] lg:flex-row lg:items-center lg:gap-[48px] lg:p-[64px]`}
    >
      <div className="flex flex-1 flex-col">
        <h4 className="font-display text-[26px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[36px]">
          {product.title}
        </h4>
        <p className="mt-[16px] max-w-[480px] text-[16px] leading-[1.5] text-muted">
          {product.description}
        </p>
        <div className="mt-[24px] flex flex-col items-start gap-[12px]">
          {product.benefits.map((b) => (
            <FeatureTag key={b}>{b}</FeatureTag>
          ))}
        </div>
        <div className="mt-[36px]">
          <PrimaryButton href={product.href} showArrow>
            {product.cta}
          </PrimaryButton>
        </div>
      </div>
      <div className="w-full lg:w-[46%]">
        <ProductMockup type={product.mockup} />
      </div>
    </article>
  );
}
