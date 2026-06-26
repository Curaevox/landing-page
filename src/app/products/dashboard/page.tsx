import { Metadata } from "next";
import { ProductPageShell } from "@/components/PageShell";

export const metadata: Metadata = { title: "Doctor Dashboard | Curaevox" };

const sections = [
  {
    id: "companion",
    title: "Per-patient AI companion",
    body: "Every patient gets a dedicated agent, a companion the doctor owns. All of a patient's calls, bookings, and follow-ups live together in one timeline.",
  },
  {
    id: "configure",
    title: "Configure agent actions",
    body: "Doctors decide exactly what each agent can do: which questions to ask, when to escalate, what it can book. The agent only acts within the guardrails you set.",
  },
  {
    id: "monitor",
    title: "Monitor & annotate",
    body: "Listen to live or past conversations, attach notes, and save the moments that matter. Nothing the agent does is a black box.",
  },
  {
    id: "summaries",
    title: "Summaries & notes",
    body: "Get an AI summary of every conversation tied to the patient, so you walk into each visit already caught up.",
  },
];

export default function DashboardPage() {
  return (
    <ProductPageShell
      product="Doctor Dashboard"
      title="Every patient's agent, in one place"
      description="Configure, monitor, annotate, and summarize every agent conversation. A companion for every patient, owned by the doctor."
      sections={sections}
    />
  );
}
