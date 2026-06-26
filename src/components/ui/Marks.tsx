/** Six-point Curaevox asterisk (three crossing rounded capsules). */
export function Asterisk({ size = 82, color = "var(--color-deck-blue)" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill={color} aria-hidden="true">
      <rect x="8" y="40" width="84" height="20" rx="10" transform="rotate(0 50 50)" />
      <rect x="8" y="40" width="84" height="20" rx="10" transform="rotate(60 50 50)" />
      <rect x="8" y="40" width="84" height="20" rx="10" transform="rotate(120 50 50)" />
    </svg>
  );
}

// Bar heights (as a fraction of the band) for the hero voice waveform, a
// symmetric crest that's tall through the middle and tapers to dots at the ends.
const WAVE = [
  0.04, 0.04, 0.04, 0.08, 0.06, 0.04, 0.18, 0.12, 0.3, 0.22, 0.16, 0.42, 0.32, 0.26,
  0.62, 0.48, 0.34, 0.78, 0.58, 1, 0.7, 0.5, 0.86, 0.62, 0.4, 0.7, 0.5, 0.3, 0.5, 0.36,
  0.22, 0.4, 0.28, 0.16, 0.26, 0.18, 0.1, 0.16, 0.1, 0.06, 0.08, 0.05, 0.04, 0.04, 0.04,
];

/**
 * The hero waveform: a horizontal row of rounded bars using the site's
 * `.wave-bar` voice motion (each bar offset so the crest travels rightward).
 */
export function Waveform({
  width = 400,
  height = 56,
  color = "#202020",
  animate = true,
}: {
  width?: number;
  height?: number;
  color?: string;
  animate?: boolean;
}) {
  const gap = width / WAVE.length;
  const barW = Math.max(2, gap * 0.36);
  return (
    <div className="flex items-center" style={{ width, height, gap: gap - barW }}>
      {WAVE.map((h, i) => (
        <span
          key={i}
          className={animate ? "wave-bar" : undefined}
          style={{
            width: barW,
            height: Math.max(barW, h * height),
            borderRadius: 999,
            background: color,
            animationDelay: `${(i % 12) * 0.07}s`,
            animationDuration: `${1.4 + (i % 5) * 0.12}s`,
          }}
        />
      ))}
    </div>
  );
}
