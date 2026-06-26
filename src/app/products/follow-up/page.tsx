import { Metadata } from "next";
import { ProductPageShell } from "@/components/PageShell";

export const metadata: Metadata = { title: "Outbound Follow-up | Curaevox" };

const sections = [
  {
    id: "calls",
    title: "Post-visit calls",
    body: "After an appointment, the outbound agent calls the patient to check on recovery and answer questions. It's the follow-up that usually never happens because no one has time to make it.",
  },
  {
    id: "reports",
    title: "Follow-up reports",
    body: "Every call becomes a structured report tied to the patient and filed straight to the doctor's dashboard, so clinicians see how patients are doing without chasing them.",
  },
  {
    id: "adherence",
    title: "Care-gap & adherence",
    body: "The agent checks medication adherence and open care gaps, flags anything concerning for clinician review, and routes urgent items to your team.",
  },
  {
    id: "recovery",
    title: "No-show recovery",
    body: "When a patient misses or cancels, the agent reaches back out, understands what happened, and rebooks, turning lost slots into kept appointments.",
  },
];

export default function FollowUpPage() {
  return (
    <ProductPageShell
      product="Outbound Follow-up"
      title="Care that continues after checkout"
      description="A voice agent that follows up after every visit, files structured reports, and recovers no-shows automatically."
      sections={sections}
    />
  );
}
