import React from "react";
import { AiTwotoneTrophy } from "react-icons/ai";
import { LuGraduationCap } from "react-icons/lu";
import { PiCatDuotone } from "react-icons/pi";
import { TbBrandPython } from "react-icons/tb";
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
    name: "Upcoming",
    hash: "#upcoming",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const upcomingData = [
  {
    title: "NoBeefJustParty Blog",
    location: "MERN Fullstack",
    description: "A blog!  What about still not 100% sure yet! ",
    icon: React.createElement(AiTwotoneTrophy),
    date: "Started 11th January 2023",
  },
  {
    title: "Learning AWS",
    location: "AWS",
    description:
      "I missed out on working for one of my big 5 due to my lack of knowledge on this subject.",
    icon: React.createElement(LuGraduationCap),
    date: "February 2024",
  },
  {
    title: "FreshPet",
    location: "MERN Fullstack",
    description:
      "Upgrading my first ever project to see what I can achieve when I combine the fullstack with the original concept.",
    icon: React.createElement(PiCatDuotone),
    date: "February 2024",
  },
  {
    title: "Learning Python",
    location: "Python",
    description:
      "Self teaching myself Python with the help of FreeCodeAcademy and YouTube tutorials",
    icon: React.createElement(TbBrandPython),
    date: "February 2024",
  },
] as const;

export const projectsData = [
  {
    title: "BlobsInSpace",
    description:
      "Starting as simple Asteroids clone, planning on expanding it to much more!",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: blobsinspaceImg,
    githubUrl: "https://github.com/sage-code82/blobsinspace",
  },
  {
    title: "PantryPet",
    description:
      "Team project during bootcamp. Keep track of your groceries and get meal time inspiration!",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: pantrypetImg,
    githubUrl: "https://github.com/nellie-allsop/pantry",
  },
  {
    title: "DnD Companion",
    description:
      "My final bootcamp project. A players companion app for the game Dungeons and Dragons. Create your character and keep an ongoing journal about your game!",
    tags: ["MongoDB", "Express", "React", "Node.js", "CSS"],
    imageUrl: dndcompanionImg,
    githubUrl: "https://github.com/MannyGGB/dnd-companion",
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
  "Chart.js",
] as const;
