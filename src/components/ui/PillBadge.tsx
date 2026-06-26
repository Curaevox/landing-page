import { ReactNode } from "react";

export function PillBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-[999px] border border-ink/15 bg-deck-blue px-[14px] py-[7px] text-[12px] font-medium leading-[1.5] tracking-[-0.01em] text-ink">
      <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
      {children}
    </span>
  );
}
