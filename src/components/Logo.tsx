import Link from "next/link";

/**
 * Curaevox mark: a six-point asterisk built from three rounded capsules
 * crossing at 0°/60°/120°, rendered as a single solid fill.
 */
export function LogoMark({ light = false }: { light?: boolean }) {
  const fill = light ? "#eaf3f1" : "var(--color-ink)";
  return (
    <svg width="34" height="34" viewBox="0 0 100 100" fill={fill} aria-hidden="true">
      <rect x="10" y="39" width="80" height="22" rx="11" transform="rotate(0 50 50)" />
      <rect x="10" y="39" width="80" height="22" rx="11" transform="rotate(60 50 50)" />
      <rect x="10" y="39" width="80" height="22" rx="11" transform="rotate(120 50 50)" />
    </svg>
  );
}

export function LogoWordmark({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark light={light} />
      <span
        className={`deck-wordmark text-[23px] leading-none tracking-[-0.01em] ${light ? "text-linen-white" : "text-ink"}`}
      >
        Curaevox
      </span>
    </span>
  );
}

export function LogoLink({ href = "/", light = false }: { href?: string; light?: boolean }) {
  return (
    <Link href={href} aria-label="Curaevox home">
      <LogoWordmark light={light} />
    </Link>
  );
}
