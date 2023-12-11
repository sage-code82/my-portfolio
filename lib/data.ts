import React from "react";
import { AiTwotoneTrophy } from "react-icons/ai";
import { LuGraduationCap } from "react-icons/lu";
import { PiCatDuotone } from "react-icons/pi";
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
    title: "Shatterpoint League",
    location: "MERN Fullstack",
    description:
      "A league table website for my friends and I, for the Tabletop game Shatterpoint.  Enter scores, generate fixtures and submit teams for stats.",
    icon: React.createElement(AiTwotoneTrophy),
    date: "December 2023",
  },
  {
    title: "Your Empire Needs You!",
    location: "React + Next.js + Tailwind",
    description:
      "A fun website I will be putting together, a recruitment website for the Empire.  After all they are the good guys!",
    icon: React.createElement(LuGraduationCap),
    date: "December 2023",
  },
  {
    title: "FreshPet",
    location: "MERN Fullstack",
    description:
      "Upgrading my first ever project to see what I can achieve when I combine the fullstack with the original concept.",
    icon: React.createElement(PiCatDuotone),
    date: "January 2024",
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
    tags: ["MongoDB", "Express", "React", "Node.js", "CSS"],
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
  "Chart.js",
] as const;
