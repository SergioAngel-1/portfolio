import React from "react";
import { User } from "lucide-react";

const AboutMe: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full bg-white p-8 border-b border-gray-200">
      <div className="max-w-2xl text-center">
        <User className="mx-auto mb-4 text-blue-500" size={64} />
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Sobre mí</h2>
        <p className="text-xl text-gray-600 mb-6">
          Soy un desarrollador web apasionado por crear experiencias digitales
          únicas y funcionales. Con experiencia en React, TypeScript y diseño
          responsivo, me esfuerzo por combinar creatividad y tecnología para
          resolver problemas complejos.
        </p>
        <a
          href="#contact"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors duration-300"
        >
          Contáctame
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
