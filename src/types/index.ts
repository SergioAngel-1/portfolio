import { IconType } from "react-icons";

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  icon: IconType;
  category: "frontend" | "backend" | "tools" | "strategies" | "softSkills";
}

export interface ProfileItem {
  icon: IconType;
  title: string;
  description: string;
}

export interface MenuItem {
  label: string;
  id: string;
}
