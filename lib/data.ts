import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import pantrypetImg from "@/public/pantrypet.png";
import blobsinspaceImg from "@/public/blobsinspace.png";
import dndcompanionImg from "@/public/dndcompanion.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "PantryPet",
    description:
      "Team project during bootcamp. Keep track of your groceries and get meal time inspiration!",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: pantrypetImg,
  },
  {
    title: "BlobsInSpace",
    description:
      "Starting as simple Asteroids clone, planning on expanding it to much more!",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: blobsinspaceImg,
  },
  {
    title: "DnD Companion",
    description:
      "My final bootcamp project. A players companion app for the game Dungeons and Dragons. Create your character and keep an ongoing journal about your game!",
    tags: ["MongoDB", "Express", "React", "Node.js", "Acordion", "CSS"],
    imageUrl: dndcompanionImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "HTML Canvas",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "Framer Motion",
  "Acordion",
  "Chart.js",
] as const;
