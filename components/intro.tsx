"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
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
        <span className="font-bold">Hello, I'm Stephen.</span> I'm a new{" "}
        <span className="font-bold"> full-stack developer</span> freshly
        graduated from{" "}
        <span className="font-bold">Tech Educators MERN Stack bootcamp</span>. I
        enjoy building <span className="italic">sites & apps</span>. My focus
        currently is <span className="underline">React (Next.js)</span>.
      </motion.h1>
    </section>
  );
}
