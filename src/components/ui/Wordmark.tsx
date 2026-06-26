import type { CSSProperties } from "react";

/**
 * The bubbly "CURAEVOX" wordmark (Fredoka stands in for the deck's Junegull).
 * Rendered as outlined text (white fill + colored stroke) to match the
 * outlined treatment used across the deck.
 */
export function Wordmark({
  size,
  tracking = -0.04,
  fill = "#ffffff",
  stroke = "#202020",
  strokeWidth = 1.5,
  className = "",
  style,
}: {
  size: number;
  tracking?: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <span
      className={`deck-wordmark ${className}`}
      style={{
        fontSize: size,
        lineHeight: 1,
        letterSpacing: `${tracking}em`,
        color: fill,
        WebkitTextStrokeWidth: strokeWidth,
        WebkitTextStrokeColor: stroke,
        paintOrder: "stroke fill",
        ...style,
      }}
    >
      Curaevox
    </span>
  );
}

/** Small header wordmark that sits centered at the top of most slides. */
export function HeaderWordmark() {
  return (
    <div className="absolute left-1/2 top-[36px] -translate-x-1/2">
      <Wordmark size={26} tracking={-0.02} fill="#ffffff" stroke="#c4d4e6" strokeWidth={1.4} />
    </div>
  );
}
