// Add your contact destinations here when ready.
export const contactLinks: { label: string; kind: "email" | "github" | "linkedin"; href: string | null }[] = [
  { label: "Email", kind: "email", href: null },
  { label: "GitHub", kind: "github", href: null },
  { label: "LinkedIn", kind: "linkedin", href: null },
];

export const about = {
  heading: "A little about me.",
  paragraphs: [
    "I’m Abdallah, a graduate and software engineer. I enjoy building full-stack web applications, working on both the interface and the backend.",
    "I work with several languages and frameworks, and I’m interested in how the different parts of a web app fit together. I also use WebSockets and WebRTC for real-time features.",
  ],
};

export const technologyGroups = [
  { title: "Languages", items: ["JavaScript", "TypeScript", "Java", "C#", "PHP"] },
  { title: "Frontend", items: ["React", "Next.js"] },
  { title: "Backend", items: ["NestJS", "Express", "Spring Boot", "ASP.NET"] },
  { title: "Real-time", items: ["WebSockets", "WebRTC"] },
] as const;

export const projects = [
  { id: "01", title: "Project one", description: "Project description, my contribution, and technologies will go here." },
  { id: "02", title: "Project two", description: "Project description, my contribution, and technologies will go here." },
  { id: "03", title: "Project three", description: "Project description, my contribution, and technologies will go here." },
] as const;
