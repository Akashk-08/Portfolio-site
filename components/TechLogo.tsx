import type { Tech } from "@/lib/content";

function luminance(hex: string) {
  const c = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map((x) => (x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4));
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
}

export default function TechLogo({ tech, size = 20 }: { tech: Tech; size?: number }) {
  if (!tech.icon) {
    return <span className="tech-logo tech-mono" aria-hidden="true">{tech.mono}</span>;
  }
  const hex = luminance(tech.icon.hex) > 0.85 ? "16150F" : tech.icon.hex;
  return (
    <span className="tech-logo" style={{ ["--c" as string]: `#${hex}` }}>
      <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" focusable="false">
        <path d={tech.icon.path} />
      </svg>
    </span>
  );
}
