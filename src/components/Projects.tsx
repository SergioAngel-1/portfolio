import React from "react";
import { Code, Globe, ShoppingCart } from "lucide-react";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "Una plataforma de comercio electrónico completa con carrito de compras y pasarela de pago.",
    icon: ShoppingCart,
  },
  {
    title: "Blog Personal",
    description:
      "Un blog personal con sistema de gestión de contenidos y diseño responsivo.",
    icon: Globe,
  },
  {
    title: "API REST",
    description:
      "Una API RESTful para gestionar datos de usuarios y autenticación.",
    icon: Code,
  },
];

const Projects: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full bg-white p-8 border-b border-gray-200">
      <div className="max-w-4xl">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Mis Proyectos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <project.icon className="mx-auto mb-4 text-blue-500" size={48} />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {project.title}
              </h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
