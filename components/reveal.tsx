"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

export default function Reveal({ children, className, delay = 0, direction = "left" }: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "left" | "right";
}) {
  const prefersReducedMotion = useReducedMotion();
  const offset = direction === "left" ? -32 : 32;

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0, x: offset }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{
        once: true,
        amount: 0.15,
        // Wait until content crosses well into the viewport. A low amount keeps
        // tall mobile cards reachable while the negative margin prevents an
        // early reveal when only the edge of a section is visible.
        margin: "0px 0px -35% 0px",
      }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.9,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
