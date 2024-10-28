import {
  DiJavascript1,
  DiReact,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiNodejs,
  DiPhp,
  DiMysql,
  DiSymfony,
  DiGit,
  DiGithub,
  DiWordpress,
  DiCode,
  DiDatabase,
} from "react-icons/di";
import {
  SiTailwindcss,
  SiShopify,
  SiWoocommerce,
  SiSemanticscholar,
  SiWebpack,
  SiLinux,
  SiGoogleanalytics,
  SiGitlab,
} from "react-icons/si";

import {
  MdOutlineSyncProblem,
  MdSocialDistance,
  MdOutlineMoreTime,
  MdOutlineScreenSearchDesktop,
  MdOutlineQueryStats,
  MdOutlineSecurity,
  MdOutlineTimer10,
} from "react-icons/md";

import { FaTools, FaPeopleArrows, FaJava, FaFileExcel } from "react-icons/fa";
import { FaEarListen } from "react-icons/fa6";
import { TbMobiledata } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandSpeedtest, TbSeo } from "react-icons/tb";
import { VscTerminalCmd } from "react-icons/vsc";
import { RiSpeakFill } from "react-icons/ri";
import { GiTeamIdea } from "react-icons/gi";

import { Skill } from "../types";

export const skills: Skill[] = [
  // Desarrollo Frontend
  {
    name: "JavaScript",
    icon: DiJavascript1,
    category: "frontend",
  },
  {
    name: "React",
    icon: DiReact,
    category: "frontend",
  },
  {
    name: "HTML5",
    icon: DiHtml5,
    category: "frontend",
  },
  {
    name: "CSS",
    icon: DiCss3,
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    category: "frontend",
  },
  {
    name: "Bootstrap",
    icon: DiBootstrap,
    category: "frontend",
  },
  {
    name: "Git",
    icon: DiGit,
    category: "frontend",
  },
  {
    name: "GitHub",
    icon: DiGithub,
    category: "frontend",
  },
  {
    name: "GitLab",
    icon: SiGitlab,
    category: "frontend",
  },

  // Desarrollo Backend
  {
    name: "Node.js",
    icon: DiNodejs,
    category: "backend",
  },
  {
    name: "API REST y SOAP",
    icon: TbMobiledata,
    category: "backend",
  },
  {
    name: "PHP",
    icon: DiPhp,
    category: "backend",
  },
  {
    name: "Java",
    icon: FaJava,
    category: "backend",
  },
  {
    name: "MySQL",
    icon: DiMysql,
    category: "backend",
  },
  {
    name: "PostgreSQL",
    icon: BiLogoPostgresql,
    category: "backend",
  },
  {
    name: "Symfony",
    icon: DiSymfony,
    category: "backend",
  },

  // Estrategias Web
  {
    name: "Optimización SEO/SEM",
    icon: TbSeo,
    category: "strategies",
  },
  {
    name: "Análisis y mejora de UX/UI",
    icon: SiWebpack,
    category: "strategies",
  },
  {
    name: "WordPress",
    icon: DiWordpress,
    category: "strategies",
  },
  {
    name: "WooCommerce",
    icon: SiWoocommerce,
    category: "strategies",
  },
  {
    name: "Shopify",
    icon: SiShopify,
    category: "strategies",
  },
  {
    name: "Integración de marketing digital",
    icon: MdOutlineScreenSearchDesktop,
    category: "strategies",
  },
  {
    name: "Pautas Digitales",
    icon: SiSemanticscholar,
    category: "strategies",
  },

  // Herramientas / Otros
  {
    name: "CI/CD",
    icon: MdOutlineQueryStats,
    category: "tools",
  },
  {
    name: "Seguridad en aplicaciones web (CSRF, XSS)",
    icon: MdOutlineSecurity,
    category: "tools",
  },
  {
    name: "Mejora en tiempos de carga",
    icon: MdOutlineTimer10,
    category: "tools",
  },
  {
    name: "Linux",
    icon: SiLinux,
    category: "tools",
  },
  {
    name: "Excel",
    icon: FaFileExcel,
    category: "tools",
  },
  {
    name: "Stress Testing",
    icon: TbBrandSpeedtest,
    category: "tools",
  },
  {
    name: "CMD",
    icon: VscTerminalCmd,
    category: "tools",
  },

  // Habilidades Sociales
  {
    name: "Comunicación Efectiva",
    icon: RiSpeakFill,
    category: "softSkills",
  },
  {
    name: "Resolución de Problemas",
    icon: MdOutlineSyncProblem,
    category: "softSkills",
  },
  {
    name: "Adaptabilidad",
    icon: MdSocialDistance,
    category: "softSkills",
  },
  {
    name: "Trabajo en Equipo",
    icon: GiTeamIdea,
    category: "softSkills",
  },
  {
    name: "Gestión de Tiempo",
    icon: MdOutlineMoreTime,
    category: "softSkills",
  },
  {
    name: "Empatía y Escucha Atractiva",
    icon: FaEarListen,
    category: "softSkills",
  },
];

export const categoryIcons = {
  frontend: DiCode,
  backend: DiDatabase,
  strategies: SiGoogleanalytics,
  tools: FaTools,
  softSkills: FaPeopleArrows,
};

export const categoryNames = {
  frontend: "Frontend",
  backend: "Backend",
  strategies: "Estrategias Web",
  tools: "Herramientas",
  softSkills: "Habilidades Sociales",
};
