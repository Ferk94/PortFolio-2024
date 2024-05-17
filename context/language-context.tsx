"use client";

import React, { useEffect, useState, createContext, useContext } from "react";

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
    if (language === "es") {
      setLanguage("en");
      window.localStorage.setItem("language", "en");
      document.documentElement.classList.add("en");
    } else {
      setLanguage("es");
      window.localStorage.setItem("language", "es");
      document.documentElement.classList.remove("es");
    }
  };

  useEffect(() => {
      const localLanguage = window.localStorage.getItem("language") as Language | null;
      if(localLanguage) setLanguage(localLanguage)
      else {
        setLanguage("es")
        window.localStorage.setItem("language", "es");
        document.documentElement.classList.remove("es");
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
  console.log(context, 'context')

//   if (context === null) {
//     throw new Error("useLanguage must be used within a LanguageContextProvider");
//   }

  return {language: 'es', toggleLanguage: () => console.log('la')};
}
