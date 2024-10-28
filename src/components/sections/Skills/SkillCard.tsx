import { motion } from "framer-motion";
import { useState } from "react";
import { Skill } from "../../../types";
import { FiPlus } from "react-icons/fi";

interface Props {
  skill?: Skill;
  index: number;
  isViewMore?: boolean;
  onClick?: () => void;
  totalItems?: number;
  isInModal?: boolean;
}

export const SkillCard = ({
  skill,
  index,
  isViewMore,
  onClick,
  totalItems = 6,
  isInModal = false,
}: Props) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const cardWidth = isInModal
    ? "w-auto min-w-[200px]"
    : totalItems === 5
    ? "md:w-[192px]"
    : "md:w-[160px]";

  if (isViewMore) {
    return (
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        onClick={onClick}
        className={`${cardWidth} w-full flex-shrink-0`}
      >
        <div className="card group hover:scale-105 cursor-pointer h-full border border-dashed border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-white dark:from-blue-900/20 dark:to-gray-800">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-blue-100/50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
              <FiPlus className="w-5 h-5" />
            </div>
            <span className="font-medium text-blue-600 dark:text-blue-400">
              Ver más
            </span>
          </div>
        </div>
      </motion.button>
    );
  }

  if (!skill) return null;

  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className={`${cardWidth} w-full flex-shrink-0 relative group`}
      onMouseEnter={() => !isInModal && setShowTooltip(true)}
      onMouseLeave={() => !isInModal && setShowTooltip(false)}
    >
      <div className="card hover:scale-105 h-full">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
            <Icon className="w-5 h-5" />
          </div>
          <span className={`font-medium ${!isInModal && "truncate"}`}>
            {skill.name}
          </span>
        </div>
      </div>
      {showTooltip && (
        <div
          className="fixed z-50 px-2 py-1 text-sm text-white bg-gray-900 dark:bg-gray-700 rounded shadow-lg pointer-events-none transform -translate-x-1/2 -translate-y-full whitespace-nowrap"
          style={{
            left: "var(--mouse-x)",
            top: "var(--mouse-y)",
          }}
        >
          {skill.name}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-2 h-2 bg-gray-900 dark:bg-gray-700 rotate-45" />
        </div>
      )}
    </motion.div>
  );
};
