type Kind = "cmms" | "web" | "transit" | "squad" | "vr" | "sync";

export default function ProjectArt({ kind }: { kind: Kind }) {
  return (
    <div className="project-art" aria-hidden="true">
      <svg viewBox="0 0 400 260" role="presentation">
        <rect x="20" y="20" width="360" height="220" rx="10" className="a-surface" />
        {kind === "cmms" && (
          <>
            <rect x="20" y="20" width="360" height="34" rx="10" className="a-fill" />
            <rect x="20" y="44" width="360" height="10" className="a-fill" />
            <circle cx="40" cy="37" r="5" className="a-accent" />
            <rect x="56" y="33" width="90" height="8" rx="4" className="a-muted" />
            <rect x="40" y="72" width="200" height="150" rx="6" className="a-line" />
            <path d="M40 102h200M40 132h200M40 162h200M40 192h200M80 72v150M120 72v150M160 72v150M200 72v150" className="a-grid" />
            <rect x="84" y="106" width="72" height="22" rx="4" className="a-accent" />
            <rect x="124" y="136" width="72" height="22" rx="4" className="a-ink" />
            <rect x="44" y="166" width="72" height="22" rx="4" className="a-muted" />
            <rect x="164" y="196" width="72" height="22" rx="4" className="a-accent" />
            <rect x="256" y="72" width="104" height="44" rx="6" className="a-line" />
            <rect x="266" y="82" width="40" height="7" rx="3" className="a-muted" />
            <text x="266" y="108" className="a-num">700+</text>
            <rect x="256" y="126" width="104" height="96" rx="6" className="a-line" />
            {[[140, 62, "a-accent"], [160, 44, "a-ink"], [180, 70, "a-accent"], [200, 30, "a-ink"]].map(([y, w, c]) => (
              <g key={y as number}>
                <rect x="268" y={y as number} width="80" height="8" rx="4" className="a-muted" />
                <rect x="268" y={y as number} width={w as number} height="8" rx="4" className={c as string} />
              </g>
            ))}
          </>
        )}
        {kind === "web" && (
          <>
            <rect x="20" y="20" width="360" height="28" rx="10" className="a-fill" />
            <rect x="20" y="38" width="360" height="10" className="a-fill" />
            <circle cx="38" cy="34" r="4" className="a-muted" /><circle cx="52" cy="34" r="4" className="a-muted" /><circle cx="66" cy="34" r="4" className="a-muted" />
            <rect x="90" y="29" width="200" height="10" rx="5" className="a-line" />
            <rect x="40" y="66" width="170" height="16" rx="4" className="a-ink" />
            <rect x="40" y="90" width="130" height="16" rx="4" className="a-ink" />
            <rect x="40" y="118" width="150" height="7" rx="3" className="a-muted" />
            <rect x="40" y="132" width="120" height="7" rx="3" className="a-muted" />
            <rect x="40" y="152" width="70" height="22" rx="11" className="a-accent" />
            <rect x="226" y="62" width="134" height="112" rx="8" className="a-fill" />
            <path d="M240 160 L270 120 L292 140 L320 96 L346 160Z" className="a-muted" />
            {[70, 140, 210, 280].map((x) => (
              <g key={x}>
                <circle cx={x} cy="208" r="17" className="a-ring" />
                <text x={x} y="213" className="a-score">100</text>
              </g>
            ))}
          </>
        )}
        {kind === "transit" && (
          <>
            <path d="M40 70 C120 70 140 130 200 130 S300 70 360 70" className="a-route a-r1" />
            <path d="M40 130 L360 130" className="a-route a-r2" />
            <path d="M40 190 C120 190 140 130 200 130 S300 190 360 190" className="a-route a-r3" />
            {[70, 130, 190].map((y) => (<g key={y}><circle cx="40" cy={y} r="7" className="a-stop" /><circle cx="360" cy={y} r="7" className="a-stop" /></g>))}
            <circle cx="200" cy="130" r="12" className="a-hub" />
            <rect x="226" y="196" width="134" height="30" rx="6" className="a-fill" />
            <rect x="236" y="207" width="70" height="8" rx="4" className="a-muted" />
            <text x="314" y="216" className="a-time">8:42</text>
          </>
        )}
        {kind === "squad" && (
          <>
            <path d="M20 90h360M20 160h360M110 20v220M220 20v220M300 20v220" className="a-grid" />
            <path d="M60 210 Q150 120 250 150 T350 60" className="a-road" />
            <g className="a-pin"><path d="M150 108c0-14 22-14 22 0 0 10-11 22-11 22s-11-12-11-22z" /></g>
            <g className="a-pin"><path d="M240 140c0-14 22-14 22 0 0 10-11 22-11 22s-11-12-11-22z" /></g>
            <g className="a-pin a-pin-hot"><path d="M300 46c0-14 22-14 22 0 0 10-11 22-11 22s-11-12-11-22z" /></g>
            <rect x="40" y="36" width="120" height="30" rx="15" className="a-fill" />
            <rect x="54" y="47" width="70" height="8" rx="4" className="a-muted" />
            <rect x="226" y="190" width="120" height="30" rx="15" className="a-accent-soft" />
            <rect x="240" y="201" width="80" height="8" rx="4" className="a-ink" />
          </>
        )}
        {kind === "vr" && (
          <>
            <rect x="20" y="20" width="360" height="220" rx="10" className="a-space" />
            {[[60,50],[330,70],[300,210],[90,200],[200,40],[350,150],[40,120]].map(([x,y]) => <circle key={`${x}${y}`} cx={x} cy={y} r="1.6" className="a-star" />)}
            <circle cx="200" cy="130" r="78" className="a-globe" />
            <ellipse cx="200" cy="130" rx="78" ry="26" className="a-meridian" />
            <ellipse cx="200" cy="130" rx="78" ry="56" className="a-meridian" />
            <ellipse cx="200" cy="130" rx="30" ry="78" className="a-meridian" />
            <ellipse cx="200" cy="130" rx="58" ry="78" className="a-meridian" />
            <circle cx="232" cy="104" r="6" className="a-accent" />
            <circle cx="232" cy="104" r="12" className="a-gaze" />
            <circle cx="170" cy="150" r="4" className="a-pin-dot" />
            <path d="M200 116v8M200 136v8M186 130h8M206 130h8" className="a-cross" />
            <rect x="268" y="44" width="92" height="46" rx="6" className="a-panel" />
            <rect x="278" y="54" width="54" height="6" rx="3" className="a-accent" />
            <rect x="278" y="68" width="70" height="5" rx="2.5" className="a-panel-line" />
            <rect x="278" y="78" width="46" height="5" rx="2.5" className="a-panel-line" />
            <text x="36" y="58" className="a-hud">SCORE 300</text>
          </>
        )}
        {kind === "sync" && (
          <>
            <rect x="40" y="50" width="130" height="160" rx="10" className="a-fill" />
            <rect x="40" y="50" width="130" height="30" rx="10" className="a-accent" />
            <rect x="40" y="70" width="130" height="10" className="a-accent" />
            {[0,1,2,3].map((r) => <rect key={r} x="56" y={96 + r * 26} width={90 - r * 12} height="10" rx="5" className="a-muted" />)}
            <path d="M184 112h40M216 104l8 8-8 8" className="a-arrow" />
            <path d="M224 150h-40M192 142l-8 8 8 8" className="a-arrow" />
            <rect x="238" y="50" width="130" height="160" rx="10" className="a-fill" />
            <rect x="238" y="50" width="130" height="30" rx="10" className="a-ink" />
            <rect x="238" y="70" width="130" height="10" className="a-ink" />
            <path d="M238 112h130M238 144h130M238 176h130M270 80v130M302 80v130M334 80v130" className="a-grid" />
            <rect x="274" y="116" width="24" height="24" rx="4" className="a-accent" />
            <rect x="306" y="148" width="24" height="24" rx="4" className="a-accent" />
            <rect x="242" y="180" width="24" height="24" rx="4" className="a-accent-soft" />
          </>
        )}
      </svg>
    </div>
  );
}
