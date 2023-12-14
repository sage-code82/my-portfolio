"use client";
import React from "react";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { upcomingData } from "@/lib/data";
import UpcomingData from "./upcoming-data";

const Upcoming: React.FC = () => {
  const { ref } = useSectionInView("Upcoming");

  return (
    <section ref={ref} id="upcoming" className="scroll-mt-28 mb-28 sm:mb-40 ">
      <SectionHeading>Upcoming projects</SectionHeading>
      <VerticalTimeline lineColor="">
        {upcomingData.map((item, index) => (
          <UpcomingData key={index} item={item} index={index} />
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Upcoming;
