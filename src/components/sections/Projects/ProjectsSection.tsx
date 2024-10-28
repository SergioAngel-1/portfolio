import { SectionWrapper } from "../../shared/SectionWrapper";
import { ProjectCard } from "./ProjectCard";
import { Project } from "../../../types";

interface Props {
  id: string;
  title: string;
  projects: Project[];
}

export const ProjectsSection = ({ id, title, projects }: Props) => {
  return (
    <SectionWrapper id={id} title={title}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};
