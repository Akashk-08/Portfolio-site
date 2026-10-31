"use client";
import { m, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useLiveMotion } from "./useLiveMotion";

// A card that tilts toward the mouse in 3D and carries a soft spotlight under the cursor.
export default function TiltCard({ children, className, delay = 0, ...rest }:
  { children: React.ReactNode; className?: string; delay?: number } & React.HTMLAttributes<HTMLElement>) {
  const live = useLiveMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 160, damping: 18 });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 160, damping: 18 });

  function onMove(e: React.PointerEvent<HTMLElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--sx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--sy", `${e.clientY - r.top}px`);
    if (!live || e.pointerType !== "mouse") return;
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  }

  return (
    <m.article
      className={`${className ?? ""} tilt`}
      style={live ? { rotateX: rx, rotateY: ry, transformPerspective: 900 } : undefined}
      onPointerMove={onMove}
      onPointerLeave={() => { x.set(0); y.set(0); }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...(rest as object)}
    >
      <span className="spotlight" aria-hidden="true" />
      {children}
    </m.article>
  );
}
