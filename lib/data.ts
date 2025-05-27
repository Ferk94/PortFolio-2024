import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "home",
    hash: "#home",
  },
  {
    name: "about",
    hash: "#about",
  },
  {
    name: "projects",
    hash: "#projects",
  },
  {
    name: "skills",
    hash: "#skills",
  },
  {
    name: "experience",
    hash: "#experience",
  },
  {
    name: "contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
  title: "portfolioArtist",
  date: "11-05-2025 / 18-05-2025",
  description: "portfolioArtistDesc",
  tags: ["Next.js", "TypeScript", "CSS Modules", "SPA", "Responsive Design", "Framer Motion"],
  imageUrl: corpcommentImg,
  videoUrl: null,
  linkUrl: 'https://portfolio-juanma-brown.vercel.app/',
  index: 0
  },
  {
    title: "hollywoodSP",
    date: "08-2022/12-2022",
    description:
      "hollywoodSPDesc",
    tags: ["Node.js", "Express", "Firebase", "React",  "Redux", "Tailwind"],
    imageUrl: corpcommentImg,
    videoUrl: null,
    linkUrl: null,
    index: 0
  },
  {
    title: "qbook",
    date: "04-2022/07-2022",
    description:
      "qbookDesc",
    tags: ["React", "TypeScript", "Next", "Node", "Express", "PostgreSQL"],
    imageUrl: rmtdevImg,
    videoUrl: "https://youtu.be/9b3nJn8gZAc",
    linkUrl: "http://www.qbook.digital",
    index: 1
  },
  {
    title: "techoHiring",
    date: "08-2021/10-2021",
    description:
      "techoHiringDesc",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux", "Node.js", "Express", "Sequelize", "PostgreSQL"],
    imageUrl: rmtdevImg,
    videoUrl: "https://youtu.be/GMjGTJrUBJo",
    linkUrl: null,
    index: 2
  },
  
  {
    title: "foodProject",
    date: "08-2021",
    description:
      "foodProjectDesc",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "Redux", "CSS Modules"],
    imageUrl: wordanalyticsImg,
    videoUrl: null,
    linkUrl: null,
    index: 3
  },
] as const;

export const experiencesData = [
  {
    title: "wpDevOnePage",
    location: "Tucumán, Argentina",
    description:
      'wpDevOnePageDesc',
    icon: React.createElement(FaReact),
    date: "07-2024 - 02-2025",
  },
  {
    title: "fullstackDevAythen",
    location: "Barcelona, España",
    description:
      'fullstackDevAythenDesc',
    icon: React.createElement(FaReact),
    date: "07-2023 - 02-2025",
  },
  {
    title: "freelanceDev",
    location: "Buenos Aires, Argentina",
    description:
      "freelanceDevDesc",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "soyHenryGrad",
    location: "Buenos Aires, Argentina",
    description:
      "soyHenryGradDesc",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  }
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
