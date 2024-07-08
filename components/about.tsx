'use client'
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function AcercaDe() {
  const { ref } = useSectionInView("Acerca de");

  // rellenar aquí

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
        En el año 2021{" "}
        decidí seguir mi
        pasión por la programación. Me inscribí en un bootcamp llamado Henry
        y aprendí desarrollo web <span className="font-medium">full-stack</span>
        . <span className="italic">Mi parte favorita de programar</span> es el
        aspecto de resolución de problemas. Me <span className="underline">encanta</span> la
        sensación de encontrar una solución al problema que se presenta. Mi stack
        principal es{" "}
        <span className="font-medium">
          React, Next.js, Node.js, Sequelize, Express y PostgreSql
        </span>
        . También estoy familiarizado con TypeScript, NestJs, typeOrm y MongoDB. Siempre estoy
        buscando aprender nuevas tecnologías, por ejemplo, ahora estoy aprendiendo Astro.
        Actualmente estoy buscando una{" "}
        <span className="font-medium">posición de tiempo completo</span> como
        desarrollador de software.
      </p>

      <p>
        <span className="italic">Cuando no estoy programando</span>, disfruto
        jugando videojuegos También
        disfruto{" "}
        <span className="font-medium">aprender cosas nuevas</span>. Actualmente
        estoy aprendiendo sobre{" "}
        <span className="font-medium">historia y filosofía</span>. También estoy
        aprendiendo a tocar la batería.
      </p>
    </motion.section>
  );
}
