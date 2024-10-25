"use client";

import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
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
      },
    },
    tap: { scale: 0.9 },
  };

  const socialLinks = [
    {
      href: "https://github.com/SergioAngel-1",
      icon: Github,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/in/sergio-jauregui-angel",
      icon: Linkedin,
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="py-8 border-t bg-background/50 backdrop-blur-sm relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.p
            className="text-muted-foreground text-center md:text-left"
            variants={itemVariants}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              © 2024 Portafolio Sergio Jáuregui.{" "}
            </motion.span>
            <motion.br className="md:hidden" />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Todos los derechos reservados.
            </motion.span>
          </motion.p>

          <motion.div
            className="flex items-center space-x-6"
            variants={itemVariants}
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors relative group"
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap"
                aria-label={link.label}
              >
                <motion.div
                  className="absolute -inset-2 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
                <link.icon className="h-5 w-5 relative z-10" />
                <motion.span
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 whitespace-nowrap"
                  initial={{ y: -10, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.label}
                </motion.span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
