"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import type { NavItem } from "@/types";
import { Home, User, Briefcase, Code, Mail } from "lucide-react";

const navItems: NavItem[] = [
  { label: "Inicio", href: "#hero", icon: Home },
  { label: "Acerca", href: "#about", icon: User },
  { label: "Proyectos", href: "#projects", icon: Briefcase },
  { label: "Tecnologías", href: "#skills", icon: Code },
  { label: "Contacto", href: "#contact", icon: Mail },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      // Scroll spy logic
      const sections = navItems.map((item) =>
        document.querySelector(item.href)
      );

      const scrollPosition = window.scrollY + 150;

      sections.forEach((section) => {
        if (section) {
          const sectionTop = (section as HTMLElement).offsetTop;
          const sectionHeight = (section as HTMLElement).offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(section.id);
          }
        }
      });
    };

    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
    >
      <nav className="bg-[#C5D2F8]/90 backdrop-blur-md rounded-full shadow-lg border border-[#9AB2EE]" style={{ padding: "0.25rem" }}>
        <ul className="flex items-center" style={{ gap: "0.25rem" }}>
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="relative block"
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-pill"
                      className="absolute inset-0 bg-[#3F1521] rounded-full"
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                  <span
                    className={`relative z-10 flex items-center rounded-full font-medium transition-colors ${
                      isActive
                        ? "text-[#C5D2F8]"
                        : "text-slate-700 hover:text-[#3F1521]"
                    }`}
                    style={{ 
                      padding: "0.5rem 1.25rem",
                      gap: "0.375rem",
                      fontSize: "0.813rem"
                    }}
                  >
                    {Icon && <Icon style={{ width: "1rem", height: "1rem" }} />}
                    {item.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </motion.header>
  );
}
