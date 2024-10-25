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

      // Adjust duration based on distance to make it feel more natural
      const minDuration = 500;
      const maxDuration = 1500;
      const distanceThreshold = 2000;
      const duration = Math.min(
        maxDuration,
        minDuration +
          (Math.abs(distance) / distanceThreshold) * (maxDuration - minDuration)
      );

      let startTime: number | null = null;
      let rafId: number;

      // Enhanced easing function for more natural movement
      const easeOutExpo = (t: number): number => {
        return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      };

      const animateScroll = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        const easedProgress = easeOutExpo(progress);
        const currentPosition = startPosition + distance * easedProgress;

        window.scrollTo({
          top: currentPosition,
          behavior: "auto", // We're handling the smooth scroll manually
        });

        if (progress < 1) {
          rafId = requestAnimationFrame(animateScroll);
        } else {
          // Ensure we land exactly on target
          window.scrollTo({
            top: targetPosition,
            behavior: "auto",
          });
        }
      };

      // Clean up any existing animation
      const cleanup = () => {
        if (rafId) {
          cancelAnimationFrame(rafId);
        }
      };

      // Handle reduced motion preference
      if (shouldReduceMotion) {
        cleanup();
        window.scrollTo({
          top: targetPosition,
          behavior: "auto",
        });
      } else {
        cleanup();
        rafId = requestAnimationFrame(animateScroll);
      }

      // Close mobile menu if open
      if (isOpen) toggleMenu();
    }
  };

  const menuItems = [
    { href: "#about", label: "Perfil Profesional" },
    { href: "#skills", label: "Habilidades" },
    { href: "#projects", label: "Mi Trabajo" },
    { href: "#contact", label: "Contacto" },
  ];

  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <motion.a
            href="#"
            className="text-2xl font-bold gradient-text"
            whileHover={{ scale: shouldReduceMotion ? 1 : 1.05 }}
            whileTap={{ scale: shouldReduceMotion ? 1 : 0.95 }}
            onClick={(e) => handleScroll(e, "#")}
          >
            Sergio Jáuregui
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="hover:text-primary transition-colors relative"
                whileHover={{ scale: shouldReduceMotion ? 1 : 1.1 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  type: "tween",
                }}
                onClick={(e) => handleScroll(e, item.href)}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.div
              whileHover={{ scale: shouldReduceMotion ? 1 : 1.1 }}
              whileTap={{ scale: shouldReduceMotion ? 1 : 0.9 }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="animate-gpu"
              >
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
            whileHover={{ scale: shouldReduceMotion ? 1 : 1.1 }}
            whileTap={{ scale: shouldReduceMotion ? 1 : 0.9 }}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </nav>

        {isOpen && (
          <motion.div
            className="md:hidden absolute top-16 left-0 right-0 bg-background border-b"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col p-4 space-y-4">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="hover:text-primary transition-colors"
                  onClick={(e) => handleScroll(e, item.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: shouldReduceMotion ? 0 : 10 }}
                >
                  {item.label}
                </motion.a>
              ))}
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
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
