import type { IconType } from "react-icons";
import { DiJava } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import {
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiReact,
  SiNextdotjs,
  SiNestjs,
  SiExpress,
  SiSpringboot,
  SiDotnet,
  SiWebrtc,
} from "react-icons/si";
import { Cable } from "lucide-react";
import { technologyGroups } from "@/data/portfolio";
import Reveal from "@/components/reveal";

// Logos are provided by React Icons; WebSockets uses a generic connection icon.
const icons: Record<string, IconType> = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Java: DiJava,
  "C#": TbBrandCSharp,
  PHP: SiPhp,
  React: SiReact,
  "Next.js": SiNextdotjs,
  NestJS: SiNestjs,
  Express: SiExpress,
  "Spring Boot": SiSpringboot,
  "ASP.NET": SiDotnet,
  WebRTC: SiWebrtc,
};

const iconColors: Record<string, string> = {
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  Java: "#F89820",
  "C#": "#A179DC",
  PHP: "#777BB4",
  React: "#61DAFB",
  "Next.js": "#FFFFFF",
  NestJS: "#E0234E",
  Express: "#FFFFFF",
  "Spring Boot": "#6DB33F",
  "ASP.NET": "#512BD4",
  WebRTC: "#FFFFFF",
};

export default function Technologies() {
  return (
    <section
      id="technologies"
      aria-labelledby="technologies-heading"
      className="scroll-mt-8 border-t border-border"
    >
      <div className="responsive-copy mx-auto max-w-5xl px-6 py-20 sm:px-10 sm:py-24">
        <Reveal direction="left">
          <p className="font-mono text-xs tracking-widest text-primary">
            02 / TECHNOLOGIES
          </p>
          <h2
            id="technologies-heading"
            className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            What I work with.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Languages, frameworks, and tools I use to build web applications.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          {technologyGroups.map((group, index) => (
            <Reveal
              key={group.title}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 0.1}
            >
              <h3 className="mb-4 text-sm font-medium text-muted-foreground">
                {group.title}
              </h3>
              <ul className="responsive-list flex flex-wrap gap-3">
                {group.items.map((name) => {
                  const Icon = icons[name];
                  return (
                    <li
                      key={name}
                      className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 transition-[transform,background-color,border-color,box-shadow] duration-500 ease-out hover:border-primary/40 hover:bg-accent motion-safe:hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none"
                    >
                      {Icon ? (
                        <Icon
                          aria-hidden="true"
                          className="size-5 shrink-0"
                          style={{ color: iconColors[name] }}
                        />
                      ) : (
                        <Cable
                          aria-hidden="true"
                          className="size-5 shrink-0 text-muted-foreground"
                        />
                      )}
                      <span className="text-sm font-medium">{name}</span>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
