import { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = { title: "Careers | Curaevox" };

const roles = ["Senior Full-Stack Engineer", "Clinical Product Manager", "Revenue Cycle Specialist", "Customer Success Lead"];

export default function CareersPage() {
  return (
    <PageShell
        eyebrow="Careers"
        title="Join the team building AI voice agents for patient access"
        description="We're building the AI-native operating system for patient access."
      >
        <ul className="mt-[49px] space-y-[14px]">
          {roles.map((role) => (
            <li key={role} className="rounded-[14px] border border-hairline-gray px-[21px] py-[18px] text-[18px] text-charcoal">
              {role}
            </li>
          ))}
        </ul>
      </PageShell>
  );
}
