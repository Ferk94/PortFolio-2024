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
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "07-2023 - presente",
  },
  {
    title: "Desarrollo Full Stack independiente",
    location: "Buenos Aires, Argentina",
    description:
      "Trabajé aproximadamente 2 años como desarrollador independiente donde destaco dos grandes proyectos que finalicé, QBook y Hollywood.",
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
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Food Project",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
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
  "Framer Motion",
] as const;
