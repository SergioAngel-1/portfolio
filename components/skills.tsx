"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Desarrollo FullStack",
    skills: [
      "JavaScript",
      "React",
      "TailWind CSS",
      "Node.js",
      "API REST y SOAP",
      "Git",
      "HTML5",
      "CSS",
      "PHP",
      "Symfony",
      "MySQL",
      "GitHub",
      "GitLab",
      "PostgreSQL",
      "Bootstrap",
    ],
  },
  {
    title: "Estrategias Web",
    skills: [
      "Optimización SEO/SEM",
      "Análisis y mejora de UX/UI",
      "Wordpress",
      "WooCommerce",
      "Shopify",
      "Integración de marketing digital",
      "Pautas Digitales",
    ],
  },
  {
    title: "Herramientas / Otros",
    skills: [
      "CI/CD",
      "Seguridad en aplicaciones web (CSRF, XSS)",
      "Mejora en tiempos de carga",
      "Linux",
      "Excel",
      "Stress Tetsing",
      "CMD",
    ],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="py-16 md:py-20 bg-muted/50"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Habilidades y Tecnologías
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <Card key={category.title} className="p-6">
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
