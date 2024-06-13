import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Example",
    href: "/projects",
    tags: ["Nextjs", "Tailwindcss", "Haskell", "Vercel"],
    image: {
      LIGHT: "/images/projects/example.webp",
      DARK: "/images/projects/example.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Example",
    favicon: "/images/projects/logos/example.ico",
    imageUrl: [
      "/images/projects/example.webp",
      "/images/projects/example.webp",
    ],
    description:
      "This is an example project. And this a description of the example project.",
    sourceCodeHref: "https://github.com/pedrofp4444",
    liveWebsiteHref: "https://github.com/pedrofp4444", // Optional
  },
];
