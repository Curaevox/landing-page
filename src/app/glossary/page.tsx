import { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = { title: "Glossary | Curaevox" };

const terms = [
  { term: "OBOT", definition: "Office-Based Opioid Treatment, outpatient medication-assisted treatment." },
  { term: "PHP", definition: "Partial Hospitalization Program, structured day treatment without overnight stay." },
  { term: "IOP", definition: "Intensive Outpatient Program, several hours of treatment per week while living at home." },
  { term: "RCM", definition: "Revenue Cycle Management, billing, claims, and collections workflows." },
  { term: "VOB", definition: "Verification of Benefits, confirming patient coverage before services." },
];

export default function GlossaryPage() {
  return (
    <PageShell
        eyebrow="Glossary"
        title="Patient access terms"
        description="Definitions for common terms across clinical, operational, and billing workflows."
      >
        <dl className="mt-[49px] space-y-[21px]">
          {terms.map(({ term, definition }) => (
            <div key={term} className="rounded-[14px] bg-linen p-[21px]">
              <dt className="font-serif text-[23px] font-light text-forest-ink">{term}</dt>
              <dd className="mt-2 text-[18px] leading-[1.3] text-charcoal">{definition}</dd>
            </div>
          ))}
        </dl>
      </PageShell>
  );
}
