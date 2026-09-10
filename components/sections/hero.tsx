"use client";

import { ArrowDown, ArrowUpRight, FileText } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { buttonVariants } from "@/components/ui/button";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[calc(100svh-7rem)] w-full flex-col justify-center py-16 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="hero-glow pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_65%_65%_at_75%_40%,color-mix(in_srgb,var(--primary)_12%,transparent)_0%,color-mix(in_srgb,var(--primary)_4%,transparent)_40%,transparent_75%)]"
      />

      <motion.div
        className="responsive-hero mx-auto flex w-full max-w-5xl flex-col px-6 sm:px-10"
        initial={prefersReducedMotion ? false : { opacity: 0, x: -32 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: prefersReducedMotion ? 0 : 0.95,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <p className="text-base font-medium text-primary sm:text-lg">
          Hi, I’m Abdallah.
        </p>
        <h1
          id="hero-heading"
          className="mt-5 text-[clamp(2.75rem,13vw,4.5rem)] font-semibold leading-[1.08] tracking-tight sm:text-7xl lg:text-8xl"
        >
          Software<br />Engineer<span className="text-primary">.</span>
        </h1>
        <p className="mt-7 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
          I’m interested in software development. This is where I share my
          projects and what I’m learning.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3 sm:justify-start">
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
          <button
            type="button"
            disabled
            title="Résumé will be available soon"
            className={buttonVariants({
              variant: "outline",
              className: "min-h-12 cursor-not-allowed gap-3 px-5 opacity-55",
            })}
          >
            Résumé soon <FileText aria-hidden="true" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}

