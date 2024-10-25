"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ScrollIndicator() {
  const [mounted, setMounted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const winScroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (winScroll / height) * 100;

      setScrollProgress(scrolled);
      setIsAtTop(winScroll < 100);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (isAtTop) {
      const firstSection = document.querySelector("section");
      if (firstSection) {
        firstSection.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    const sections = Array.from(document.querySelectorAll("section"));
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY + windowHeight / 2;

    const nextSection = sections.find((section) => {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      return sectionTop > scrollPosition;
    });

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (!mounted) return null;

  return (
    <div className="sticky bottom-20 ml-auto mr-8 w-fit h-0 z-[100]">
      <motion.button
        onClick={handleClick}
        whileHover={{
          scale: 1.1,
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 25,
          },
        }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full backdrop-blur-md cursor-pointer hover:bg-primary/20 transition-colors border border-primary/20"
        style={{
          boxShadow:
            "0 4px 12px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1)",
        }}
      >
        <motion.div
          animate={{
            y: [0, 6, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-primary"
        >
          <ChevronDown
            className="w-6 h-6"
            style={{
              transform: isAtTop ? "rotate(0deg)" : "rotate(180deg)",
              transition: "transform 0.3s ease",
            }}
          />
        </motion.div>

        <svg
          className="absolute inset-0 w-full h-full -rotate-90"
          viewBox="0 0 100 100"
        >
          <circle
            className="text-primary/10"
            strokeWidth="4"
            stroke="currentColor"
            fill="transparent"
            r="44"
            cx="50"
            cy="50"
          />
          <circle
            className="text-primary transition-all duration-300"
            strokeWidth="4"
            strokeDasharray={276.46}
            strokeDashoffset={276.46 * (1 - scrollProgress / 100)}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="44"
            cx="50"
            cy="50"
          />
        </svg>
      </motion.button>
    </div>
  );
}
