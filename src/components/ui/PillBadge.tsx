import { ReactNode } from "react";

export function PillBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-[999px] bg-mist-blue px-[14px] py-[7px] text-[12px] font-normal leading-[1.5] tracking-[-0.36px] text-forest-ink">
      {children}
    </span>
  );
}
