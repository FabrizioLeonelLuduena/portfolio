"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
              <div
                className="absolute inset-0 rounded-3xl overflow-hidden"
                style={{ boxShadow: 'var(--shadow-lg), 0 0 0 1px rgba(55,79,78,0.12)' }}
              >
                <img
                  src="/images/Developer.jpg"
                  alt="Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decoración */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full opacity-20 blur-2xl" style={{ background: '#D1801E' }}></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full opacity-20 blur-2xl" style={{ background: '#AA8552' }}></div>
            </div>
          </motion.div>

          {/* Columna derecha - Contenido */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2
              className="text-4xl md:text-5xl font-bold"
              style={{ marginBottom: "1.5rem", color: 'var(--text-primary)' }}
            >
              Acerca de Mí
            </h2>

            <div>
              <h3
                className="text-2xl font-bold"
                style={{ marginBottom: "0.75rem", color: 'var(--amber)' }}
              >
                Fabrizio Ludueña
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: "1.8", marginBottom: "1rem" }}>
                Me formé en el ecosistema{" "}
                <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Java–Spring Boot y Angular</strong>,
                pero lo que realmente me mueve es entender cómo una aplicación encaja dentro del negocio,
                cómo se comporta bajo presión y cómo puedo mejorarla para que sea más clara, rápida y confiable.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: "1.8", marginBottom: "1rem" }}>
                Me siento cómodo investigando, documentando, refactorizando y armando soluciones que puedan
                escalar con el tiempo, pero sobre todo me motiva trabajar con equipos donde la{" "}
                <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>calidad del código y la colaboración</strong>{" "}
                importan tanto como la funcionalidad final.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: "1.8", marginBottom: "1.5rem" }}>
                Mi objetivo es seguir creciendo y aportar valor desde un enfoque profesional, curioso y orientado
                a resultados por eso es que sigo estudiando y aprendiendo tecnologías por cuenta propia.
              </p>
            </div>

            {/* Mi enfoque de trabajo */}
            <div>
              <h4
                className="text-lg font-semibold flex items-center"
                style={{ marginBottom: "0.75rem", gap: "0.625rem", color: 'var(--text-primary)' }}
              >
                <span style={{ display: 'block', width: '4px', height: '18px', background: 'var(--amber)', borderRadius: '2px', flexShrink: 0 }}></span>
                Mi enfoque de trabajo
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.97rem', lineHeight: "1.7", marginBottom: "0.75rem" }}>
                Creo que un buen desarrollador no solo programa:{" "}
                <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>entiende el contexto</strong>.
                Cuando trabajo en un proyecto, siempre pienso en cómo cada decisión técnica impacta la
                experiencia del usuario, el mantenimiento a futuro y el equipo que tendrá que trabajar con ese código.
              </p>
            </div>

            {/* Educación */}
            <div>
              <h4
                className="text-lg font-semibold flex items-center"
                style={{ marginBottom: "0.75rem", gap: "0.625rem", color: 'var(--text-primary)' }}
              >
                <span style={{ display: 'block', width: '4px', height: '18px', background: 'var(--amber)', borderRadius: '2px', flexShrink: 0 }}></span>
                Educación
              </h4>
              <div style={{ background: 'var(--amber-soft)', border: '1px solid rgba(209,128,30,0.18)', borderRadius: '12px', padding: '1rem 1.25rem', display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}>
                <div style={{ width: '38px', height: '38px', background: 'var(--amber)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1.1rem' }}>
                  🎓
                </div>
                <div>
                  <p className="font-medium" style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                    Universidad Tecnológica Nacional (UTN)
                  </p>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)', marginTop: '2px' }}>
                    Licenciatura en Sistemas
                  </p>
                  <span style={{ display: 'inline-block', marginTop: '6px', background: 'var(--amber)', color: 'white', fontSize: '0.72rem', fontWeight: 600, padding: '3px 10px', borderRadius: '50px' }}>
                    En curso
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
