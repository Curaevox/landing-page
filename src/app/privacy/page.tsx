import { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = { title: "Privacy Policy | Curaevox" };

export default function PrivacyPage() {
  return (
    <PageShell title="Privacy Policy" showCta={false}>
        <div className="prose-custom mt-[49px] max-w-3xl space-y-[21px] text-[18px] leading-[1.3] text-charcoal">
          <p>
            Curaevox is committed to protecting the privacy and security of protected health
            information (PHI) and personal data in accordance with HIPAA and applicable regulations.
          </p>
          <p>
            This policy describes how we collect, use, and safeguard information when you use our
            platform and website.
          </p>
        </div>
      </PageShell>
  );
}
