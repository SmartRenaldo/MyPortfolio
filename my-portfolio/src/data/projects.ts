import { Project } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    title: "AU Used Car Valuation",
    description:
      "Get a precise market value estimation for your used car with our intelligent tool, completely free.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Recharts",
      "Lucide React",
    ],
    link: "https://oz-auto-value.vercel.app/",
    github: "https://github.com/SmartRenaldo/oz-auto-value",
    image: "/images/ozautovalue.jpg",
    videoUrl: "",
    featured: true,
  },
  {
    id: 2,
    title: "Snake Battle",
    description:
      "Slither, outsmart mates, feast. Expand or get gulped—strategic strikes rule the outback arena. Snake showdown!",
    technologies: ["React", "TypeScript", "Vite", "Canvas", "Three.js"],
    link: "https://snake-battle-yiqi.vercel.app/",
    github: "https://github.com/SmartRenaldo/snake-battle",
    image: "/images/snake-battle.jpg",
    videoUrl: "",
    featured: true,
  },
  {
    id: 3,
    title: "Food Delivery Solution",
    description:
      "A dual-platform solution: mobile app for convenient food ordering and business system for delivery management.",
    technologies: ["Vue.js", "JAVA", "Spring Boot", "MySQL", "Hibernate"],
    link: "",
    github: "https://github.com/SmartRenaldo/Renaldo-Eats-Practice-Project",
    image: "/images/ManagementSystemLoginPage.png",
    videoUrl: "https://www.youtube.com/watch?v=IL6s1nBY6J0",
    featured: false,
  },
];
