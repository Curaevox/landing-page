import { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = { title: "Terms of Service | Curaevox" };

export default function TermsPage() {
  return (
    <PageShell title="Terms of Service" showCta={false}>
        <div className="mt-[49px] max-w-3xl space-y-[21px] text-[18px] leading-[1.3] text-charcoal">
          <p>
            By accessing or using Curaevox services, you agree to these Terms of Service and our
            Privacy Policy.
          </p>
          <p>
            These terms govern your use of the Curaevox platform, including the inbound agent, outbound follow-up, and doctor dashboard.
          </p>
        </div>
      </PageShell>
  );
}
