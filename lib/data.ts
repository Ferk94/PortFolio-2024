import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Inicio",
    hash: "#home",
  },
  {
    name: "Acerca de",
    hash: "#about",
  },
  {
    name: "Proyectos",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experiencia",
    hash: "#experience",
  },
  {
    name: "Contacto",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Desarrollador full stack web/móbil en Aythen",
    location: "Barcelona, España",
    description:
      'Lideré el apartado "Editor" durante 10 meses de la web Aythen, que consistía en replicar las funcionalidades de Figma con algunas características propias. Trabajé tanto en optimizaciones de backend como manipulando el dom en front, entre muchas otras tareas.',
    icon: React.createElement(FaReact),
    date: "07-2023 - presente",
  },
  {
    title: "Desarrollo Full Stack independiente",
    location: "Buenos Aires, Argentina",
    description:
      "Trabajé aproximadamente 2 años como desarrollador independiente donde destaco dos proyecto, QBook y Hollywood SP.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Graduado de bootCamp SOY HENRY",
    location: "Buenos Aires, Argentina",
    description:
      "Me gradué en el bootCamp Soy Henry, colaboré en el proyecto TECHO interviews, e inmediatamente empecé a trabajar como desarrollador independiente..",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  }
] as const;

export const projectsData = [
  {
  title: "Portfolio Profesor & Artista",
  date: "11-05-2025 / 18-05-2025",
  description:
    "Desarrollé una SPA con Next.js para presentar el perfil profesional y artístico de un baterista, con navegación dinámica, diseño responsivo y secciones interactivas.",
  tags: ["Next.js", "TypeScript", "CSS Modules", "SPA", "Responsive Design", "Framer Motion"],
  imageUrl: corpcommentImg,
  videoUrl: null,
  linkUrl: 'https://portfolio-juanma-brown.vercel.app/',
  index: 0
  },
  {
    title: "Hollywood SP",
    date: "08-2022/12-2022",
    description:
      "Desarrollé una REST API integral utilizando Firebase, y participé en la construcción del cliente para una innovadora aplicación web orientada a discotecas.",
    tags: ["Node.js", "Express", "Firebase", "React",  "Redux", "Tailwind"],
    imageUrl: corpcommentImg,
    videoUrl: null,
    linkUrl: null,
    index: 0
  },
  {
    title: "Qbook",
    date: "04-2022/07-2022",
    description:
      "Desarrollé una REST API y participé notoriamente en la construcción y conexión del cliente para importante aplicación web de viaje de egresados.",
    tags: ["React", "TypeScript", "Next", "Node", "Express", "PostgreSQL"],
    imageUrl: rmtdevImg,
    videoUrl: "https://youtu.be/9b3nJn8gZAc",
    linkUrl: "http://www.qbook.digital",
    index: 1
  },
  {
    title: "TECHO hiring",
    date: "08-2021/10-2021",
    description:
      "Proyecto cuyo desafío consistía en continuar un Proyecto con código heredado hecho 100% con TypeScript fullstack para ONG TECHO.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux", "Node.js", "Express", "Sequelize", "PostgreSQL"],
    imageUrl: rmtdevImg,
    videoUrl: "https://youtu.be/GMjGTJrUBJo",
    linkUrl: null,
    index: 2
  },
  
  {
    title: "Food Project",
    date: "08-2021",
    description:
      "Es un recetario que consume la api de spoonacular. Podes filtrar y buscar la receta q más te guste y acceder a todos sus detalles, y guardar recetas propias en la página.",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "Redux", "CSS Modules"],
    imageUrl: wordanalyticsImg,
    videoUrl: null,
    linkUrl: null,
    index: 3
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Git",
  "React",
  "Redux",
  "Next.js",
  "Tailwind",
  "Node.js",
  "Express",
  "Sequelize",
  "Nest.js",
  "TypeOrm",
  "PostgreSQL",
  "MySql",
  "MongoDB",
  "Firebase",
  "Framer Motion",
] as const;
