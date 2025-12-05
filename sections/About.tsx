"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl" style={{ width: "100%" }}>
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr]" style={{ gap: "3rem", alignItems: "stretch" }}>
          {/* Columna izquierda - Imagen */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{ display: "flex", alignItems: "stretch" }}
          >
            <div className="relative w-full" style={{ minHeight: "100%" }}>
              <div className="absolute inset-0 rounded-3xl shadow-2xl overflow-hidden">
                <img 
                  src="/images/Developer.jpg" 
                  alt="Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decoración */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-2xl"></div>
            </div>
          </motion.div>

          {/* Columna derecha - Contenido */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900" style={{ marginBottom: "1.5rem" }}>
              Acerca de Mí
            </h2>

            <div>
              <h3 className="text-2xl font-bold text-slate-900" style={{ marginBottom: "0.75rem" }}>
                Fabrizio Ludueña
              </h3>
              <p className="text-slate-600" style={{ lineHeight: "1.8", marginBottom: "1rem" }}>
                Me formé en el ecosistema <strong>Java–Spring Boot y Angular</strong>, pero lo que realmente me mueve es entender cómo una aplicación encaja dentro del negocio, cómo se comporta bajo presión y cómo puedo mejorarla para que sea más clara, rápida y confiable.
              </p>
              <p className="text-slate-600" style={{ lineHeight: "1.8", marginBottom: "1rem" }}>
                Me siento cómodo investigando, documentando, refactorizando y armando soluciones que puedan escalar con el tiempo, pero sobre todo me motiva trabajar con equipos donde la calidad del código y la colaboración importan tanto como la funcionalidad final.
              </p>
              <p className="text-slate-600" style={{ lineHeight: "1.8", marginBottom: "1.5rem" }}>
                Mi objetivo es seguir creciendo y aportar valor desde un enfoque profesional, curioso y orientado a resultados por eso es que sigo estudiando y aprendiendo tecnologías por cuenta propia.
              </p>
            </div>

            {/* Mi enfoque de trabajo */}
            <div>
              <h4 className="text-lg font-semibold text-slate-900 flex items-center" style={{ marginBottom: "0.75rem", gap: "0.5rem" }}>
                <span className="text-xl">|</span> Mi enfoque de trabajo
              </h4>
              <p className="text-slate-600 text-sm" style={{ lineHeight: "1.7", marginBottom: "0.75rem" }}>
                Creo que un buen desarrollador no solo programa: <strong>entiende el contexto</strong>. 
                Cuando trabajo en un proyecto, siempre pienso en cómo cada decisión técnica impacta la experiencia del usuario, el mantenimiento a futuro y el equipo que tendrá que trabajar con ese código.
              </p>
            </div>

            {/* Educación */}
            <div>
              <h4 className="text-lg font-semibold text-slate-900 flex items-center" style={{ marginBottom: "0.5rem", gap: "0.5rem" }}>
                <span className="text-xl">|</span> Educación
              </h4>
              <div style={{ marginBottom: "0.5rem" }}>
                <p className="text-slate-900 font-medium">Universidad Tecnológica Nacional (UTN)</p>
                <p className="text-sm text-slate-600">Licenciatura en Sistemas</p>
                <p className="text-xs text-slate-500">Actualmente realizando</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
