"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const ANIMATION_CONFIG = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8 },
} as const;

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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900" style={{ lineHeight: "1.2", marginBottom: "1.5rem" }}>
              Hola, soy Fabrizio
            </h1>
            
            <div className="inline-block" style={{ marginBottom: "1.5rem" }}>
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 border-l-4 border-blue-600" style={{ paddingLeft: "1rem" }}>
                Desarrollador Full Stack
              </h2>
            </div>

            <p className="text-lg text-slate-600 max-w-xl" style={{ lineHeight: "1.8", marginBottom: "2rem" }}>
              Desarrollador Full Stack apasionado por crear soluciones <strong>claras, escalables y bien pensadas</strong>. 
              Disfruto trabajar con Java, Spring Boot y Angular, y me motiva entender a fondo cada proyecto para construir software que realmente aporte valor. <strong>Curioso, colaborativo y siempre en aprendizaje.</strong>
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
                  href="/cv/CV FABRIZIO LEONEL LUDUENA.pdf"
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
              <div className="absolute inset-0 rounded-3xl shadow-2xl overflow-hidden">
                <img 
                  src="/images/Foto Mia.jpeg" 
                  alt="Fabrizio Ludueña" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decoración */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
