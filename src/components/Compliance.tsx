"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckIcon } from "./ui/CheckIcon";
import { PillBadge } from "./ui/PillBadge";
import { ScrollReveal } from "./animations/ScrollReveal";

const complianceItems = [
  "HIPAA-ready: signed BAAs, end-to-end encryption, and PHI handled in a secure, audited environment.",
  "Every call is recorded, transcribed, and logged — fully reviewable by your team.",
  "Doctor-configurable guardrails: the agent only takes the actions you approve.",
  "Human-in-the-loop by design — escalate to staff anytime; clinicians review and override.",
  "Role-based access controls and complete audit trails across every patient and agent.",
  "Works with your existing phone numbers, EHR, and scheduling — no rip-and-replace.",
];

function ComplianceItem({ item, index }: { item: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="flex gap-[14px]"
    >
      <CheckIcon />
      <p className="text-[14px] font-normal leading-[1.5] tracking-[-0.42px] text-ink">{item}</p>
    </motion.div>
  );
}

export function Compliance() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 pb-[80px] lg:px-8">
      <div className="grid gap-[49px] lg:grid-cols-2 lg:items-start">
        <ScrollReveal>
          <PillBadge>Trust & security</PillBadge>
          <h2 className="mt-[14px] font-display text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[40px]">
            Built for the standards healthcare runs on.
          </h2>
        </ScrollReveal>

        <div className="grid gap-y-[28px]">
          {complianceItems.map((item, i) => (
            <ComplianceItem key={item} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
