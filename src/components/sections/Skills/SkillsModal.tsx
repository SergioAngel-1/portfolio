import { motion, AnimatePresence } from "framer-motion";
import { IconType } from "react-icons";
import { FiX } from "react-icons/fi";
import { Skill } from "../../../types";
import { SkillCard } from "./SkillCard";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  skills: Skill[];
  CategoryIcon: IconType;
}

export const SkillsModal = ({
  isOpen,
  onClose,
  title,
  skills,
  CategoryIcon,
}: Props) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-2xl max-h-[80vh] overflow-hidden"
          >
            <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <CategoryIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-semibold">{title}</h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto">
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={index}
                    isInModal={true}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};