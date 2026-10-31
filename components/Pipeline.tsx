"use client";
import { useRef, useState } from "react";
import { m, useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";
import { steps } from "@/lib/content";

// "How I work" as a CI pipeline. Scrolling through the section moves a packet along
// the pipe and marks each stage as passed. Every stage's text is always on the page.
export default function Pipeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 55%"] });
  const p = useSpring(scrollYProgress, { stiffness: 100, damping: 24 });
  const left = useTransform(p, (v) => `${Math.min(100, Math.max(0, v * 100))}%`);
  const [done, setDone] = useState(-1);
  useMotionValueEvent(scrollYProgress, "change", (v) => setDone(Math.min(steps.length - 1, Math.floor(v * steps.length + 0.15) - 1)));

  return (
    <div className="pipeline" ref={ref}>
      <div className="pipe-head" aria-hidden="true">
        <span className="pipe-file">.github/workflows/how_i_work.yml</span>
        <span className={`pipe-status${done >= steps.length - 1 ? " ok" : ""}`}>
          {done >= steps.length - 1 ? "✓ pipeline passed" : "● running"}
        </span>
      </div>
      <div className="pipe-track" aria-hidden="true">
        <m.div className="pipe-fill" style={{ scaleX: p }} />
        <m.span className="packet" style={{ left }} />
        {steps.map((s, i) => (
          <span key={s.key} className={`pipe-node${i <= done ? " passed" : ""}`} style={{ left: `${(i / (steps.length - 1)) * 100}%` }}>
            {i <= done ? "✓" : s.n}
          </span>
        ))}
      </div>
      <ol className="stages">
        {steps.map((s, i) => (
          <m.li key={s.key} className={`stage${i <= done ? " passed" : ""}`}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}>
            <p className="stage-key" aria-hidden="true"><span>{s.n}</span> {s.key}</p>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
            <p className="stage-log" aria-hidden="true">{i <= done ? `✓ ${s.log}` : "○ waiting"}</p>
          </m.li>
        ))}
      </ol>
    </div>
  );
}
