"use client";
import { m } from "framer-motion";
import TechLogo from "./TechLogo";
import type { smallBuilds } from "@/lib/content";
import { useLiveMotion } from "./useLiveMotion";

type Build = (typeof smallBuilds)[number];

export default function SmallBuild({ build }: { build: Build }) {
  const live = useLiveMotion();
  return (
    <m.article className="sb-card" initial={{ y: 24 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
      <div className="sb-info">
        <p className="sb-repo">
          <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" focusable="false"><path d="M2 2.5A1.5 1.5 0 0 1 3.5 1h8A1.5 1.5 0 0 1 13 2.5v10a.5.5 0 0 1-.5.5H4a1 1 0 0 0 0 2h8.5a.5.5 0 0 1 0 1H4a2 2 0 0 1-2-2v-11Zm2 9.5h8V2.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9.6c.3-.07.65-.1 1-.1Z" fill="currentColor" /></svg>
          github / {build.repo}
        </p>
        <h3 className="sb-title">{build.title}</h3>
        <p className="sb-body">{build.body}</p>
        <ul className="sb-stack" aria-label="Built with">
          {build.stack.map((t) => <li key={t.name}><TechLogo tech={t} size={16} />{t.name}</li>)}
        </ul>
      </div>
      <div className="sb-demo" aria-hidden="true">
        <div className="sb-bar"><span /><span /><span /><p>todo.tsx</p></div>
        <div className="sb-input"><span>What needs doing?</span><b>Add</b></div>
        <ul>
          {build.tasks.map((t, i) => (
            <li key={t}>
              <m.span className="sb-check" initial={live ? { scale: 0.6, backgroundColor: "rgba(0,0,0,0)" } : false}
                whileInView={{ scale: 1, backgroundColor: i < 2 ? "#ff8a4c" : "rgba(0,0,0,0)" }} viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.45, type: "spring", stiffness: 400, damping: 18 }}>
                {i < 2 && <svg viewBox="0 0 12 12" width="10" height="10"><path d="M2.5 6.2 5 8.5l4.5-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>}
              </m.span>
              <m.span className="sb-task" initial={live ? { opacity: 1 } : false}
                whileInView={i < 2 ? { opacity: 0.5 } : { opacity: 1 }} viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.45 }} data-done={i < 2 || undefined}>{t}</m.span>
              <span className="sb-del">×</span>
            </li>
          ))}
        </ul>
        <p className="sb-foot"><span>2 of 3 done</span><span>React · TS</span></p>
      </div>
    </m.article>
  );
}
