"use client";

import { Button } from "@/components/ui/button";
import { Github, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-40 pb-20 h-screen min-h-fit">
      <div className="absolute inset-0 hero-gradient" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Desarrollador de Soluciones Web Impactantes y Escalables
          </h1>
          <p className="text-muted-foreground text-xl mb-8 max-w-2xl mx-auto">
            Apasionado por transformar ideas en experiencias digitales fluidas y
            eficientes. Mi enfoque se centra en crear proyectos únicos que
            combinan creatividad y funcionalidad, siempre orientado a los
            resultados y al crecimiento de mis clientes.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="gap-2">
              <a
                href="#contact"
                rel="noopener noreferrer"
                className="flex gap-2 items-center"
              >
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
