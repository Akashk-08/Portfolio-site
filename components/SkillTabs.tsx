"use client";
import { useRef, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import TechLogo from "./TechLogo";
import { skillGroups } from "@/lib/content";

const files = ["languages.ts", "web.tsx", "cloud.yml", "testing.sh"];

export default function SkillTabs() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKey(e: React.KeyboardEvent, i: number) {
    let next = i;
    if (e.key === "ArrowRight") next = (i + 1) % files.length;
    else if (e.key === "ArrowLeft") next = (i - 1 + files.length) % files.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = files.length - 1;
    else return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }

  const group = skillGroups[active];

  return (
    <div className="editor">
      <div className="editor-tabs" role="tablist" aria-label="Skill groups">
        {skillGroups.map((g, i) => (
          <button key={g.title} ref={(el) => { tabs.current[i] = el; }} role="tab" type="button"
            id={`tab-${i}`} aria-selected={active === i} aria-controls={`panel-${i}`} tabIndex={active === i ? 0 : -1}
            className="editor-tab" onClick={() => setActive(i)} onKeyDown={(e) => onKey(e, i)}>
            <span className="file-name">{files[i]}</span>
            <span className="tab-title">{g.title}</span>
            {active === i && <m.span layoutId="tab-underline" className="tab-underline" transition={{ type: "spring", stiffness: 420, damping: 34 }} />}
          </button>
        ))}
      </div>
      <div className="editor-body" role="tabpanel" id={`panel-${active}`} aria-labelledby={`tab-${active}`} tabIndex={0}>
        <div className="gutter" aria-hidden="true">
          {group.items.map((_, i) => <span key={i}>{i + 1}</span>)}
        </div>
        <AnimatePresence mode="wait">
          <m.ul key={group.title} className="skill-grid"
            initial="hidden" animate="show" exit="hidden"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.035 } } }}>
            {group.items.map((t) => (
              <m.li key={t.name} className="skill-tile"
                variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                whileHover={{ y: -4 }}>
                <TechLogo tech={t} size={20} />
                <span>{t.name}</span>
              </m.li>
            ))}
          </m.ul>
        </AnimatePresence>
      </div>
      <p className="sr-only">
        All skills: {skillGroups.map((g) => `${g.title}: ${g.items.map((t) => t.name).join(", ")}.`).join(" ")}
      </p>
    </div>
  );
}
