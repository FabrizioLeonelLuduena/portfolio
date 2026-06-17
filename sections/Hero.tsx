"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-24"
      aria-label="Sección de inicio"
    >
      <div className="container mx-auto max-w-6xl" style={{ width: "100%" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda - Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p style={{ color: 'var(--teal)', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.5rem' }}>
              Full Stack Developer · Java · Angular
            </p>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold"
              style={{ lineHeight: "1.2", marginBottom: "1.5rem", color: 'var(--text-primary)' }}
            >
              Hola, soy{" "}
              <span style={{
                background: 'linear-gradient(135deg, #D1801E 0%, #AA8552 50%, #374F4E 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Fabrizio</span>
            </h1>

            <div className="inline-block" style={{ marginBottom: "1.5rem" }}>
              <h2
                className="text-2xl md:text-3xl font-semibold border-l-4 border-[#D1801E]"
                style={{ paddingLeft: "1rem", color: 'var(--text-primary)' }}
              >
                Desarrollador Full Stack
              </h2>
            </div>

            <p
              className="text-lg max-w-xl"
              style={{ lineHeight: "1.8", marginBottom: "2rem", color: 'var(--text-secondary)' }}
            >
              Desarrollador Full Stack apasionado por crear soluciones{" "}
              <strong style={{ color: 'var(--text-primary)' }}>claras, escalables y bien pensadas</strong>.
              Disfruto trabajar con Java, Spring Boot y Angular, y me motiva entender a fondo cada proyecto
              para construir software que realmente aporte valor.{" "}
              <strong style={{ color: 'var(--text-primary)' }}>Curioso, colaborativo y siempre en aprendizaje.</strong>
            </p>

            <div className="flex" style={{ gap: "1rem" }}>
              <Button asChild size="lg" className="rounded-full">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  style={{ padding: "0.75rem 2rem", fontSize: "1rem", gap: "0.5rem" }}
                >
                  Contactar <ArrowRight style={{ width: "1.25rem", height: "1.25rem" }} />
                </motion.a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/cv/CVFABRIZIOLEONELLUDUENA.pdf"
                  download="CV_Fabrizio_Luduena.pdf"
                  style={{ padding: "0.75rem 2rem", fontSize: "1rem", gap: "0.5rem" }}
                >
                  <Download style={{ width: "1.25rem", height: "1.25rem" }} /> Descargar CV
                </motion.a>
              </Button>
            </div>
          </motion.div>

          {/* Columna derecha - Imagen */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div
                className="absolute inset-0 rounded-3xl overflow-hidden"
                style={{ boxShadow: 'var(--shadow-lg), 0 0 0 1px rgba(55,79,78,0.12)' }}
              >
                <img
                  src="/images/Foto Mia.jpeg"
                  alt="Fabrizio Ludueña"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decoración */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full opacity-20 blur-2xl" style={{ background: '#D1801E' }}></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full opacity-20 blur-2xl" style={{ background: '#AA8552' }}></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
