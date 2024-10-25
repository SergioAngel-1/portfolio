"use client";

import { Card } from "@/components/ui/card";
import { Code2, EarthLock, Factory } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
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
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6,
      },
    },
  };

  const iconVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
        duration: 0.4,
      },
    },
  };

  const cards = [
    {
      icon: Code2,
      title: "Desarrollo FullStack Integral",
      description:
        "Diseño y construyo aplicaciones completas, desde la interfaz de usuario hasta el backend, garantizando una experiencia fluida, eficiente y altamente escalable.",
    },
    {
      icon: Factory,
      title: "Estrategias Orientadas a Resultados",
      description:
        "Combino creatividad y análisis de datos para desarrollar sitios que impulsan el rendimiento y optimizan la conversión.",
    },
    {
      icon: EarthLock,
      title: "Enfoque en Rendimiento y Seguridad",
      description:
        "Implemento soluciones que priorizan la velocidad y la protección, garantizando aplicaciones robustas y seguras.",
    },
  ];

  return (
    <section
      id="about"
      className="py-16 md:py-20 bg-gradient-to-b from-transparent from-10% via-muted/50 via-100%"
    >
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
          Perfil Profesional
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {cards.map((card, index) => (
            <motion.div key={index} variants={cardVariants}>
              <motion.div
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="p-6 h-full transition-colors hover:bg-muted/50">
                  <div className="flex flex-col items-center text-center h-full">
                    <motion.div
                      className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
                      variants={iconVariants}
                      initial="initial"
                      whileHover="hover"
                    >
                      {<card.icon className="h-6 w-6 text-primary" />}
                    </motion.div>
                    <motion.h3
                      className="text-xl font-semibold mb-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {card.title}
                    </motion.h3>
                    <motion.p
                      className="text-muted-foreground"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {card.description}
                    </motion.p>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
