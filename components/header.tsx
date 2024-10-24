"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold gradient-text">
            Sergio Jáuregui
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="hover:text-primary transition-colors">
              Perfil Profesional
            </a>
            <a href="#skills" className="hover:text-primary transition-colors">
              Habilidades
            </a>
            <a
              href="#projects"
              className="hover:text-primary transition-colors"
            >
              Proyectos
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contacto
            </a>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b">
            <div className="flex flex-col p-4 space-y-4">
              <a
                href="#about"
                className="hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="#work"
                className="hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Work
              </a>
              <a
                href="#contact"
                className="hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </a>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setTheme(theme === "light" ? "dark" : "light");
                  toggleMenu();
                }}
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
