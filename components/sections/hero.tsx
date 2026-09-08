"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { buttonVariants } from "@/components/ui/button";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[calc(100svh-7rem)] w-full flex-col justify-center py-24"
    >
      <div
        aria-hidden="true"
        className="hero-glow pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_65%_65%_at_75%_40%,color-mix(in_srgb,var(--primary)_12%,transparent)_0%,color-mix(in_srgb,var(--primary)_4%,transparent)_40%,transparent_75%)]"
      />

      <motion.div
        className="mx-auto w-full max-w-5xl px-6 sm:px-10"
        initial={false}
        animate={reduceMotion ? { opacity: 1, y: 0 } : { opacity: [0, 1], y: [16, 0] }}
        transition={{ duration: reduceMotion ? 0 : 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.p initial={false} animate={reduceMotion ? {} : { opacity: [0, 1], y: [12, 0] }} transition={{ duration: 0.9 }} className="text-base font-medium text-primary sm:text-lg">
          Hi, I’m Abdallah.
        </motion.p>
        <h1
          id="hero-heading"
          className="mt-5 text-5xl font-semibold leading-[1.08] tracking-tight sm:text-7xl lg:text-8xl"
        >
          Software<br />Engineer<span className="text-primary">.</span>
        </h1>
        <motion.p initial={false} animate={reduceMotion ? {} : { opacity: [0, 1], y: [16, 0] }} transition={{ duration: 1, delay: 0.2 }} className="mt-7 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
          I’m interested in software development. This is where I share my
          projects and what I’m learning.
        </motion.p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#projects"
            className={buttonVariants({ className: "min-h-12 gap-3 px-5 duration-300 motion-safe:hover:-translate-y-1 motion-reduce:transition-none" })}
          >
            View projects <ArrowDown aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className={buttonVariants({
              variant: "outline",
              className: "min-h-12 gap-3 px-5 duration-300 motion-safe:hover:-translate-y-1 motion-reduce:transition-none",
            })}
          >
            Contact me <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

