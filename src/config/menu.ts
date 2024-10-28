import { MenuItem } from "../types";

export const menuItems: MenuItem[] = [
  {
    label: "Perfil",
    id: "perfil",
  },
  {
    label: "Habilidades",
    id: "mis-habilidades",
  },
  {
    label: "Clientes",
    id: "mis-proyectos",
  },
  {
    label: "Proyectos",
    id: "mis-proyectos-de-practica",
  },
  {
    label: "Contacto",
    id: "contacto",
  },
] as const;
