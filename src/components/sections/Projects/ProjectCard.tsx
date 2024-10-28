import { motion } from "framer-motion";
import { useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Project } from "../../../types";

interface Props {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: Props) => {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const [iframeError, setIframeError] = useState(false);

  const handleIframeLoad = () => {
    setIsIframeLoaded(true);
  };

  const handleIframeError = () => {
    setIframeError(true);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="card group overflow-hidden"
    >
      <div className="relative aspect-video mb-4 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
        {/* Computer frame */}
        <div className="absolute inset-0 bg-gray-800 dark:bg-gray-900 rounded-lg p-2 shadow-lg">
          {/* Monitor stand */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-2 bg-gray-700 dark:bg-gray-800 rounded-t-lg" />
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 bg-gray-600 dark:bg-gray-700 rounded-lg" />

          {/* Screen bezel */}
          <div className="relative h-full bg-gray-200 dark:bg-gray-800 rounded-md overflow-hidden border-4 border-gray-700 dark:border-gray-600">
            {/* Browser toolbar */}
            <div className="absolute top-0 left-0 right-0 h-6 bg-gray-300 dark:bg-gray-700 flex items-center px-2 z-20">
              <div className="flex space-x-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                <div className="w-2 h-2 rounded-full bg-green-500" />
              </div>
              {/* URL bar */}
              <div className="ml-2 flex-1 h-3 bg-gray-100 dark:bg-gray-600 rounded" />
            </div>

            {/* Content area with scaled iframe */}
            <div className="absolute inset-0 top-6">
              {!iframeError ? (
                <>
                  {!isIframeLoaded && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800">
                      <img
                        src={`/img/projects/${project.id}.jpg`}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30">
                        <div className="w-8 h-8 border-4 border-blue-600/20 border-t-blue-600 rounded-full animate-spin mb-3" />
                        <p className="text-white text-sm font-medium animate-pulse">
                          Cargando vista previa en tiempo real...
                        </p>
                      </div>
                    </div>
                  )}
                  <div className="w-full h-full overflow-hidden">
                    <iframe
                      src={project.liveUrl}
                      className={`w-[200%] h-[200%] origin-top-left scale-50 transition-opacity duration-300 ${
                        isIframeLoaded ? "opacity-100" : "opacity-0"
                      }`}
                      style={{
                        transform: "scale(0.5)",
                        transformOrigin: "top left",
                      }}
                      onLoad={handleIframeLoad}
                      onError={handleIframeError}
                      title={project.title}
                      loading="lazy"
                      sandbox="allow-same-origin allow-scripts"
                    />
                  </div>
                </>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={`/img/projects/${project.id}.jpg`}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>

            {/* Screen reflection */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />

            {/* Screen glare */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/3 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {project.description}
      </p>

      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 1, scale: 1 }}
              whileHover={{
                scale: 1.05,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                  delay: i * 0.05,
                },
              }}
              className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 
                       dark:text-blue-400 rounded-full cursor-default hover:bg-blue-200 
                       dark:hover:bg-blue-800 transition-colors"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        <div className="flex space-x-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
            >
              <FiGithub className="w-5 h-5" />
              <span>Código</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
            >
              <FiExternalLink className="w-5 h-5" />
              <span>Ver ahora</span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};
