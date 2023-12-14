import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

// Inside "@/lib/types.ts"
import { ReactElement } from "react"; // Import ReactElement from React

export type UpcomingItem = {
  date: string;
  icon: ReactElement; // Change the type to ReactElement
  title: string;
  location: string;
  description: string;
  // ... other properties
};
