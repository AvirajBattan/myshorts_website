"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

/** Scroll-into-view reveal: rises + fades once, with optional stagger delay. */
export default function Reveal({
  children, delay = 0, y = 22, className, as = "div",
}: { children: ReactNode; delay?: number; y?: number; className?: string; as?: "div" | "section" | "li" | "article" }) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1], delay }}
    >
      {children}
    </MotionTag>
  );
}
