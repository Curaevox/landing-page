import { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = { title: "Solutions | Curaevox" };

const byOrg = [
  {
    id: "hospitals",
    title: "Hospitals & health systems",
    body: "Capture every inbound call across departments, route patients to the right specialty, and close the loop with automated follow-up after discharge.",
  },
  {
    id: "clinics",
    title: "Clinics & private practice",
    body: "Give a small front desk superpowers. Never miss an after-hours call, cut no-shows, and free staff from the phone.",
  },
  {
    id: "specialty",
    title: "Specialty & multi-site",
    body: "Match patients to the right provider and location across sites, with consistent intake and a single dashboard for every patient.",
  },
];

const byOutcome = [
  { id: "capture", title: "Capture every call", body: "Answer 100% of inbound calls, 24/7, including the after-hours calls that go to voicemail today." },
  { id: "no-shows", title: "Reduce no-shows", body: "Automated reminders, confirmations, and proactive rebooking turn missed slots into kept appointments." },
  { id: "equity", title: "Equitable access", body: "Every caller gets the same questions, in their own language, every time. Access that doesn't depend on who's calling." },
];

export default function SolutionsPage() {
  return (
    <PageShell
      eyebrow="Solutions"
      title="Built for every front door to care"
      description="From single clinics to multi-site health systems, Curaevox answers, books, and follows up, on your numbers, in your patients' languages."
    >
      <div className="mt-[56px]">
        <h2 className="font-display text-[24px] font-semibold tracking-[-0.02em] text-ink">By organization</h2>
        <div className="mt-[21px] grid gap-[21px] lg:grid-cols-3">
          {byOrg.map((s) => (
            <article key={s.id} id={s.id} className="scroll-mt-28 rounded-[16px] bg-halo p-[28px]">
              <h3 className="font-display text-[20px] font-semibold tracking-[-0.02em] text-ink">{s.title}</h3>
              <p className="mt-[12px] text-[16px] leading-[1.5] text-muted">{s.body}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-[49px]">
        <h2 className="font-display text-[24px] font-semibold tracking-[-0.02em] text-ink">By outcome</h2>
        <div className="mt-[21px] grid gap-[21px] lg:grid-cols-3">
          {byOutcome.map((s) => (
            <article key={s.id} id={s.id} className="scroll-mt-28 rounded-[16px] bg-mist p-[28px]">
              <h3 className="font-display text-[20px] font-semibold tracking-[-0.02em] text-ink">{s.title}</h3>
              <p className="mt-[12px] text-[16px] leading-[1.5] text-muted">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
