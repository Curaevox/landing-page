import { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = { title: "Guides | Curaevox" };

export default function GuidesPage() {
  return (
    <PageShell
        eyebrow="Guides"
        title="Operational guides for patient access"
        description="Step-by-step guides for intake, documentation, billing, and compliance."
      />
  );
}
