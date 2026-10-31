"use client";
import { m, type HTMLMotionProps } from "framer-motion";

type Props = HTMLMotionProps<"div"> & { delay?: number; as?: "div" | "li" | "article" | "figure" };

// Fades and lifts content in once as it scrolls into view.
// MotionConfig reducedMotion="user" in the layout turns the movement off for people who ask for less motion.
export default function Reveal({ delay = 0, as = "div", children, ...rest }: Props) {
  const Tag = m[as] as typeof m.div;
  return (
    <Tag
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
