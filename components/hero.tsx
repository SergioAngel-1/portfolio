"use client";

import { Button } from "@/components/ui/button";
import { Github, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: shouldReduceMotion ? 1 : 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: shouldReduceMotion ? 1 : 0.95 },
  };

  const iconVariants = {
    initial: { rotate: 0 },
    animate: {
      rotate: 360,
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  if (!isMounted) {
    return (
      <section className="relative pt-40 pb-20 h-screen min-h-fit overflow-hidden hero-gradient">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight gradient-text">
              Desarrollador de Soluciones Web Impactantes y Escalables
            </h1>
            <p className="text-muted-foreground text-xl mb-8 max-w-2xl mx-auto">
              Apasionado por transformar ideas en experiencias digitales fluidas
              y eficientes. Mi enfoque se centra en crear proyectos únicos que
              combinan creatividad y funcionalidad.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="gap-2">
                <a href="#contact" className="flex gap-2 items-center">
                  Contacta conmigo
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://github.com/SergioAngel-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <Github className="h-4 w-4" />
                  Perfil Github
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative pt-40 pb-20 h-screen min-h-fit overflow-hidden hero-gradient">
      <div className="container mx-auto px-4 relative">
        <motion.div
          className="max-w-4xl mx-auto text-center animate-gpu"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight gradient-text"
            variants={itemVariants}
          >
            Desarrollador de Soluciones Web Impactantes y Escalables
          </motion.h1>

          <motion.p
            className="text-muted-foreground text-xl mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Apasionado por transformar ideas en experiencias digitales fluidas y
            eficientes. Mi enfoque se centra en crear proyectos únicos que
            combinan creatividad y funcionalidad.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            variants={itemVariants}
          >
            <motion.div
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="animate-gpu"
            >
              <Button size="lg" className="gap-2">
                <a href="#contact" className="flex gap-2 items-center">
                  Contacta conmigo
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="animate-gpu"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </a>
              </Button>
            </motion.div>

            <motion.div
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="animate-gpu"
            >
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://github.com/SergioAngel-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <motion.div
                    variants={iconVariants}
                    initial="initial"
                    animate="animate"
                    className="animate-gpu"
                  >
                    <Github className="h-4 w-4" />
                  </motion.div>
                  Perfil Github
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
