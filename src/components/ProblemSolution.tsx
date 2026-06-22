"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PillBadge } from "./ui/PillBadge";

const LINE_WIDTHS = [0.55, 0.62, 0.69, 0.76, 0.83, 0.9, 0.97, 1, 0.97, 0.9, 0.83, 0.76];

function CurveLines() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lines = svg.querySelectorAll("line");
    const ctx = gsap.context(() => {
      // Each line grows out to the right, staggered top→bottom, then eases
      // back — a continuous forward flow, like the call progressing.
      gsap.set(lines, { attr: { x2: 0 } });
      gsap.to(lines, {
        attr: { x2: (i: number) => 600 * LINE_WIDTHS[i] },
        duration: 1.3,
        ease: "power3.out",
        stagger: { each: 0.07, from: "start" },
        repeat: -1,
        repeatDelay: 1.4,
        yoyo: true,
      });
    }, svg);

    return () => ctx.revert();
  }, []);

  return (
    <svg
      ref={svgRef}
      className="pointer-events-none absolute bottom-0 left-0 h-[120px] w-full max-w-[600px]"
      viewBox="0 0 600 120"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {LINE_WIDTHS.map((width, i) => (
        <line
          key={i}
          x1="0"
          y1={8 + i * 9}
          x2={600 * width}
          y2={8 + i * 9}
          stroke="#06312f"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

export function ProblemSolution() {
  const sectionRef = useRef<HTMLElement>(null);
  const problemRef = useRef<HTMLDivElement>(null);
  const solutionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const problem = problemRef.current;
    const solution = solutionRef.current;
    if (!section || !problem || !solution) return;

    gsap.set(solution, { opacity: 0, y: 40 });

    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=100%",
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });

      tl.to(problem, { opacity: 0, y: -40, duration: 1 }).to(
        solution,
        { opacity: 1, y: 0, duration: 1 },
        0.35,
      );

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    });

    mm.add("(max-width: 767px)", () => {
      gsap.set(solution, { opacity: 1, y: 0 });
      gsap.set(problem, { opacity: 1, y: 0 });
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative">
      <div className="mx-auto max-w-[1200px] px-6 py-[80px] lg:px-8">
        <div className="relative min-h-[420px] lg:min-h-[520px]">
          <div
            ref={problemRef}
            className="absolute inset-0 flex items-center rounded-[14px] bg-linen-white p-[35px] lg:p-[70px]"
          >
            <div>
              <PillBadge>The problem</PillBadge>
              <h3 className="mt-[14px] max-w-3xl font-display text-[28px] font-semibold leading-[1.15] tracking-[-0.02em] text-ink sm:text-[40px]">
                The phone is the front door to your hospital — and it&apos;s too often unanswered, on
                hold, or quietly sending patients to a competitor.
              </h3>
            </div>
          </div>

          <div
            ref={solutionRef}
            className="absolute inset-0 flex items-center rounded-[14px] bg-sage-wash p-[35px] opacity-0 lg:p-[70px] max-md:opacity-100 max-md:static"
          >
            <CurveLines />
            <div className="relative z-10 max-w-3xl">
              <PillBadge>The solution</PillBadge>
              <h3 className="mt-[14px] font-display text-[28px] font-semibold leading-[1.15] tracking-[-0.02em] text-ink sm:text-[40px]">
                Curaevox answers every call, understands what the patient needs, matches the right
                doctor, and books the visit — then follows up after.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
