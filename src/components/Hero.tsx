"use client";

import { useDemo } from "./DemoProvider";

/** Animated voice waveform — a crest travels rightward through the bars. */
function Waveform({ className = "" }: { className?: string }) {
  // [base height, period] — slightly uneven periods keep the wave organic.
  const bars: [number, number][] = [
    [0.5, 1.5], [0.85, 1.72], [0.35, 1.46], [1, 1.8],
    [0.6, 1.56], [0.9, 1.68], [0.45, 1.5], [0.75, 1.62],
  ];
  return (
    <span className={`flex items-center gap-[3px] ${className}`} aria-hidden="true">
      {bars.map(([h, period], i) => (
        <span
          key={i}
          className="wave-bar block w-[3px] rounded-full bg-signal"
          style={{
            height: `${Math.round(h * 22)}px`,
            animationDelay: `${i * 0.13}s`,
            animationDuration: `${period}s`,
          }}
        />
      ))}
    </span>
  );
}

function LiveCallCard() {
  return (
    <div className="rounded-[16px] bg-surface p-[20px] shadow-[0_30px_70px_-40px_rgba(6,49,47,0.55)]">
      {/* call header */}
      <div className="flex items-center justify-between border-b border-line pb-[14px]">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-mist text-[12px] font-semibold text-ink">
            RH
          </span>
          <div>
            <p className="font-display text-[15px] font-semibold leading-tight text-ink">Riverside Health</p>
            <span className="flex items-center gap-1.5 text-[11px] text-muted-soft">
              <span className="relative inline-flex h-2 w-2">
                <span className="signal-ring absolute inline-flex h-2 w-2" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
              </span>
              Live call · 00:42
            </span>
          </div>
        </div>
        <Waveform />
      </div>

      {/* transcript */}
      <div className="space-y-2.5 py-[16px]">
        <div className="ml-auto w-fit max-w-[80%] rounded-[12px] rounded-tr-[4px] bg-halo px-3.5 py-2 text-[12.5px] leading-snug text-ink">
          Hi, I need to see a cardiologist this week.
        </div>
        <div className="w-fit max-w-[88%] rounded-[12px] rounded-tl-[4px] bg-teal px-3.5 py-2 text-[12.5px] leading-snug text-white">
          Dr. Patel has Thursday at 2:30 PM, and takes your plan. Want me to book it?
        </div>
        <div className="ml-auto w-fit max-w-[80%] rounded-[12px] rounded-tr-[4px] bg-halo px-3.5 py-2 text-[12.5px] leading-snug text-ink">
          Yes please.
        </div>
      </div>

      {/* booking confirmation */}
      <div className="flex items-center justify-between rounded-[12px] bg-ink px-3.5 py-3">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal text-[11px] font-semibold text-white">
            AP
          </span>
          <div>
            <p className="text-[13px] font-medium leading-tight text-white">Dr. Anita Patel</p>
            <p className="text-[11px] text-white/55">Cardiology · Thu, 2:30 PM</p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-[999px] bg-signal px-2.5 py-1 text-[11px] font-medium text-white">
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M2.5 6.5L5 9L9.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Booked
        </span>
      </div>
    </div>
  );
}

export function Hero() {
  const { openDemo } = useDemo();

  return (
    <section className="mx-auto max-w-[1200px] px-6 pt-[40px] pb-[24px] lg:px-8 lg:pt-[64px]">
      <div className="grid items-center gap-[40px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-[56px]">
        {/* copy */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-[999px] border border-line bg-surface px-3 py-1.5 text-[12px] font-medium tracking-[-0.01em] text-teal">
            <Waveform className="scale-[0.6]" />
            AI voice agents for patient access
          </span>
          <h1 className="mt-[20px] font-display text-[46px] font-semibold leading-[1.02] tracking-[-0.03em] text-ink sm:text-[58px] lg:text-[72px]">
            Care that always
            <br />
            picks up.
          </h1>
          <p className="mt-[22px] max-w-[520px] text-[18px] leading-[1.5] text-muted">
            The phone is the front door to your hospital — and roughly a third of patient calls go
            unanswered. Curaevox answers every one, books the right doctor automatically, and follows
            up after every visit.
          </p>
          <div className="mt-[28px] flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={openDemo}
              className="inline-flex items-center justify-center gap-2 rounded-[14px] bg-ink px-[22px] py-[15px] text-[15px] font-medium text-white transition-colors hover:bg-teal"
            >
              Book a demo
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={openDemo}
              className="inline-flex items-center justify-center gap-2 rounded-[14px] border border-line bg-surface px-[22px] py-[15px] text-[15px] font-medium text-ink transition-colors hover:border-ink"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-signal text-white">
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden="true">
                  <path d="M2 1.5L7 4.5L2 7.5V1.5Z" fill="currentColor" />
                </svg>
              </span>
              Hear a live call
            </button>
          </div>
          <p className="mt-[20px] text-[13px] text-muted-soft">
            HIPAA-ready · Works with your existing phone number · Live in weeks
          </p>
        </div>

        {/* live-call visual */}
        <div className="relative rounded-[20px] bg-gradient-to-br from-mist to-sky p-[22px] lg:p-[32px]">
          <LiveCallCard />
        </div>
      </div>
    </section>
  );
}
