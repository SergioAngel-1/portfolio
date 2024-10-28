import { mainProjects, practiceProjects } from "../../../data/projects";
import { ProjectsCarousel } from "./ProjectsCarousel";
import { SectionWrapper } from "../../shared/SectionWrapper";

export const Projects = () => {
  return (
    <>
      <SectionWrapper
        id="mis-proyectos"
        title="Clientes Destacados"
        gradientPosition="left"
      >
        <ProjectsCarousel
          projects={mainProjects}
          slidesPerView={2}
          isMainProjects={true}
        />
      </SectionWrapper>

      <SectionWrapper
        id="mis-proyectos-de-practica"
        title="Mis proyectos de práctica"
        gradientPosition="right"
      >
        <ProjectsCarousel projects={practiceProjects} slidesPerView={4} />
      </SectionWrapper>
    </>
  );
};
