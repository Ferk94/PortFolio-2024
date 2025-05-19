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
  <motion.div className="group mb-3 sm:mb-8 last:mb-0 w-[70%] mx-auto">
  <section className="bg-gray-100 border border-black/5 rounded-lg overflow-hidden relative hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
    <div className="flex flex-col sm:flex-row sm:h-[20rem]">
      
      {/* Texto */}
      <div className="sm:w-1/2 p-5 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-semibold">{title}</h3>
          <h6 className="text-xl font-thin italic">{date}</h6>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
        </div>
        <div className="mt-4">
          <ul className="flex flex-wrap gap-2">
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
            <a
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition-colors dark:bg-blue-500 dark:hover:bg-blue-400"
            >
              Ver proyecto
            </a>
          )}

        </div>
      </div>

      {/* Video */}
      {isClient && videoUrl && (
        <div className="sm:w-1/2 flex items-center justify-center p-4">
          <ReactPlayer
            url={videoUrl}
            controls={true}
            width="100%"
            height="100%"
          />
        </div>
      )}
    </div>
  </section>
</motion.div>

  );
}
