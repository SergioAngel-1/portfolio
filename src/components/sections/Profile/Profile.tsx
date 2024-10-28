import { motion } from "framer-motion";
import { SectionWrapper } from "../../shared/SectionWrapper";
import { profiles } from "../../../data/profile";

export const Profile = () => {
  return (
    <SectionWrapper
      id="perfil"
      title="Perfil Profesional"
      gradientPosition="left"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {profiles.map((profile, index) => (
          <motion.div
            key={profile.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="card group hover:scale-105 transition-transform duration-300"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                <profile.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold">{profile.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {profile.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};
