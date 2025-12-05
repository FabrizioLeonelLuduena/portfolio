export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "tools" | "other";
  icon?: any;
  color?: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon?: any;
}
