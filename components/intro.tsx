"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="https://avatars.githubusercontent.com/u/144445980?v=4"
              alt="Stephen Sage"
              width="195"
              height="195"
              quality="95"
              priority={true}
              className="h-30 w-30 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&aposm Stephen.</span> I am a new{" "}
        <span className="font-bold"> full-stack developer</span> freshly
        graduated from{" "}
        <span className="font-bold">Tech Educators MERN Stack bootcamp</span>. I
        enjoy building <span className="italic">sites & apps</span>. My focus
        currently is <span className="underline">React (Next.js)</span>.
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-slate-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-slate-700 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full before:outline-none focus:scale-110  hover:bg-slate-300 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          {" "}
          Download CV{" "}
          <HiDownload
            className="
            opacity-70
            group-hover:translate-y-1
            transition"
          />
        </a>
        <a
          className="bg-white text-slate-700 p-4 flex items-center gap-2 rounded-full focus:scale-110  hover:bg-slate-300 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10  dark:text-white/60"
          href="https://www.linkedin.com/in/stephen-sage-future-webdev/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white text-slate-700 p-4 flex items-center gap-2 rounded-full focus:scale-110  hover:bg-slate-300 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10  dark:text-white/60"
          href="https://github.com/sage-code82"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
