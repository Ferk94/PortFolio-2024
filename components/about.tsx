'use client'
import React from "react";
import SectionHeading from "./section-heading";
import { MotionSection } from "../lib/motionTypes";
import { useSectionInView } from "@/lib/hooks";
import { useTranslation } from "react-i18next"; // importo hook para traducción

export default function AcercaDe() {
  const { ref } = useSectionInView("about", 0.5);
  const { t } = useTranslation();

  return (
    <MotionSection
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{t('aboutTitle')}{" "}</SectionHeading>
      <p className="mb-3">
        {t('aboutDescription')}{" "}
      </p>

      {/* <p>
        <span className="italic">Fuera del mundo del código</span>, me gusta jugar fútbol y aprender cosas nuevas. Actualmente estoy estudiando <span className="font-medium">historia, filosofía</span> y también aprendiendo a tocar la batería.
      </p> */}
    </MotionSection>
  );
}
