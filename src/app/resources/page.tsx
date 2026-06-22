import { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = { title: "Resources | Curaevox" };

const resources = [
  "Patient access intake checklist",
  "RCM denial prevention guide",
  "Clinical documentation best practices",
  "State compliance overview template",
];

export default function ResourcesPage() {
  return (
    <PageShell
        eyebrow="Resources"
        title="Templates, checklists & tools"
        description="Downloadable resources to help your team operate more efficiently."
      >
        <ul className="mt-[49px] space-y-[14px]">
          {resources.map((item) => (
            <li key={item} className="rounded-[14px] bg-linen px-[21px] py-[18px] text-[18px] text-charcoal">
              {item}
            </li>
          ))}
        </ul>
      </PageShell>
  );
}
