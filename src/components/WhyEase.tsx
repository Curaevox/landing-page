"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PillBadge } from "./ui/PillBadge";
import { ScrollReveal } from "./animations/ScrollReveal";

const features = [
  {
    title: "Answers every call, 24/7",
    description:
      "The inbound agent converses naturally, pulls up doctor specialties and live availability, captures the reason for the visit, and books the right slot — no hold music, no voicemail.",
    icon: "voice",
  },
  {
    title: "Follows up after every visit",
    description:
      "The outbound agent calls patients after appointments, checks on recovery and adherence, and files a structured follow-up report to the doctor's dashboard.",
    icon: "followup",
  },
  {
    title: "A companion for every patient",
    description:
      "Each patient gets a dedicated agent the doctor configures, monitors, annotates, and summarizes — every conversation saved to one dashboard.",
    icon: "dashboard",
  },
];

function WhyIcon({ type }: { type: string }) {
  if (type === "voice") {
    return (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M8 18V22" stroke="#06312f" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 13V27" stroke="#06312f" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 8V32" stroke="#06312f" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M26 13V27" stroke="#06312f" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M32 18V22" stroke="#06312f" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "followup") {
    return (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path
          d="M30 20C30 25.523 25.523 30 20 30C14.477 30 10 25.523 10 20C10 14.477 14.477 10 20 10C23.5 10 26.58 11.8 28.36 14.5"
          stroke="#06312f"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M29 9.5V15H23.5"
          stroke="#06312f"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="7" y="9" width="26" height="22" rx="3" stroke="#06312f" strokeWidth="1.5" />
      <path d="M16 9V31" stroke="#06312f" strokeWidth="1.5" />
      <path d="M20 15H29" stroke="#06312f" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 20H29" stroke="#06312f" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 25H25" stroke="#06312f" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function WhyCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.96, clipPath: "inset(0 10% 10% 0 round 14px)" }}
      animate={
        isInView
          ? { opacity: 1, scale: 1, clipPath: "inset(0 0% 0% 0 round 14px)" }
          : { opacity: 0, scale: 0.96, clipPath: "inset(0 10% 10% 0 round 14px)" }
      }
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden rounded-[14px] bg-halo p-[28px] lg:p-[35px]"
    >
      <div className="mb-[21px]">
        <WhyIcon type={feature.icon} />
      </div>
      <h3 className="font-display text-[22px] font-semibold leading-[1.25] tracking-[-0.02em] text-ink">
        {feature.title}
      </h3>
      <p className="mt-[14px] text-[14px] font-normal leading-[1.5] tracking-[-0.42px] text-muted">
        {feature.description}
      </p>
    </motion.div>
  );
}

export function WhyEase() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 pb-[80px] lg:px-8">
      <ScrollReveal className="mb-[49px]">
        <PillBadge>Why Curaevox</PillBadge>
        <h2 className="mt-[14px] font-display text-[32px] font-semibold leading-[1.35] tracking-[-0.02em] text-ink sm:text-[40px]">
          One platform for the whole patient conversation.
        </h2>
      </ScrollReveal>
      <div className="grid gap-[21px] lg:grid-cols-3">
        {features.map((feature, i) => (
          <WhyCard key={feature.title} feature={feature} index={i} />
        ))}
      </div>
    </section>
  );
}
