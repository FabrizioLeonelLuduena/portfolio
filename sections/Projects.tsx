"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import type { Project } from "@/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects: Project[] = [
  {
    id: "1",
    title: "Sistema de Gestión para Laboratorio de Análisis Clínicos",
    description:
      "Sistema integral para la gestión de un laboratorio clínico desarrollado con Angular 17+ siguiendo las mejores prácticas de desarrollo frontend.",
    image: "/images/Laboratorio.png",
    tags: ["Angular", "TypeScript", "NgInx", "PrimeNG", "Java", "Spring Boot", "Docker", "MySQL", "Microservicios"],
    demoUrl: "https://laboratoriofront.netlify.app/login",
    githubUrl: "https://github.com/FabrizioLeonelLuduena/Laboratorio-APP",
  },
  {
    id: "2",
    title: "TallerSoft — Sistema de Gestión para Talleres de Servicio Técnico",
    description:
      "Plataforma ERP web para PYMEs del rubro técnico que digitaliza la operativa del taller: órdenes de trabajo con tablero Kanban en tiempo real, gestión de clientes y equipos, stock con alertas, facturación y un asistente de IA con acceso a datos del negocio.",
    image: "/images/TallerSoft.png",
    tags: ["Angular", "TypeScript", "Angular Material", "Java", "Spring Boot", "Spring Cloud Gateway", "Spring Security", "Python", "FastAPI", "Pandas", "PostgreSQL", "Docker", "WebSocket", "Microservicios"],
    demoUrl: "https://tallersoft-front.netlify.app/login",
    githubUrl: "https://github.com/FabrizioLeonelLuduena/TallerSoft",
  },
];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20" ref={ref}>
      <div className="container mx-auto max-w-6xl" style={{ width: "100%" }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center"
          style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem", marginBottom: "4rem", color: 'var(--text-primary)' }}
        >
          Proyectos Destacados
        </motion.h2>

        <div style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem", paddingBottom: "2rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.75rem" }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -4 }}
            >
              <Card
                className="h-full overflow-hidden transition-all duration-300 hover:border-primary"
                style={{ height: "100%", boxShadow: 'var(--shadow-sm)' }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = 'var(--shadow-lg)')}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = 'var(--shadow-sm)')}
              >
                <div style={{ height: "200px", overflow: "hidden", position: "relative" }}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </div>
                <CardHeader style={{ padding: "1.75rem 1.75rem 1rem 1.75rem" }}>
                  <CardTitle style={{ fontSize: "1.05rem", lineHeight: "1.4", marginBottom: "0.5rem", color: 'var(--text-primary)' }}>
                    {project.title}
                  </CardTitle>
                  <CardDescription style={{ lineHeight: "1.6", color: 'var(--text-secondary)' }}>
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent style={{ padding: "0 1.75rem 1.75rem 1.75rem" }}>
                  <div className="flex flex-wrap" style={{ gap: "0.5rem", marginBottom: "1rem" }}>
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        style={{
                          padding: "0.25rem 0.75rem",
                          background: 'var(--amber-soft)',
                          color: '#a0620f',
                          border: '1px solid rgba(209,128,30,0.2)',
                          borderRadius: '50px',
                          fontSize: '0.72rem',
                          fontWeight: 600,
                        }}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex" style={{ gap: "0.5rem" }}>
                    <Button asChild variant="default" size="sm">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ padding: "0.5rem 1rem", gap: "0.5rem" }}
                      >
                        <ExternalLink style={{ width: "1rem", height: "1rem" }} />
                        Demo
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ padding: "0.5rem 1rem", gap: "0.5rem" }}
                      >
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
    </section>
  );
}
