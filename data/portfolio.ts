export const contactLinks: { label: string; kind: "email" | "github" | "linkedin"; href: string | null }[] = [
  { label: "Email", kind: "email", href: "mailto:abdallah.july05@gmail.com" },
  { label: "GitHub", kind: "github", href: "https://github.com/julyperfect07" },
  { label: "LinkedIn", kind: "linkedin", href: "https://www.linkedin.com/in/abdallah-yousef-3143b2288/" },
];

export const about = {
  heading: "A little about me.",
  paragraphs: [
    "I’m Abdallah, a software engineering student. I enjoy building full-stack web applications and working on both the interface and the backend.",
    "I work with several languages and frameworks, and I’m interested in understanding how the different parts of a web application fit together.",
  ],
};

export const technologyGroups = [
  { title: "Languages", items: ["JavaScript", "TypeScript", "Java", "C#", "PHP"] },
  { title: "Frontend", items: ["React", "Next.js"] },
  { title: "Backend", items: ["NestJS", "Express", "Spring Boot", "ASP.NET"] },
  { title: "Real-time", items: ["WebSockets", "WebRTC"] },
] as const;

export const projects = [
  {
    id: "01",
    title: "GoFile Share",
    description:
      "A peer-to-peer file-sharing web app inspired by PairDrop. It uses WebRTC and PeerJS to transfer files directly between devices, with WebSockets and NestJS handling signaling.",
    images: [
      { src: "/projects/gofile-share.jpg", alt: "GoFile Share device discovery screen" },
    ],
    technologies: ["Next.js", "NestJS", "WebRTC", "PeerJS", "WebSockets", "shadcn/ui", "Motion"],
    category: "REAL-TIME WEB APP",
    liveUrl: "https://file-share-app-tau.vercel.app/",
    sourceUrl: null,
    placeholder: false,
  },
  {
    id: "02",
    title: "Salis",
    description:
      "A delivery management platform connecting shop owners, delivery companies, drivers, and administrators. It manages orders from assignment and secure pickup through delivery, payment collection, and financial tracking.",
    images: [
      { src: "/projects/salis-landing.png", alt: "Salis Arabic landing page" },
      { src: "/projects/salis-dashboard.png", alt: "Salis Arabic administration dashboard" },
    ],
    technologies: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "TanStack Query", "Leaflet", "shadcn/ui"],
    category: "DELIVERY MANAGEMENT PLATFORM",
    liveUrl: null,
    sourceUrl: "https://github.com/julyperfect07/Salis",
    placeholder: false,
  },
  {
    id: "03",
    title: "Project three",
    description: "Project description, my contribution, and technologies will go here.",
    images: [],
    technologies: [],
    category: "PLACEHOLDER",
    liveUrl: null,
    sourceUrl: null,
    placeholder: true,
  },
] as const;
