"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

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
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
      skipSnaps: false,
      slidesToScroll: 1,
      dragFree: true,
    },
    [
      Autoplay({
        delay: 6000,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      emblaApi.plugins().autoplay?.reset();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      emblaApi.plugins().autoplay?.reset();
    }
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) {
        emblaApi.scrollTo(index);
        emblaApi.plugins().autoplay?.reset();
      }
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
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

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
    disabled: { opacity: 0.5 },
  };

  return (
    <section
      id="projects"
      className="py-16 md:py-20 relative"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Proyectos Destacados
        </motion.h2>

        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-8">
              <AnimatePresence mode="wait">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    className="flex-[0_0_100%] min-w-0 lg:flex-[0_0_calc(33.33%-1rem)]"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true }}
                    layout
                  >
                    <Card className="h-full overflow-hidden group">
                      <motion.div
                        className="relative h-48 w-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-contain w-full h-full p-10 filter-img"
                          priority={index === 0}
                        />
                      </motion.div>
                      <div className="p-6">
                        <motion.h3
                          className="text-xl font-semibold mb-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          {project.title}
                        </motion.h3>
                        <motion.p
                          className="text-muted-foreground mb-4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          {project.description}
                        </motion.p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={tech}
                              className="text-xs px-2 py-1 bg-primary/10 rounded-full"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                delay: 0.4 + techIndex * 0.05,
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                              }}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                        <div className="flex gap-4">
                          {project.githubUrl && (
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
                                  className="flex items-center gap-2"
                                >
                                  <Github className="h-4 w-4" />
                                  Code
                                </a>
                              </Button>
                            </motion.div>
                          )}
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
                                className="flex items-center gap-2"
                              >
                                <ExternalLink className="h-4 w-4" />
                                Ver ahora
                              </a>
                            </Button>
                          </motion.div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <motion.div
            className="flex justify-center gap-4 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0.7 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              className={`p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors`}
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              animate={!prevBtnEnabled ? "disabled" : "initial"}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              className={`p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors`}
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              animate={!nextBtnEnabled ? "disabled" : "initial"}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </motion.div>

          <motion.div
            className="flex justify-center gap-2 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0.7 }}
            transition={{ duration: 0.3 }}
          >
            {projects.map((_, index) => (
              <motion.button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === selectedIndex ? "bg-primary" : "bg-primary/20"
                }`}
                onClick={() => scrollTo(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                initial={{ scale: 0.8 }}
                animate={{
                  scale: index === selectedIndex ? 1.2 : 1,
                  backgroundColor:
                    index === selectedIndex
                      ? "var(--primary)"
                      : "var(--primary-20)",
                }}
                transition={{ duration: 0.2 }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
