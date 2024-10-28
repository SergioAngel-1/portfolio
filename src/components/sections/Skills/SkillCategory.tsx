import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { Skill } from "../../../types";
import { SkillCard } from "./SkillCard";
import { SkillsModal } from "./SkillsModal";

interface Props {
  title: string;
  skills: Skill[];
  icon: IconType;
}

export const SkillCategory = ({ title, skills, icon: CategoryIcon }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const MAX_VISIBLE_SKILLS =
    title === "Estrategias Web" || title === "Herramientas" || title === "Habilidades Sociales" ? 5 : 6;
  const hasMoreSkills = skills.length > MAX_VISIBLE_SKILLS;
  const visibleSkills = skills.slice(0, MAX_VISIBLE_SKILLS);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center space-x-2"
      >
        <CategoryIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        <h3 className="text-xl font-semibold">{title}</h3>
      </motion.div>

      <div className="flex gap-4 overflow-hidden py-4">
        {visibleSkills.map((skill, index) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            index={index}
            totalItems={MAX_VISIBLE_SKILLS}
          />
        ))}
        {hasMoreSkills && (
          <SkillCard
            index={MAX_VISIBLE_SKILLS}
            isViewMore
            onClick={() => setIsModalOpen(true)}
            totalItems={MAX_VISIBLE_SKILLS}
          />
        )}
      </div>

      <SkillsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        skills={skills}
        CategoryIcon={CategoryIcon}
      />
    </div>
  );
};
