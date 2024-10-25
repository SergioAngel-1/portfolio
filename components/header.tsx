"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const shouldReduceMotion = useReducedMotion();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    const header = document.querySelector("header");
    const headerOffset = header?.offsetHeight || 0;

    if (target) {
      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY - headerOffset;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;

      // Calculate duration based on distance with a minimum and maximum
      const baseDuration = 800; // Base duration in milliseconds
      const duration = Math.min(
        Math.max(baseDuration, Math.abs(distance) / 2),
        1500 // Maximum duration
      );

      let startTime: number | null = null;
      let requestId: number | null = null;

      // Improved easing function for smoother animation
      const easeOutQuart = (t: number): number => {
        return 1 - Math.pow(1 - t, 4);
      };

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        const easedProgress = easeOutQuart(progress);
        const currentPosition = startPosition + distance * easedProgress;

        window.scrollTo(0, currentPosition);

        if (progress < 1) {
          requestId = requestAnimationFrame(animate);
        } else {
          window.scrollTo(0, targetPosition);
          if (isOpen) toggleMenu();
        }
      };

      // Cancel any existing animation
      if (requestId !== null) {
        cancelAnimationFrame(requestId);
      }

      if (shouldReduceMotion) {
        window.scrollTo(0, targetPosition);
        if (isOpen) toggleMenu();
      } else {
        requestId = requestAnimationFrame(animate);
      }
    }
  };

  const menuItems = [
    { href: "#about", label: "Perfil Profesional" },
    { href: "#skills", label: "Habilidades" },
    { href: "#projects", label: "Mi Trabajo" },
    { href: "#contact", label: "Contacto" },
  ];

  const headerVariants = {
    hidden: { y: -100 },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.3,
      },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: i * 0.1,
      },
    }),
  };

  const logoVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.95 },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20, height: 0 },
    visible: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      height: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const iconButtonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.9 },
  };

  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <motion.a
            href="#"
            className="text-2xl font-bold gradient-text"
            variants={logoVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={(e) => handleScroll(e, "#")}
          >
            Sergio Jáuregui
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="relative hover:text-primary transition-colors group"
                variants={menuItemVariants}
                custom={index}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.1 }}
                onClick={(e) => handleScroll(e, item.href)}
              >
                {item.label}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                  layoutId="underline"
                />
              </motion.a>
            ))}
            <motion.div
              variants={iconButtonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="relative"
              >
                <motion.div
                  className="absolute inset-0 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </motion.div>
          </div>

          <motion.button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            variants={iconButtonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </nav>

        {isOpen && (
          <motion.div
            className="md:hidden absolute top-16 left-0 right-0 bg-background border-b overflow-hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex flex-col p-4 space-y-4">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="hover:text-primary transition-colors relative group"
                  onClick={(e) => handleScroll(e, item.href)}
                  variants={menuItemVariants}
                  custom={index}
                  whileHover={{ x: 10 }}
                >
                  {item.label}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                    layoutId="underline-mobile"
                  />
                </motion.a>
              ))}
              <motion.div
                variants={iconButtonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setTheme(theme === "light" ? "dark" : "light");
                    toggleMenu();
                  }}
                  className="w-fit"
                >
                  <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
