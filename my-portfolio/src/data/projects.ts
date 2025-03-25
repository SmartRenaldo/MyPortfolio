import { Project } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    link: "https://example.com/ecommerce",
    github: "https://github.com/username/ecommerce",
    image: "/images/project1.jpg",
    videoUrl: "https://www.youtube.com/watch?v=your-video-id-1",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Collaborative task management tool with real-time updates, kanban boards, and team features.",
    technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    link: "https://example.com/taskapp",
    github: "https://github.com/username/taskapp",
    image: "/images/project2.jpg",
    videoUrl: "https://www.youtube.com/watch?v=your-video-id-2",
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
