"use client";

// import { useTheme } from "@/context/theme-context";
import { useLanguage } from "@/context/language-context";
import React from "react";
import { BsGlobe, BsGlobe2 } from "react-icons/bs";

export default function LanguageSwitch() {
  const { language, toggleLanguage } = useLanguage();

  console.log(language, 'deberia decir es harcodeado')

  const onHover = () => {
    const button = document.getElementById(`button-${language}`)
    const newNode = document.createElement('div')
    newNode.style.backgroundColor = 'red'
    newNode.id = 'child'
    newNode.style.position = 'absolute';
    newNode.style.bottom = '120%';
    newNode.style.left = '50%';
    newNode.style.width = '70px'
    newNode.style.borderRadius = '5px'
    newNode.style.transform = 'translateX(-50%)';
    newNode.style.padding = '10px';
    newNode.innerText = 'Próximamente';
    // newNode.style.fontStyle = 'center'
    newNode.style.fontSize = '10px'
    newNode.style.display = 'flex'
    newNode.style.textAlign = 'center'
    newNode.style.justifyContent = 'center'
    if(button)
    button.appendChild(newNode)
  }

  const onMouseLeave = () => {
    const button = document.getElementById(`button-${language}`)

    if(button) {
        const child = document.getElementById('child')
        if(child)
        button.removeChild(child)
    }
     
  }

  return (
    <button
      id={`button-${language}`}
      className="fixed bottom-20 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={toggleLanguage}
      onMouseEnter={onHover}
      onMouseLeave={onMouseLeave}
    >
      {language === "es" ? <BsGlobe /> : <BsGlobe2 />}
    </button>
  );
}
