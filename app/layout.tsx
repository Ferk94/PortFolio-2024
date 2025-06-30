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

export const metadata = {
  title: "Fernando Kaganovicz | Personal Portfolio",
  description: "con más de 4 años de experiencia en desarrollo full stack",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
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
         <iframe
          src="https://chat-3qrb4jswa-fernando-kaganoviczs-projects.vercel.app/chat"
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            width: "350px",
            height: "500px",
            border: "none",
            zIndex: 9999,
            borderRadius: "12px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.15)"
          }}
          title="Chat"
        />
      </body>
    </html>
  );
}
