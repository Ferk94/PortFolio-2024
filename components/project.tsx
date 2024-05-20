"use client";

import { useRef, useState, useEffect } from "react";
import { projectsData } from "@/lib/data";
import ReactPlayer from "react-player";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  date,
  description,
  tags,
  imageUrl,
  videoUrl,
  linkUrl,
  index,
}: ProjectProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <motion.div className="group mb-3 sm:mb-8 last:mb-0">
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden relative sm:h-[20rem] hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-1/2 p-5">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <h6 className="text-xl font-thin italic">{date}</h6>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
              {description}
            </p>
            <ul className="flex flex-wrap mt-4 gap-2">
              {tags.map((tag, index) => (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
            {linkUrl && (
              <a href={linkUrl} target="_blank" className="text-blue-500 mt-1">
              Click aquí para ingresar a la web
              </a>
            )}
            
          </div>
          {isClient && videoUrl && (
            <div className={`sm:w-1/2 h-[10rem] ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
              <ReactPlayer
                url={videoUrl}
                controls={true}
                width="50%"
                height="95%"
                style={{ position: 'absolute', top: 10, left: 350 }}
              />
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
}
