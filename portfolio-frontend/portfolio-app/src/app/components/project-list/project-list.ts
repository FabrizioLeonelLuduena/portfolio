import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../interfaces/project';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-list.html',
  styleUrls: ['./project-list.css']
})
export class ProjectListComponent {
  projects: Project[] = [
    {
      id: 1,
      title: "Portfolio Personal",
      description: "Mi portfolio web desarrollado con Angular y TypeScript. Incluye secciones de información personal, habilidades técnicas y proyectos.",
      techStack: ["Angular", "TypeScript", "CSS3", "GitHub Pages"],
      repoUrl: "https://github.com/FabrizioLeonelLuduena/portfolio",
      demoUrl: "https://fabrizioleonelluduena.github.io/portfolio/",
      imageUrl: "assets/projects/portfolio.jpg",
      year: "2025"
    },
    {
      id: 2,
      title: "Sistema de Gestión de Tareas",
      description: "Aplicación web para gestionar tareas con autenticación de usuarios, creación, edición y eliminación de tareas.",
      techStack: ["Angular", "TypeScript", "CSS3", "Spring Boot", "Java"],
      repoUrl: "https://github.com/tuusuario/sistema-tareas",
      demoUrl: "https://sistema-tareas.vercel.app",
      imageUrl: "assets/projects/sistema-tareas.jpg",
      year: "2024"
    },
    {
      id: 3,
      title: "E-commerce Frontend",
      description: "Tienda online moderna con carrito de compras, filtros de productos y diseño responsive.",
      techStack: ["React", "JavaScript", "Styled Components", "Redux"],
      repoUrl: "https://github.com/tuusuario/ecommerce-frontend",
      demoUrl: "https://mi-tienda.netlify.app",
      imageUrl: "assets/projects/ecommerce.jpg",
      year: "2023"
    },
    {
      id: 4,
      title: "API REST de Biblioteca",
      description: "Sistema backend para gestión de libros, usuarios y préstamos con documentación completa.",
      techStack: ["Spring Boot", "Java", "MySQL", "JPA", "Swagger"],
      repoUrl: "https://github.com/tuusuario/biblioteca-api",
      demoUrl: "",
      imageUrl: "assets/projects/biblioteca-api.jpg",
      year: "2023"
    }
  ];

  onImageError(event: any) {
    // Si la imagen no se encuentra, no mostrar imagen
    event.target.style.display = 'none';
  }
}

