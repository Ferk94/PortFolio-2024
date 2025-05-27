"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { useTranslation } from "react-i18next"; // importo hook para traducción
import { StaticImageData } from "next/image";

type ProjectProps = {
  title: string;
  date: string;
  description: string;
  tags: string[];
  imageUrl?: string | StaticImageData;
  videoUrl?: string | null;
  linkUrl?: string | null;
  index: number;
};


export default function Projects() {
  const { ref } = useSectionInView("projects", 0.5);
  const { t } = useTranslation();
  const translatedProjects: ProjectProps[] = projectsData.map((project, index) => ({
  title: t(`project_${project.title}`),
  date: project.date,
  description: t(`project_${project.description}`),
  tags: [...project.tags], 
  videoUrl: project.videoUrl,
  imageUrl: project.imageUrl,
  linkUrl: project.linkUrl,
  index
}));

  
// revisar
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>{t('projectTitle')}{" "}</SectionHeading>
      <div>
        {translatedProjects.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
