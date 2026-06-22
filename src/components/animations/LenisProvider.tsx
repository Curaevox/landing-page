"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Momentum smooth-scrolling that matches the live easehealth.com feel
 * (the production site runs Lenis — `html.lenis`). Without this, the page
 * uses raw browser wheel scrolling, which is the "scroll feels off" problem.
 *
 * Lenis is driven by GSAP's ticker and pushes updates to ScrollTrigger so the
 * pinned/scrubbed sections (ProblemSolution, ProductSections) stay perfectly
 * in sync with the smoothed scroll position.
 */
export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Respect users who ask for reduced motion — no virtualized scroll for them.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.15,
      // easeOutExpo — long, weighted glide that settles softly.
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    // Keep ScrollTrigger's measurements aligned with the smoothed position.
    lenis.on("scroll", ScrollTrigger.update);

    const update = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    // Smooth in-page anchor navigation through Lenis as well.
    const onAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('a[href^="#"]');
      if (!target) return;
      const id = target.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: -80 });
    };
    document.addEventListener("click", onAnchorClick);

    return () => {
      document.removeEventListener("click", onAnchorClick);
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return children;
}
