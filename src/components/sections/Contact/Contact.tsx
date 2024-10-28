import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiPhone } from "react-icons/fi";
import { ContactForm } from "./ContactForm";

const contactMethods = [
  {
    icon: FiMail,
    label: "Email",
    value: "sergiojauregui239@gmail.com",
    href: "mailto:sergiojauregui239@gmail.com",
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "github.com/SergioAngel-1",
    href: "https://github.com/SergioAngel-1?tab=repositories",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/sergio-jauregui-angel",
    href: "https://www.linkedin.com/in/sergio-jauregui-angel/",
  },
  {
    icon: FiPhone,
    label: "Teléfono",
    value: "+57 3203795827",
    href: "tel:3203795827",
  },
];

export const Contact = () => {
  return (
    <section
      id="contacto"
      className="min-h-screen flex flex-col justify-center py-16 relative"
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(
            circle at bottom,
            rgba(76, 165, 255, 0.05) 0%,
            rgba(37, 99, 235, 0.15) 25%,
            transparent 40%
          )`,
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
        <h2 className="text-4xl font-bold mb-12 text-center">Contacto</h2>
        <div className="grid md:grid-cols-[1fr,1.5fr] gap-12">
          <div className="space-y-6">
            <p className="text-lg">
              ¿Tienes alguna pregunta o propuesta? No dudes en contactarme.
              Estaré encantado de escuchar tus ideas y colaborar en futuros
              proyectos.
            </p>

            <div className="space-y-4">
              {contactMethods.map(({ icon: Icon, label, value, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{label}</p>
                    <p className="text-sm opacity-75">{value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-8 text-center">
                Déjame un mensaje
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
