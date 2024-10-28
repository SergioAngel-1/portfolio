import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Project } from "../../../types";
import { ProjectCard } from "./ProjectCard";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Props {
  projects: Project[];
  slidesPerView: number;
  isMainProjects?: boolean;
}

export const ProjectsCarousel = ({
  projects,
  slidesPerView,
  isMainProjects = false,
}: Props) => {
  const swiperRef = useRef<SwiperType>();
  const navigationClass = isMainProjects
    ? "main-projects"
    : "practice-projects";

  return (
    <div className={`${navigationClass}-carousel`}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        navigation={{
          nextEl: `.${navigationClass}-next`,
          prevEl: `.${navigationClass}-prev`,
        }}
        pagination={{
          clickable: true,
          el: `.${navigationClass}-pagination`,
        }}
        breakpoints={{
          640: {
            slidesPerView: Math.min(2, slidesPerView),
          },
          1024: {
            slidesPerView: slidesPerView,
          },
        }}
        className="mb-0"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={project.id}>
            <ProjectCard project={project} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-navigation-wrapper">
        <button
          className={`${navigationClass}-prev`}
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous slide"
        />
        <div className={`${navigationClass}-pagination`} />
        <button
          className={`${navigationClass}-next`}
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next slide"
        />
      </div>
    </div>
  );
};
