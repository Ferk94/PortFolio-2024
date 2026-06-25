'use client'
import React, { useEffect } from "react";
import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import LanguageSwitch from "@/components/language-switch";
import ThemeContextProvider from "@/context/theme-context";
import LanguageContextProvider from "@/context/language-context";
import { Toaster } from "react-hot-toast";
import I18nProvider from "../translations/I18nProvider"; // ajusta ruta

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Fernando Kaganovicz | Personal Portfolio",
//   description: "con más de 4 años de experiencia en desarrollo full stack",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  useEffect(() => {
    // 1. Creamos el elemento script
    const script = document.createElement('script');
    
    // 2. Configuramos el ID y la fuente del bundle
    script.id = "beast-webchat-embed";
    script.src = "https://chat-widget-static.hivara.ai/embed.js";
    script.async = true;
    
    // 3. Añadimos los data-attributes de configuración
    script.setAttribute('data-api-url', 'https://chat-widget.hivara.ai');
    script.setAttribute('data-org-id', '5');
    script.setAttribute('data-channel-id', '245');
    script.setAttribute('data-platform-name', 'Platense');
    script.setAttribute('data-theme', 'dark');
    script.setAttribute('data-debug', 'true');
    script.setAttribute('data-niche', 'marketing');
    script.setAttribute('data-chat-open', 'true')
    script.setAttribute('data-welcome-message', 'Hola, inicia sesión aquí');
    script.setAttribute('data-first-message', 'Bienvenidos a platense! ¿Cómo puedo ayudarte?');
    script.setAttribute('data-icon-url', '');

    // 4. Inyectamos el script en el documento
    document.body.appendChild(script);

    // Opcional: Limpieza al desmontar el componente
    return () => {
      const existingScript = document.getElementById('beast-webchat-embed');
      if (existingScript) {
        existingScript.remove();
      }
      // También podrías querer eliminar el contenedor del chat si el script lo genera fuera del árbol de React
    };
  }, []);
//   const [chatOpen, setChatOpen] = useState(false);
//   useEffect(() => {
//   const handleMessage = (event: MessageEvent) => {
//     // console.log('PADRE recibió mensaje:', event.data);

//     if (event.data === "openChat") setChatOpen(true);
//     if (event.data === "closeChat") setChatOpen(false);
//   };

//   const iframe = document.getElementById('chatbot-iframe') as HTMLIFrameElement | null;

//    iframe?.contentWindow?.postMessage(
//         { type: 'init', organizationId: 1, channelId: 1 },
//         // 'https://chat-widget.hivara.ai'
//         "http://localhost:5173"
//       );

//   window.addEventListener("message", handleMessage);
//   return () => window.removeEventListener("message", handleMessage);
// }, []);

  // Estilos del iframe según el estado
  // const iframeStyle: React.CSSProperties = chatOpen
  //   ? {
  //     position: "fixed",
  //     bottom: 24,
  //     right: 24,
  //     width: "28rem",   // Tailwind w-80 (320px)
  //     height: "28rem",  // Tailwind h-96 (384px)
  //     border: "none",
  //     zIndex: 9999,
  //     borderRadius: "12px",
  //     // boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
  //   }
  //   : {
  //     position: "fixed",
  //     bottom: '40px',
  //     right: '30px',
  //     width: '80px',
  //     height: '80px',
  //     border: "none",
  //     zIndex: 9999,
  //     borderRadius: "50%",
  //     // boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
  //     overflow: "hidden",
  //   };

  return (
    <html lang="en" className="!scroll-smooth">
      <head >
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <I18nProvider>
          <LanguageContextProvider>
            <ThemeContextProvider>
              <ActiveSectionContextProvider>
                <Header />
                {children}
                <Footer />
                <Toaster position="top-right" />
                <LanguageSwitch />
                <ThemeSwitch />
              </ActiveSectionContextProvider>
            </ThemeContextProvider>
          </LanguageContextProvider>
        </I18nProvider>
       { /* <iframe
          src="https://chat-widget.hivara.ai/chat"
          // src="http://localhost:5173/chat"
          style={iframeStyle}
          title="Chat"
          id="chatbot-iframe"
        /> */}
      </body>
    </html>
  );
}
