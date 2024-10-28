import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";

export const AboutMe = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="sobre-mi"
      className="min-h-[70vh] md:min-h-screen relative flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(
            circle at top,
            rgba(76, 165, 255, 0.05) 0%,
            rgba(37, 99, 235, 0.15) 25%,
            transparent 40%
          )`,
        }}
      />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h1 className="gradient-text text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Desarrollador de Soluciones Web Impactantes y Escalables
        </h1>
        <div className="space-y-6">
          <p className="text-lg sm:text-xl">
            Apasionado por transformar ideas en experiencias digitales fluidas y
            eficientes. Mi enfoque se centra en crear proyectos únicos que
            combinan creatividad y funcionalidad.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <div className="flex flex-wrap justify-center gap-4 pt-8">
              <motion.a
                href="https://github.com/SergioAngel-1"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                aria-label="GitHub"
              >
                <motion.span
                  className="text-xl"
                  animate={{ rotate: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <FiGithub className="w-5 h-5 group-hover:rotate-[360deg] transition-transform duration-500" />
                </motion.span>
                <span className="font-medium">GitHub</span>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/sergio-jauregui-angel/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                aria-label="LinkedIn"
              >
                <motion.span className="text-xl">
                  <FiLinkedin className="w-5 h-5 group-hover:scale-125 transition-transform duration-500" />
                </motion.span>
                <span className="font-medium">LinkedIn</span>
              </motion.a>

              <motion.a
                href="/HVSergioJauregui.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center space-x-2 group"
              >
                <motion.span>
                  <FiDownload className="w-5 h-5 group-hover:translate-y-[-4px] transition-transform duration-300" />
                </motion.span>
                <span>Descargar CV</span>
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
