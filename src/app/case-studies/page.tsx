import { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Customers | Curaevox",
};

const outcomes = [
  { stat: "100%", label: "of inbound calls answered, 24/7 — including after hours" },
  { stat: "31% → 12%", label: "illustrative drop in no-shows with reminders & follow-up" },
  { stat: "Every visit", label: "closed with an automated, structured follow-up" },
];

export default function CaseStudiesPage() {
  return (
    <PageShell
      eyebrow="Curaevox at work"
      title="What changes when the phone always gets answered"
      description="We're partnering with our first hospitals and clinics now. The outcomes below are illustrative of what the platform is built to deliver."
    >
      <div className="mt-[49px] grid gap-[21px] sm:grid-cols-3">
        {outcomes.map((o) => (
          <article key={o.label} className="rounded-[16px] bg-halo p-[28px]">
            <p className="font-display text-[40px] font-semibold leading-none tracking-[-0.02em] text-ink">
              {o.stat}
            </p>
            <p className="mt-3 text-[15px] leading-[1.5] text-muted">{o.label}</p>
          </article>
        ))}
      </div>
      <p className="mt-[28px] text-[13px] text-muted-soft">Illustrative outcomes.</p>
    </PageShell>
  );
}
