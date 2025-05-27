"use client";

import React, { useEffect, useState, createContext, useContext } from "react";
import i18next from "i18next";

type Language = "es" | "en";

type LanguageContextProviderProps = {
  children: React.ReactNode;
};

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export default function LanguageContextProvider({
  children,
}: LanguageContextProviderProps) {
  const [language, setLanguage] = useState<Language>("es");

  const toggleLanguage = () => {
    const newLang = language === "es" ? "en" : "es";
    setLanguage(newLang);
    window.localStorage.setItem("language", newLang);
    i18next.changeLanguage(newLang); // <- CAMBIO NECESARIO
    if (newLang === "en") {
      document.documentElement.classList.add("en");
    } else {
      document.documentElement.classList.remove("en");
    }
  };

  useEffect(() => {
    const localLanguage = window.localStorage.getItem("language") as Language | null;
    if (localLanguage) {
      setLanguage(localLanguage);
      i18next.changeLanguage(localLanguage); // <- SINCRONIZAR AL CARGAR
    } else {
      setLanguage("es");
      window.localStorage.setItem("language", "es");
      i18next.changeLanguage("es"); // <- IDIOMA POR DEFECTO
      document.documentElement.classList.remove("en");
    }
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (context === null) {
    throw new Error("useLanguage must be used within a LanguageContextProvider");
  }

  return context;
}
