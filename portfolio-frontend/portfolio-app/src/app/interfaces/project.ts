export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  repoUrl: string;
  demoUrl: string;
  techStack: string[];
  year?: string; // Año del proyecto (opcional)
}

export interface ProjectCreateDTO {
  title: string;
  description: string;
  imageUrl: string;
  repoUrl: string;
  demoUrl: string;
  techStack: string[];
}
