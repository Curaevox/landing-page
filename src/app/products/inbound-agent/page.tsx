import { Metadata } from "next";
import { ProductPageShell } from "@/components/PageShell";

export const metadata: Metadata = { title: "Inbound Agent | Curaevox" };

const sections = [
  {
    id: "triage",
    title: "Answer & triage calls",
    body: "The agent picks up on the first ring, 24/7. It converses naturally, understands why the patient is calling, and gathers the information your front desk would — without hold music or voicemail.",
  },
  {
    id: "matching",
    title: "Doctor matching",
    body: "Using your roster of specialties, languages, and locations, the agent recommends the right doctor for the patient's need and explains the options clearly — bringing transparency to a step that's usually opaque.",
  },
  {
    id: "booking",
    title: "Automated booking",
    body: "The agent checks live availability and books the appointment directly, sending confirmations and reminders. Every booking surfaces instantly on the doctor's dashboard.",
  },
  {
    id: "eligibility",
    title: "Insurance & eligibility",
    body: "It captures and verifies coverage up front, asking every caller the same questions so nothing is missed and no one is gatekept.",
  },
];

export default function InboundAgentPage() {
  return (
    <ProductPageShell
      product="Inbound Agent"
      title="Every patient call, answered and booked"
      description="A voice agent that answers, triages, matches the right doctor, and books the visit — on the first call."
      sections={sections}
    />
  );
}
