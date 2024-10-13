import React from "react";
import { Code, Database, Palette } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    icon: Palette,
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Python", "Django"],
    icon: Code,
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "Redis", "Firebase"],
    icon: Database,
  },
];

const Skills: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full bg-white p-8 border-b border-gray-200">
      <div className="max-w-4xl">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Mis Habilidades
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <category.icon className="mx-auto mb-4 text-blue-500" size={48} />
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    <span className="text-gray-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
