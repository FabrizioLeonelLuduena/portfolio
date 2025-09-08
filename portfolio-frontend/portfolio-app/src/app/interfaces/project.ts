export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  repoUrl: string;
  demoUrl: string;
  techStack: string[];
  createdAt: string;
  updatedAt: string;
}

export interface ProjectCreateDTO {
  title: string;
  description: string;
  imageUrl: string;
  repoUrl: string;
  demoUrl: string;
  techStack: string[];
}
