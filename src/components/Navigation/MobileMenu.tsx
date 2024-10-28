import { motion, AnimatePresence } from "framer-motion";
import { FC } from "react";
import { FiX } from "react-icons/fi";
import { MenuItem } from "../../types";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  sections: MenuItem[];
  currentSection: string;
  onSectionChange: (sectionId: string) => void;
}

export const MobileMenu: FC<Props> = ({
  isOpen,
  onClose,
  sections,
  currentSection,
  onSectionChange,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          className="fixed inset-y-0 right-0 w-64 bg-white dark:bg-gray-900 shadow-lg z-50"
        >
          <div className="p-4">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
            >
              <FiX className="w-6 h-6" />
            </button>
            <nav className="mt-12">
              <ul className="space-y-4">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => {
                        onSectionChange(section.id);
                        onClose();
                      }}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        currentSection === section.id
                          ? "bg-gray-100 dark:bg-gray-800"
                          : "hover:bg-gray-50 dark:hover:bg-gray-800"
                      }`}
                    >
                      {section.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
