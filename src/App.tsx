import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const sections = [
  { id: "about", title: "Sobre mí", component: AboutMe },
  { id: "projects", title: "Proyectos", component: Projects },
  { id: "skills", title: "Habilidades", component: Skills },
  { id: "contact", title: "Contacto", component: Contact },
];

function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = containerRef.current.scrollLeft;
        const windowWidth = window.innerWidth;
        const sectionIndex = Math.round(scrollPosition / windowWidth);
        setActiveSection(sections[sectionIndex].id);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element && containerRef.current) {
      containerRef.current.scrollTo({
        left: element.offsetLeft,
        behavior: "smooth",
      });
    }
    setActiveSection(id);
    setMenuOpen(false);
  };

  const scrollToNextSection = () => {
    const currentIndex = sections.findIndex(
      (section) => section.id === activeSection
    );
    const nextIndex = (currentIndex + 1) % sections.length;
    scrollToSection(sections[nextIndex].id);
  };

  const scrollToPreviousSection = () => {
    const currentIndex = sections.findIndex(
      (section) => section.id === activeSection
    );
    const previousIndex =
      (currentIndex - 1 + sections.length) % sections.length;
    scrollToSection(sections[previousIndex].id);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Sergio Jáuregui</h1>
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <ul
            className={`md:flex ${
              menuOpen
                ? "block absolute top-full left-0 right-0 bg-white shadow-md"
                : "hidden"
            }`}
          >
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`nav-link ${
                    activeSection === section.id ? "active" : ""
                  }`}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div ref={containerRef} className="horizontal-container pt-16 bg-white border-b border-gray-200">
        {sections.map((Section) => (
          <section key={Section.id} id={Section.id} className="section">
            <Section.component />
          </section>
        ))}
      </div>

      <button
        onClick={scrollToPreviousSection}
        className="fixed left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300 z-10"
      >
        <ChevronLeft size={24} className="text-gray-700" />
      </button>
      <button
        onClick={scrollToNextSection}
        className="fixed right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300 z-10"
      >
        <ChevronRight size={24} className="text-gray-700" />
      </button>
    </div>
  );
}

export default App;
