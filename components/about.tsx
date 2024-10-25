"use client";

import { Card } from "@/components/ui/card";
import { Code2, EarthLock, Factory } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-20 bg-gradient-to-b from-transparent from-10% via-muted/50 via-100%"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Perfil Profesional
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Desarrollo FullStack Integral
              </h3>
              <p className="text-muted-foreground">
                Diseño y construyo aplicaciones completas, desde la interfaz de
                usuario hasta el backend, garantizando una experiencia fluida,
                eficiente y altamente escalable.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Factory className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Estrategias Orientadas a Resultados
              </h3>
              <p className="text-muted-foreground">
                Combino creatividad y análisis de datos para desarrollar sitios
                que impulsan el rendimiento y optimizan la conversión.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <EarthLock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Enfoque en Rendimiento y Seguridad
              </h3>
              <p className="text-muted-foreground">
                Implemento soluciones que priorizan la velocidad y la
                protección, garantizando aplicaciones robustas y seguras.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
