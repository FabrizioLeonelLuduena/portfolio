"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  SiSpringboot, 
  SiAngular, 
  SiTypescript, 
  SiPostgresql, 
  SiMysql, 
  SiDocker, 
  SiGit,
  SiGithub,
  SiReact,
  SiJavascript,
  SiNextdotjs,
  SiMongodb,
  SiSharp,
  SiNginx
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Code2, Webhook, Server, GitBranch, Eye, Settings, Lightbulb, Layers } from "lucide-react";

const techCategories = [
  {
    title: "Backend",
    techs: [
      { name: "Java", icon: FaJava, color: "#007396", level: 90 },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F", level: 90 },
      { name: "C#", icon: SiSharp, color: "#239120", level: 60 },
      { name: "JUnit", icon: Code2, color: "#25A162", level: 70 },
      { name: "Mockito", icon: Code2, color: "#C5D86D", level: 70 },
      { name: "REST APIs", icon: Webhook, color: "#009688", level: 90 },
      { name: "Microservicios", icon: Server, color: "#FF6B6B", level: 70 },
    ]
  },
  {
    title: "Frontend",
    techs: [
      { name: "Angular", icon: SiAngular, color: "#DD0031", level: 90 },
      { name: "React", icon: SiReact, color: "#61DAFB", level: 40 },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: 90 },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: 60 },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000", level: 40 },
      { name: "Nginx", icon: SiNginx, color: "#009639", level: 70 },
    ]
  },
  {
    title: "Base de Datos",
    techs: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1", level: 90 },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", level: 70 },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: 40 },
    ]
  },
  {
    title: "DevOps",
    techs: [
      { name: "Docker", icon: SiDocker, color: "#2496ED", level: 80 },
      { name: "Git", icon: SiGit, color: "#F05032", level: 90 },
      { name: "GitHub", icon: SiGithub, color: "#181717", level: 90 },
      { name: "CI/CD", icon: GitBranch, color: "#2088FF", level: 60 },
      { name: "Observabilidad", icon: Eye, color: "#FF6B35", level: 60 },
      { name: "Orquestación", icon: Settings, color: "#326CE5", level: 60 },
    ]
  },
  {
    title: "Metodologías",
    techs: [
      { name: "Desarrollo Ágil", icon: Lightbulb, color: "#FFA500", level: 80 },
      { name: "Patrones de Diseño", icon: Layers, color: "#8B5CF6", level: 80 },
      { name: "Patrones de Arquitectura", icon: Layers, color: "#6366F1", level: 80 },
    ]
  },
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20 px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl" style={{ width: "100%" }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-slate-900 text-center"
          style={{ marginBottom: "3rem" }}
        >
          Tecnologías
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5" style={{ gap: "1.5rem" }}>
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
              whileHover={{ scale: 1.05 }}
              style={{ height: "100%" }}
            >
              <Card className="transition-all duration-300 hover:shadow-xl hover:border-primary" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <CardContent style={{ padding: "2rem 1.75rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h3 className="text-xl font-bold text-slate-900 text-center" style={{ marginBottom: "1.75rem" }}>
                    {category.title}
                  </h3>
                  <div className="flex flex-col" style={{ gap: "1.25rem", flex: 1 }}>
                    {category.techs.map((tech, techIndex) => {
                      const Icon = tech.icon;
                      return (
                        <motion.div
                          key={tech.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.4, delay: categoryIndex * 0.15 + techIndex * 0.08 }}
                        >
                          <div className="flex items-center" style={{ gap: "0.625rem", marginBottom: "0.5rem" }}>
                            <Icon style={{ width: "1.25rem", height: "1.25rem", color: tech.color, flexShrink: 0 }} />
                            <span className="text-slate-700 text-sm font-medium">{tech.name}</span>
                          </div>
                          <div className="bg-secondary rounded-full overflow-hidden" style={{ height: "0.375rem" }}>
                            <motion.div
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${tech.level}%` } : {}}
                              transition={{ duration: 1, delay: categoryIndex * 0.15 + techIndex * 0.08 + 0.3 }}
                              className="h-full rounded-full"
                              style={{ backgroundColor: tech.color }}
                            />
                          </div>
                        </motion.div>
                      );
                    })}
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
