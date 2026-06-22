"use client";

import { ScrollReveal } from "./animations/ScrollReveal";

const stats = [
  {
    value: "~1 in 3",
    label: "inbound patient calls to clinics go unanswered",
  },
  {
    value: "23–33%",
    label: "average outpatient no-show rate",
  },
  {
    value: "~26 days",
    label: "average wait for a new-patient appointment",
  },
  {
    value: "1 in 3",
    label: "discharged patients leave with no follow-up booked",
  },
];

export function Investors() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 pb-[80px] lg:px-8">
      <ScrollReveal className="rounded-[16px] bg-halo p-[35px] lg:p-[49px]">
        <span className="inline-flex items-center rounded-[999px] bg-halo px-3 py-1.5 text-[12px] font-medium text-teal">
          The problem, in numbers
        </span>
        <div className="mt-8 grid grid-cols-2 gap-y-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.value}
              className={i % 4 === 0 ? "" : "lg:border-l lg:border-line lg:pl-8"}
            >
              <p className="font-display text-[40px] font-semibold leading-none tracking-[-0.02em] text-ink sm:text-[48px]">
                {stat.value}
              </p>
              <p className="mt-2 text-[14px] leading-snug text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-[12px] text-muted-soft">
          Sources: AMN/Merritt Hawkins 2022; J Gen Intern Med 2021; industry aggregates.
        </p>
      </ScrollReveal>
    </section>
  );
}
