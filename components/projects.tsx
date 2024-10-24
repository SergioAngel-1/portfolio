"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "OWOZU",
    description:
      "OWOZU es una plataforma que muestra estadísticas en tiempo real de creadores de contenido (YouTube, Twitch, etc.) mediante integraciones con APIs.",
    image: "/assets/img/projects/project-owozu.png",
    technologies: [
      "JAVASCRIPT",
      "RESPONSIVE DESIGN",
      "API REST",
      "SEO",
      "LAZY LOAD",
      "WORDPRESS",
      "PHP",
      "ELEMENTOR",
      "HTML",
      "CSS",
      "MySQL",
      "SEM",
      "SSL",
    ],
    githubUrl: "",
    liveUrl: "https://owozu.com",
  },
  {
    title: "Venecian Flower - Floristería Online",
    description:
      "Venecian Flower es un e-commerce de productos florales. El sitio incluye integración con pasarelas de pago seguras y un sistema de gestión de inventario en tiempo real. UX/UI fluido en dispositivos móviles y de escritorio.",
    image: "/assets/img/projects/venecian-flower-logo.png",
    technologies: [
      "JAVASCRIPT",
      "RESPONSIVE DESIGN",
      "SEO",
      "WORDPRESS",
      "PHP",
      "ELEMENTOR",
      "HTML",
      "CSS",
      "MySQL",
      "SSL",
    ],
    liveUrl: "https://floristeriavenecianflower.com/",
  },
  {
    title: "Siu Tutuava - E-commerce Servicios Naturales",
    description:
      "Siu Tutuava es un e-commerce que promueve y vende productos y servicios naturales. La plataforma permite la visualización de catálogos de productos naturales, con Landing Pages exclusivas con un diseño centrado en la experiencia del usuario.",
    image: "/assets/img/projects/siu-logo.png",
    technologies: [
      "JAVASCRIPT",
      "RESPONSIVE DESIGN",
      "SEO",
      "WORDPRESS",
      "PHP",
      "ELEMENTOR",
      "HTML",
      "CSS",
      "MySQL",
      "SSL",
      "SEM",
    ],
    liveUrl: "https://siu-tutuava.com",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-20 bg-gradient-to-t from-transparent from-10% via-muted/50 via-100%">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Proyectos Destacados
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden">
              <div className="relative h-48 w-full">
                {" "}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain w-full h-full p-10"
                />
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-primary/10 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Ver ahora
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
