import { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = { title: "Blog | Curaevox" };

const posts = [
  { title: "How AI is changing patient access documentation", date: "March 2026" },
  { title: "Reducing revenue leakage in outpatient programs", date: "February 2026" },
  { title: "Building an admissions workflow that converts", date: "January 2026" },
];

export default function BlogPage() {
  return (
    <PageShell
        eyebrow="Blog"
        title="Practice insights & guides"
        description="Thought leadership and practical guides for patient access operators."
      >
        <div className="mt-[49px] space-y-[21px]">
          {posts.map((post) => (
            <article key={post.title} className="rounded-[14px] border border-hairline-gray p-[28px]">
              <p className="text-[12px] tracking-[-0.36px] text-graphite">{post.date}</p>
              <h2 className="mt-2 font-serif text-[23px] font-light text-forest-ink">{post.title}</h2>
            </article>
          ))}
        </div>
      </PageShell>
  );
}
