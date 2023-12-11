"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-4">
        Enthusiastic bootcamp graduate with a focus on the{" "}
        <span className="font-medium">MERN stack</span>. I've decided to turn my
        passion for programming into a professional journey, embarking on a
        career in full-stack web development. The thrill of problem-solving is
        my favorite aspect of programming—I love the satisfaction of finding
        solutions. My core stack includes{" "}
        <span className="font-medium">
          MongoDB, Express.js, React, and Node.js
        </span>
        . I'm always eager to learn and continually enhance my skills through
        platforms like FreeCodeAcademy and YouTube. Currently seeking a{" "}
        <span className="font-medium">junior software developer position</span>{" "}
        and open to freelance opportunities to expand my portfolio.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, you'll find me
        immersed in tabletop gaming and various hobby-related activities. I'm
        passionate about continual learning, currently delving into{" "}
        <span className="font-medium">AI and prompt engineering</span>. I've
        also explored content creation through my blogs and a YouTube channel,
        experimenting with sharing my insights and experiences.
      </p>
    </motion.section>
  );
}
