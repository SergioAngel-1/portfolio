"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

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
      "Motion",
    ],
    githubUrl: "https://github.com/SergioAngel-1/portfolio",
    liveUrl: "https://portfolio-khof.onrender.com/",
  },
  {
    title: "Rick And Morty API",
    description:
      "Visualización de personajes de la serie mediante su API oficial.",
    image: "/assets/img/practiceProjects/RickAndMorty.png",
    technologies: [
      "TypeScript",
      "React",
      "API REST",
      "Netlify",
      "Tailwind",
      "HTML5",
    ],
    githubUrl: "https://github.com/SergioAngel-1/rickandmorty",
    liveUrl: "https://rickandmortyapiconsumed.netlify.app/",
  },
  {
    title: "IDBM Search Movie",
    description:
      "Buscador de películas y sus características por medio de la API IBDM.",
    image: "/assets/img/practiceProjects/MovieSearch.png",
    technologies: [
      "TypeScript",
      "React",
      "API REST",
      "HTML5",
      "Tailwind",
      "IDBM API",
    ],
    githubUrl: "https://github.com/SergioAngel-1/idbm-movie-api",
    liveUrl: "https://moviesearchibdm.netlify.app/",
  },
  {
    title: "Blog App",
    description: "Crear, leer, actualizar y eliminar artículos.",
    image: "/assets/img/practiceProjects/BlogApp.png",
    technologies: ["Node.js", "React", "TypeScript", "Tailwind.css"],
    githubUrl:
      "https://github.com/SergioAngel-1/blog-app/tree/BlogAdministrableV.1",
    liveUrl: "https://blog-app-kmue.onrender.com/",
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
    githubUrl: "https://github.com/SergioAngel-1/Admin-Students-Express-JS",
    liveUrl: "https://admin-students-express-js.onrender.com/students",
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
  const [isHovered, setIsHovered] = useState(false);
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.5,
      },
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const techBadgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.05,
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    }),
    hover: {
      scale: 1.1,
      backgroundColor: "var(--primary)",
      color: "var(--primary-foreground)",
      transition: {
        duration: 0.2,
      },
    },
  };

  const buttonVariants = {
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

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Proyectos De Práctica
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={setApi}
            className="w-full max-w-7xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              <AnimatePresence mode="wait">
                {practiceProjects.map((project, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-4 basis-full md:basis-1/2 lg:basis-1/4"
                  >
                    <motion.div
                      variants={cardVariants}
                      whileHover="hover"
                      custom={index}
                    >
                      <Card className="overflow-hidden border shadow-sm transition-all duration-200 hover:shadow-md">
                        <motion.div
                          className="relative h-48 w-full overflow-hidden"
                          whileHover="hover"
                        >
                          <motion.img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover filter"
                            variants={imageVariants}
                            loading={index === 0 ? "eager" : "lazy"}
                          />
                        </motion.div>
                        <div className="p-4">
                          <motion.h3
                            className="font-semibold text-lg mb-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            {project.title}
                          </motion.h3>
                          <motion.p
                            className="text-muted-foreground mb-4 line-clamp-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                          >
                            {project.description}
                          </motion.p>
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {project.technologies.map((tech, techIndex) => (
                              <motion.span
                                key={tech}
                                variants={techBadgeVariants}
                                custom={techIndex}
                                whileHover="hover"
                                className="text-xs px-2 py-1 bg-primary/10 rounded-full transition-colors"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                          <div className="flex gap-2">
                            <motion.div
                              variants={buttonVariants}
                              initial="initial"
                              whileHover="hover"
                              whileTap="tap"
                            >
                              <Button variant="outline" size="sm" asChild>
                                <a
                                  href={project.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center"
                                >
                                  <Github className="mr-2 h-4 w-4" />
                                  Code
                                </a>
                              </Button>
                            </motion.div>
                            {project.liveUrl && (
                              <motion.div
                                variants={buttonVariants}
                                initial="initial"
                                whileHover="hover"
                                whileTap="tap"
                              >
                                <Button variant="outline" size="sm" asChild>
                                  <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center"
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
                    </motion.div>
                  </CarouselItem>
                ))}
              </AnimatePresence>
            </CarouselContent>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0.7 }}
              transition={{ duration: 0.3 }}
              className="absolute -left-4 right-4 top-1/2 -translate-y-1/2 flex justify-between"
            >
              <CarouselPrevious className="relative hover:bg-white transition-all duration-200" />
              <CarouselNext className="relative hover:bg-white transition-all duration-200" />
            </motion.div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
