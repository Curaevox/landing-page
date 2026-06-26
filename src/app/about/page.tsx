import { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "About | Curaevox",
  description: "Built with experts for real-world patient care.",
};

export default function AboutPage() {
  return (
    <PageShell
        eyebrow="About us"
        title="Built with experts for real-world care"
        description="Curaevox was built alongside clinicians and practice leaders who understand the reality of modern patient care."
      >
        <div className="mt-[49px] max-w-3xl space-y-[21px] text-[18px] leading-[1.3] tracking-[-0.54px] text-charcoal">
          <p>
            From documentation and scheduling to billing and reporting, every workflow reflects how
            care actually happens, not how legacy systems force it to happen.
          </p>
          <p>
            Our team combines deep patient access operations experience with AI-native product
            design to help practices admit more patients, reduce staff burden, and get paid faster.
          </p>
        </div>
      </PageShell>
  );
}
