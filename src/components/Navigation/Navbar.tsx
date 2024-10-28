import { useState } from "react";
import { FiMenu, FiMoon, FiSun } from "react-icons/fi";
import { MobileMenu } from "./MobileMenu";
import { useTheme } from "../../hooks/useTheme";
import { useScrollTo } from "../../hooks/useScrollTo";
import { useActiveSection } from "../../hooks/useActiveSection";
import { menuItems } from "../../config/menu";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const scrollTo = useScrollTo();
  const activeSection = useActiveSection();

  const handleSectionClick = (sectionId: string) => {
    scrollTo(sectionId);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm z-[9998]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="nav-brand gradient-text text-2xl font-bold">
                Portfolio
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSectionClick(item.id)}
                  className={`nav-item px-2 py-1 ${
                    activeSection === item.id
                      ? "gradient-text font-semibold"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label={
                  isDark ? "Activar modo claro" : "Activar modo oscuro"
                }
              >
                {isDark ? (
                  <FiSun className="w-5 h-5 theme-icon theme-icon-sun text-gray-600 dark:text-gray-300" />
                ) : (
                  <FiMoon className="w-5 h-5 theme-icon theme-icon-moon text-gray-600 dark:text-gray-300" />
                )}
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label={
                  isDark ? "Activar modo claro" : "Activar modo oscuro"
                }
              >
                {isDark ? (
                  <FiSun className="w-5 h-5 theme-icon theme-icon-sun text-gray-600 dark:text-gray-300" />
                ) : (
                  <FiMoon className="w-5 h-5 theme-icon theme-icon-moon text-gray-600 dark:text-gray-300" />
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Abrir menú"
              >
                <FiMenu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        sections={menuItems}
        currentSection={activeSection}
        onSectionChange={handleSectionClick}
      />
    </>
  );
};
