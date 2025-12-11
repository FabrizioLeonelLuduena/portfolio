"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Phone, Github } from "lucide-react";

const contactInfo = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Fabrizio Leonel Ludueña",
    href: "https://www.linkedin.com/in/fabrizioluduena-dev",
    color: "#0A66C2"
  },
  {
    icon: Mail,
    label: "Gmail",
    value: "luduenafabrizio26@gmail.com",
    href: "mailto:luduenafabrizio26@gmail.com",
    color: "#EA4335"
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+54 351 733 5811",
    href: "https://wa.me/5493517335811",
    color: "#25D366"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "FabrizioLeonelLuduena",
    href: "https://github.com/FabrizioLeonelLuduena",
    color: "#181717"
  }
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-6 bg-slate-50" ref={ref}>
      <div className="container mx-auto max-w-4xl" style={{ width: "100%" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ marginBottom: "3rem" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900" style={{ marginBottom: "1rem" }}>
            Contacto
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="h-full transition-all duration-300 hover:shadow-xl hover:border-primary">
                  <CardContent style={{ padding: "2rem" }}>
                    <div className="flex items-start" style={{ gap: "1rem" }}>
                      <div 
                        className="rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ 
                          width: "3rem", 
                          height: "3rem",
                          backgroundColor: `${contact.color}15`
                        }}
                      >
                        <Icon style={{ width: "1.5rem", height: "1.5rem", color: contact.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-slate-900" style={{ marginBottom: "0.25rem" }}>
                          {contact.label}
                        </h3>
                        <p className="text-slate-600 text-sm break-all" style={{ marginBottom: "0.75rem", lineHeight: "1.5" }}>
                          {contact.value}
                        </p>
                        <Button asChild variant="outline" size="sm">
                          <a 
                            href={contact.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ padding: "0.5rem 1rem", fontSize: "0.875rem" }}
                          >
                            Contactar
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA adicional */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
          style={{ marginTop: "3rem" }}
        >
          <p className="text-slate-600" style={{ marginBottom: "1rem" }}>
            También podés descargar mi CV para conocer más sobre mi experiencia
          </p>
          <Button asChild size="lg" className="rounded-full">
            <a 
              href="/cv/CVFABRIZIOLEONELLUDUENA.pdf" 
              download="CV_Fabrizio_Luduena.pdf"
              style={{ padding: "0.75rem 2rem", fontSize: "1rem" }}
            >
              Descargar CV
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
