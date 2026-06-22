import { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = { title: "States | Curaevox" };

const states = ["California", "Texas", "Florida", "New York", "Pennsylvania", "Ohio"];

export default function StatesPage() {
  return (
    <PageShell
        eyebrow="States"
        title="State-specific patient access requirements"
        description="Explore how Curaevox supports licensure, scope, and parity requirements by state."
      >
        <div className="mt-[49px] flex flex-wrap gap-2">
          {states.map((state) => (
            <span key={state} className="rounded-[999px] bg-mist-blue px-[14px] py-[7px] text-[14px] text-forest-ink">
              {state}
            </span>
          ))}
        </div>
      </PageShell>
  );
}
