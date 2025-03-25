export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  image: string;
  videoUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string[];
  projects?: {
    image: string;
    alt: string;
    url: string;
  }[];
}

export interface Skill {
  name: string;
  category:
    | "frontend"
    | "backend"
    | "database"
    | "devops"
    | "testing"
    | "methodology"
    | "other";
  level: number; // 1-5
}
export interface Education {
  id: number;
  school: string;
  degree: string;
  major: string;
  gpa: string;
  location: string;
  startDate: string;
  endDate: string;
  logo?: string;
}

export interface Certificate {
  id: number;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  logo?: string;
}
