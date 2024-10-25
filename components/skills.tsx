"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Desarrollo FullStack",
    skills: [
      "JavaScript",
      "React",
      "TailWind CSS",
      "Node.js",
      "API REST y SOAP",
      "Git",
      "HTML5",
      "CSS",
      "PHP",
      "Symfony",
      "MySQL",
      "GitHub",
      "GitLab",
      "PostgreSQL",
      "Bootstrap",
    ],
  },
  {
    title: "Estrategias Web",
    skills: [
      "Optimización SEO/SEM",
      "Análisis y mejora de UX/UI",
      "Wordpress",
      "WooCommerce",
      "Shopify",
      "Integración de marketing digital",
      "Pautas Digitales",
    ],
  },
  {
    title: "Herramientas / Otros",
    skills: [
      "CI/CD",
      "Seguridad en aplicaciones web (CSRF, XSS)",
      "Mejora en tiempos de carga",
      "Linux",
      "Excel",
      "Stress Tetsing",
      "CMD",
    ],
  },
  {
    title: "Habilidades Sociales",
    skills: [
      "Comunicación Efectiva",
      "Resolución de Problemas",
      "Adaptabilidad",
      "Trabajo en Equipo",
      "Gestión de Tiempo",
      "Empatía y Escucha atractiva",
    ],
  },
];

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <section id="skills" className="py-16 md:py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          Habilidades y Tecnologías
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className="p-6 h-full transition-colors hover:bg-muted/50">
                <motion.h3
                  className="text-xl font-semibold mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 + categoryIndex * 0.1 }}
                >
                  {category.title}
                </motion.h3>
                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={containerVariants}
                >
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      variants={badgeVariants}
                      whileHover="hover"
                      custom={index}
                    >
                      <Badge
                        variant="secondary"
                        className="transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
