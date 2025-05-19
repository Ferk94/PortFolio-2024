'use client'
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function AcercaDe() {
  const { ref } = useSectionInView("Acerca de");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Acerca de</SectionHeading>
      <p className="mb-3">
        En 2021 decidí seguir mi pasión por la programación e ingresé al bootcamp Henry, donde me formé como desarrollador web <span className="font-medium">full-stack</span>. <span className="italic">Lo que más disfruto de programar</span> es la resolución de problemas: <span className="underline">me apasiona</span> encontrar soluciones creativas y eficientes. Mi stack principal incluye{" "}
        <span className="font-medium">React, Next.js, Node.js, Express, Sequelize y PostgreSQL</span>. También tengo experiencia con TypeScript, NestJS, TypeORM y MongoDB. Me mantengo en constante aprendizaje, actualmente explorando tecnologías como Astro. Además, tengo conocimientos y experiencia en tareas de <span className="font-medium">DevOps</span>, utilizando herramientas como <span className="font-medium">Nginx, Ubuntu y DigitalOcean</span>. 
        Estoy en la búsqueda de una <span className="font-medium">posición full-time</span> como desarrollador de software.
      </p>

      <p>
        <span className="italic">Fuera del mundo del código</span>, me gusta jugar fútbol y aprender cosas nuevas. Actualmente estoy estudiando <span className="font-medium">historia, filosofía</span> y también aprendiendo a tocar la batería.
      </p>
    </motion.section>
  );
}
