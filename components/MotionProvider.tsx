"use client";
import { createContext, useContext, useEffect } from "react";
import { LazyMotion, MotionConfig, domMax } from "framer-motion";

type Ctx = { motionOn: boolean };
const MotionPref = createContext<Ctx>({ motionOn: true });
export const useMotionPref = () => useContext(MotionPref);

// LazyMotion loads only the animation features this site uses.
// Motion is always on. Visitors who ask their system for reduced motion still get a calmer page.
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.setAttribute("data-motion", "on");
    try { localStorage.removeItem("motion"); } catch {}
  }, []);

  return (
    <MotionPref.Provider value={{ motionOn: true }}>
      <LazyMotion features={domMax} strict>
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </LazyMotion>
    </MotionPref.Provider>
  );
}
