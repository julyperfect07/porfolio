"use client";

import { ImageIcon, MoveHorizontal } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Reveal from "@/components/reveal";
import { projects } from "@/data/portfolio";

export default function Projects() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-8 border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:px-10 sm:py-24">
        <Reveal>
          <p className="font-mono text-xs tracking-widest text-primary">03 / PROJECTS</p>
          <h2 id="projects-heading" className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Things I’ve built.
          </h2>
          <p className="mt-4 text-muted-foreground">Project details are on the way.</p>
        </Reveal>

        <Reveal className="mt-10">
        <Carousel aria-label="Project showcase" opts={{ align: "start", duration: reduceMotion ? 0 : 40 }}>
          <div className="mb-6 flex items-center justify-between gap-4">
            <p className="flex items-center gap-2 text-sm text-muted-foreground"><MoveHorizontal aria-hidden="true" className="size-4" /> Swipe or use the arrows</p>
            <div className="flex gap-2">
              <CarouselPrevious className="static size-11" />
              <CarouselNext className="static size-11" />
            </div>
          </div>
          <CarouselContent className="-ml-6">
          {projects.map((project, index) => (
            <CarouselItem key={project.id} aria-label={`${index + 1} of ${projects.length}: ${project.title}`} className="basis-[90%] pl-6 md:basis-[70%] lg:basis-[60%]">
              <article className="group h-full overflow-hidden rounded-xl border border-border bg-card transition-[border-color,box-shadow] duration-500 hover:border-primary/40 hover:shadow-xl motion-reduce:transition-none">
                <div className="border-b border-border bg-background p-5 sm:p-8">
                <div className="overflow-hidden rounded-lg border border-border bg-card shadow-xl">
                  <div aria-hidden="true" className="flex h-8 items-center gap-1.5 border-b border-border px-3">
                    <span className="size-2 rounded-full bg-muted-foreground/40" /><span className="size-2 rounded-full bg-muted-foreground/30" /><span className="size-2 rounded-full bg-muted-foreground/20" />
                    <span className="ml-auto font-mono text-[10px] text-muted-foreground">PREVIEW / {project.id}</span>
                  </div>
                <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-background">
                  <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--accent),transparent_75%)] opacity-60 transition-opacity duration-700 group-hover:opacity-100 motion-reduce:transition-none" />
                  <div className="relative flex flex-col items-center gap-3 text-muted-foreground">
                    <ImageIcon aria-hidden="true" className="size-7 stroke-1" />
                    <span className="text-sm">Screenshot coming soon</span>
                  </div>
                </div>
                </div>
                </div>
                <div className="p-6 sm:p-7">
                  <p className="mb-3 font-mono text-xs tracking-wide text-primary">PLACEHOLDER</p>
                  <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{project.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">{project.description}</p>
                </div>
              </article>
            </CarouselItem>
          ))}
          </CarouselContent>
        </Carousel>
        </Reveal>
      </div>
    </section>
  );
}
