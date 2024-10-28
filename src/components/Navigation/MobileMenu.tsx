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
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999]"
            onClick={onClose}
          />

          {/* Menu Content */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-[280px] bg-white dark:bg-gray-900 shadow-xl z-[9999] flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Menú
              </h2>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              <nav className="p-4">
                <ul className="space-y-2">
                  {sections.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => {
                          onSectionChange(item.id);
                          onClose();
                        }}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                          currentSection === item.id
                            ? "bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 font-medium"
                            : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                © 2024 Portfolio
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
