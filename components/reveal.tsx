"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

export default function Reveal({ children, className, delay = 0, direction = "up" }: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "left" | "right" | "up";
}) {
  const movement = direction === "up"
    ? { y: [24, 0] }
    : { x: [direction === "left" ? -24 : 24, 0] };

  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={{ opacity: [0, 1], ...movement }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
