"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, m, useMotionValue, useSpring, useTransform } from "framer-motion";
import TechLogo from "./TechLogo";
import { dailyStack } from "@/lib/content";
import { EMAIL, GITHUB, LINKEDIN, RESUME } from "@/lib/site";
import { useLiveMotion } from "./useLiveMotion";

const ease = [0.22, 1, 0.36, 1] as const;
const container = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } };
// Text moves but never fades, so it is visible on the very first paint.
const item = { hidden: { y: 18 }, show: { y: 0, transition: { duration: 0.7, ease } } };

const words = ["web apps", "voice software", "maintenance tools", "LLM assistants"];

export default function Hero() {
  const live = useLiveMotion();
  const [w, setW] = useState(0);

  useEffect(() => {
    if (!live) return;
    const id = setInterval(() => setW((i) => (i + 1) % words.length), 2400);
    return () => clearInterval(id);
  }, [live]);

  // Pointer parallax for the photo and floating cards.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 80, damping: 18 });
  const sy = useSpring(py, { stiffness: 80, damping: 18 });
  const photoX = useTransform(sx, (v) => v * -10);
  const photoY = useTransform(sy, (v) => v * -10);

  function onMove(e: React.PointerEvent<HTMLElement>) {
    if (!live || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  }

  return (
    <section className="hero wrap grid-bg" aria-labelledby="hero-title" onPointerMove={onMove} onPointerLeave={() => { px.set(0); py.set(0); }}>
      <m.div className="hero-text" variants={container} initial="hidden" animate="show">
        <m.p className="eyebrow" variants={item}>
          <span className="dot" aria-hidden="true" />Open to full time roles · Smyrna, Georgia · Happy to relocate
        </m.p>
        <m.h1 id="hero-title" className="hero-title" variants={item}>Akash Kulkarni</m.h1>
        <m.p className="hero-tagline" variants={item}>
          I design and build products that <span className="accent">deliver real impact.</span>
        </m.p>
        <m.p className="hero-lede" variants={item}>
          <span className="lede-line">
            Full stack engineer building{" "}
            <span className="sr-only">web apps, voice software, maintenance tools and LLM assistants.</span>
            <span className="rotator" aria-hidden="true">
              <AnimatePresence mode="wait" initial={false}>
                <m.span key={words[w]} className="rotator-word"
                  initial={{ y: "0.9em", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-0.9em", opacity: 0 }}
                  transition={{ duration: 0.35, ease }}>
                  {words[w]}
                </m.span>
              </AnimatePresence>
            </span>
          </span>
          I shipped voice software that runs in <strong>5 million cars</strong>, led delivery for Toyota, Subaru and PSA Group, and today I build the tools that keep VR flight simulators running at Pulseworks LLC.
        </m.p>
        <m.div className="hero-cta" variants={item}>
          <m.a className="btn" href="#projects" whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>See my projects <span aria-hidden="true">↓</span></m.a>
          <m.a className="btn btn-ghost" href={RESUME} target="_blank" rel="noopener noreferrer" whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
            View resume <span aria-hidden="true">↗</span><span className="sr-only"> (PDF, opens in a new tab)</span>
          </m.a>
        </m.div>
        <m.ul className="hero-links" aria-label="Profiles" variants={item}>
          <li><a href={GITHUB} target="_blank" rel="noopener noreferrer me">GitHub<span className="sr-only"> (opens in a new tab)</span></a></li>
          <li><a href={LINKEDIN} target="_blank" rel="noopener noreferrer me">LinkedIn<span className="sr-only"> (opens in a new tab)</span></a></li>
          <li><a href={`mailto:${EMAIL}`}>Email</a></li>
        </m.ul>
        <m.div className="stack" variants={item}>
          <p className="stack-label">Daily stack</p>
          <ul className="stack-list">
            {dailyStack.map((t, i) => (
              <m.li key={t.name} title={t.name}
                initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.05, duration: 0.4, ease }}
                whileHover={{ y: -4, scale: 1.08 }}>
                <TechLogo tech={t} />
                <span className="sr-only">{t.name}</span>
              </m.li>
            ))}
          </ul>
        </m.div>
      </m.div>

      <div className="hero-visual">
        <m.figure className="hud" style={{ x: photoX, y: photoY }}
          initial={{ y: 24 }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.1, ease }}>
          <Image src="/img/akash-portrait.jpg" width={600} height={800} priority
            sizes="(min-width: 881px) 340px, (min-width: 561px) 300px, 70vw"
            alt="Akash Kulkarni smiling outdoors in a navy suit and red tie" />
          <span className="hud-corner tl" aria-hidden="true" /><span className="hud-corner tr" aria-hidden="true" />
          <span className="hud-corner bl" aria-hidden="true" /><span className="hud-corner br" aria-hidden="true" />
          <figcaption className="hud-tag hud-bottom">
            <span className="now-label">Currently</span> Simulator and VR Engineer · Pulseworks LLC
          </figcaption>
        </m.figure>

      </div>
    </section>
  );
}
