"use client";
import { useReducedMotion } from "framer-motion";
import { useMotionPref } from "./MotionProvider";

// True when animations should run: the visitor has not asked for reduced motion
// and has not switched motion off in the header.
export function useLiveMotion() {
  const reduce = useReducedMotion();
  const { motionOn } = useMotionPref();
  return motionOn && !reduce;
}
