import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  icon?: string; // Ruta opcional del icono
  description: string; // Descripción de lo que haces con esta tecnología
}

interface Contact {
  name: string;
  icon: string;
  url: string;
}

interface TechnicalKnowledge {
  name: string;
  description: string;
  category: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  name = 'Fabrizio Ludueña';
  title = 'Desarrollador Full Stack enfocado al desarrollo Back End';
  description = 'Apasionado por la tecnologia y el desarrollo de software. Especializado en crear soluciones innovadoras y eficientes.';
  
  selectedSkillIndex = 0; // Índice de la habilidad seleccionada
  
  skills: Skill[] = [
    { 
      name: 'Angular', 
      icon: 'assets/skills/angular.svg',
      description: 'Desarrollo aplicaciones web modernas y SPA (Single Page Applications) con componentes reutilizables, routing avanzado y gestión de estado.'
    },
    { 
      name: 'TypeScript', 
      icon: 'assets/skills/typescript.svg',
      description: 'Escribo código JavaScript tipado y escalable, mejorando la mantenibilidad y detectando errores en tiempo de desarrollo.'
    },
    { 
      name: 'Java', 
      icon: 'assets/skills/java.svg',
      description: 'Desarrollo backend robusto con programación orientada a objetos, APIs REST y aplicaciones empresariales escalables.'
    },
    { 
      name: 'Spring Boot', 
      icon: 'assets/skills/spring-boot.svg',
      description: 'Creo microservicios y APIs REST eficientes con inyección de dependencias, seguridad integrada y configuración automática.'
    },
    { 
      name: 'JUnit 5', 
      icon: 'assets/skills/Junit.svg',
      description: 'Implemento testing unitario y de integración para garantizar la calidad del código y facilitar el mantenimiento.'
    },
    { 
      name: 'Git', 
      icon: 'assets/skills/git.svg',
      description: 'Gestiono el control de versiones con flujos de trabajo colaborativos, branching strategies y resolución de conflictos.'
    },
    { 
      name: 'JavaScript', 
      icon: 'assets/skills/javascript.svg',
      description: 'Desarrollo funcionalidades interactivas del frontend, manipulación del DOM y programación asíncrona con ES6+.'
    },
    { 
      name: 'Database', 
      icon: 'assets/skills/database.svg',
      description: 'Diseño y optimizo bases de datos relacionales y NoSQL (SQL, MongoDB, Redis), escribo consultas complejas y gestiono migraciones de datos, asegurando rendimiento, escalabilidad y consistencia.'
    },
    { 
      name: 'GitHub', 
      icon: 'assets/skills/github-logo.svg',
      description: 'Colaboro en proyectos usando repositorios remotos, pull requests, code reviews y automatización con GitHub Actions.'
    }
  ];

  contacts: Contact[] = [
    { 
      name: 'Gmail', 
      icon: 'assets/skills/gmail.svg', 
      url: 'mailto:luduenafabrizio26@gmail.com' 
    },
    { 
      name: 'LinkedIn', 
      icon: 'assets/skills/linkedin.svg', 
      url: 'https://www.linkedin.com/in/fabrizio-leonel-ludueña-777712366' 
    },
    { 
      name: 'GitHub', 
      icon: 'assets/skills/github-logo.svg', 
      url: 'https://github.com/FabrizioLeonelLuduena' 
    }
  ];

  technicalKnowledge: TechnicalKnowledge[] = [
    {
      name: 'Patrones de Diseño',
      description: 'Implemento patrones como Singleton, Factory, Strategy, Observer y MVC para crear código reutilizable y mantenible.',
      category: 'Arquitectura'
    },
    {
      name: 'Principios SOLID',
      description: 'Aplico los 5 principios SOLID para crear software escalable, flexible y fácil de mantener.',
      category: 'Buenas Prácticas'
    },
    {
      name: 'Clean Code',
      description: 'Escribo código limpio, legible y autodocumentado siguiendo convenciones y estándares de la industria.',
      category: 'Buenas Prácticas'
    },
    {
      name: 'Testing',
      description: 'Desarrollo pruebas unitarias, de integración y E2E para garantizar la calidad y confiabilidad del software.',
      category: 'Calidad'
    },
    {
      name: 'API RESTful',
      description: 'Diseño e implemento APIs REST bien estructuradas con documentación clara y versionado adecuado.',
      category: 'Backend'
    },
    {
      name: 'Base de Datos',
      description: 'Modelado de datos, optimización de consultas, índices y manejo de transacciones en bases de datos relacionales.',
      category: 'Persistencia'
    },
    {
      name: 'Metodologías Ágiles',
      description: 'Experiencia trabajando con Scrum, Kanban y prácticas de desarrollo ágil para entregas incrementales.',
      category: 'Gestión'
    },
    {
      name: 'Versionado con Git',
      description: 'Git Flow, manejo de ramas, resolución de conflictos y colaboración en equipos distribuidos.',
      category: 'Herramientas'
    }
  ];

  // Método para manejar errores de carga de imagen
  onImageError(event: any) {
    event.target.style.display = 'none';
  }

  // Método para seleccionar una habilidad
  selectSkill(index: number) {
    this.selectedSkillIndex = index;
  }

  // Método para obtener la habilidad seleccionada
  get selectedSkill() {
    return this.skills[this.selectedSkillIndex];
  }

  // Método para descargar el CV
  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/documents/CV FABRIZIO LEONEL LUDUEÑA.pdf';
    link.download = 'CV_Fabrizio_Ludueña.pdf';
    link.click();
  }
}
