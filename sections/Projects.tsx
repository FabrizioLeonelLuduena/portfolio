"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Project } from "@/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects: Project[] = [
  {
    id: "1",
    title: "Sistema de Gestión Empresarial",
    description:
      "API REST completa con autenticación, gestión de usuarios, reportes y módulos escalables para diferentes áreas de negocio.",
    image: "/placeholder-project.jpg",
    tags: ["Java", "Spring Boot", "PostgreSQL", "JWT"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "2",
    title: "Dashboard Administrativo",
    description:
      "Panel de control con Angular para visualización de datos, gestión de inventario y métricas en tiempo real.",
    image: "/placeholder-project.jpg",
    tags: ["Angular", "TypeScript", "RxJS", "Material UI"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "3",
    title: "Microservicios E-commerce",
    description:
      "Arquitectura de microservicios con Spring Boot, manejo de transacciones distribuidas y contenedorización con Docker.",
    image: "/placeholder-project.jpg",
    tags: ["Spring Boot", "Docker", "MySQL", "Microservicios"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 bg-slate-50" ref={ref}>
      <div className="container mx-auto max-w-6xl" style={{ width: "100%" }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-slate-900 text-center" style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem", marginBottom: "4rem" }}
        >
          Proyectos Destacados
        </motion.h2>

        <div className="overflow-x-auto scrollbar-hide" style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem", paddingTop: "1rem", paddingBottom: "2rem" }}>
          <div className="flex" style={{ gap: "2rem" }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
              style={{ minWidth: "350px", maxWidth: "350px", flexShrink: 0 }}
            >
              <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary" style={{ height: "100%" }}>
                <div className="bg-gradient-to-br from-blue-500 to-purple-600" style={{ height: "150px" }} />
                <CardHeader style={{ padding: "1.75rem 1.75rem 1rem 1.75rem" }}>
                  <CardTitle style={{ fontSize: "1.25rem", lineHeight: "1.4", marginBottom: "0.5rem" }}>{project.title}</CardTitle>
                  <CardDescription style={{ lineHeight: "1.6" }}>{project.description}</CardDescription>
                </CardHeader>
                <CardContent style={{ padding: "0 1.75rem 1.75rem 1.75rem" }}>
                  <div className="flex flex-wrap" style={{ gap: "0.5rem", marginBottom: "1rem" }}>
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" style={{ padding: "0.25rem 0.75rem" }}>
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex" style={{ gap: "0.5rem" }}>
                    <Button asChild variant="default" size="sm">
                      <a href={project.demoUrl} style={{ padding: "0.5rem 1rem", gap: "0.5rem" }}>
                        <ExternalLink style={{ width: "1rem", height: "1rem" }} />
                        Demo
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <a href={project.githubUrl} style={{ padding: "0.5rem 1rem", gap: "0.5rem" }}>
                        <Github style={{ width: "1rem", height: "1rem" }} />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
