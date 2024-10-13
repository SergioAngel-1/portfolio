import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full bg-white p-8 border-b border-gray-200">
      <div className="max-w-2xl text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">Contacto</h2>
        <p className="text-xl text-gray-600 mb-8">
          ¿Interesado en trabajar juntos? ¡Contáctame a través de cualquiera de
          estos medios!
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="mailto:tu@email.com"
            className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
          >
            <Mail size={32} />
          </a>
          <a
            href="https://github.com/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
          >
            <Github size={32} />
          </a>
          <a
            href="https://linkedin.com/in/tu-perfil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-800 transition-colors duration-300"
          >
            <Linkedin size={32} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
