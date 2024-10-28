import { SectionWrapper } from "../../shared/SectionWrapper";
import { skills, categoryIcons, categoryNames } from "../../../data/skills";
import { SkillCategory } from "./SkillCategory";
import { Skill } from "../../../types";

export const Skills = () => {
  const categorizedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <SectionWrapper
      id="mis-habilidades"
      title="Mis habilidades"
      gradientPosition="right"
    >
      <div className="grid gap-16">
        {Object.entries(categorizedSkills).map(([category, skills]) => (
          <SkillCategory
            key={category}
            title={categoryNames[category as keyof typeof categoryNames]}
            skills={skills}
            icon={categoryIcons[category as keyof typeof categoryIcons]}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};
