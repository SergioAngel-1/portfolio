"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

const practiceProjects: Project[] = [
  {
    title: "Portafolio Sergio Jáuregui",
    description: "Portafolio de mis proyectos hechos como Desarrollador Web.",
    image: "/assets/img/practiceProjects/Portfolio.png",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind",
      "Next.js",
      "Email.js",
      "JavaScript",
    ],
    githubUrl: "https://github.com/SergioAngel-1/portfolio",
    liveUrl: "",
  },
  {
    title: "Blog App",
    description: "Crear, leer, actualizar y eliminar artículos.",
    image: "/assets/img/practiceProjects/BlogApp.png",
    technologies: ["Node.js", "React", "TypeScript", "Tailwind.css"],
    githubUrl:
      "https://github.com/SergioAngel-1/blog-app/tree/BlogAdministrableV.1",
    liveUrl: "",
  },
  {
    title: "PINUP",
    description:
      "Aplicación Web para academia de baile, con roles, perfiles y demás.",
    image: "/assets/img/practiceProjects/PinUp.png",
    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "Email.js",
      "JWT",
      "MySQL",
    ],
    githubUrl: "https://github.com/user/budget-app",
    liveUrl: "https://pinup.com",
  },
  {
    title: "Rick And Morty API",
    description:
      "Visualización de personajes de la serie mediante su API oficial.",
    image: "/assets/img/practiceProjects/RickAndMorty.png",
    technologies: ["JavaScript", "API REST", "CSS3", "HTML5"],
    githubUrl: "https://github.com/SergioAngel-1/rickandmorty",
    liveUrl: "https://rickandmorty-silk.vercel.app/",
  },
  {
    title: "IDBM Movie API",
    description:
      "Buscador de películas y sus características por medio de la API IBDM.",
    image: "/assets/img/practiceProjects/MovieSearch.png",
    technologies: ["JavaScript", "API REST", "HTML5", "CSS3"],
    githubUrl: "https://github.com/SergioAngel-1/idbm-movie-api",
    liveUrl: "https://movie-db-demo.com",
  },
  {
    title: "Administrador de Estudiantes",
    description:
      "Crear, leer, actualizar y eliminar items con Express.js y motor de plantillas EJS.",
    image: "/assets/img/practiceProjects/crudStudents.png",
    technologies: [
      "Node.js",
      "Express.js",
      "SQLite",
      "EJS",
      "Bootstrap",
      "Font Awezome",
    ],
    githubUrl: "https://github.com/SergioAngel-1/CrudExpressJS",
    liveUrl: "",
  },
  {
    title: "Administrador de Ciudades",
    description:
      "Crear, leer, actualizar y eliminar items con Maven y Spring Boot, front-end en HTML.",
    image: "/assets/img/practiceProjects/crudCitys.png",
    technologies: [
      "Maven",
      "Java",
      "Spring Boot",
      "Bootstrap",
      "Render",
      "Javascript",
    ],
    githubUrl: "https://github.com/SergioAngel-1/CRUD-Products-Springboot-Java",
    liveUrl: "https://apirest-spring.onrender.com/",
  },
];

export function PracticeProjects() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Proyectos De Práctica
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {practiceProjects.map((project, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-full md:basis-1/2 lg:basis-1/4"
              >
                <Card className="overflow-hidden border shadow-sm transition-all duration-200 hover:shadow-md">
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 filter"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 bg-primary/10 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
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
                      </motion.div>
                      {project.liveUrl && (
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button variant="outline" size="sm" asChild>
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Demo
                            </a>
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 hover:bg-white" />
          <CarouselNext className="hidden md:flex -right-4 hover:bg-white" />
        </Carousel>
      </div>
    </section>
  );
}
