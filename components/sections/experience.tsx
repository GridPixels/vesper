import { experienceData } from "@/data";
import React from "react";
import ExperienceCard from "../shared/experience-card";

const Experience = () => {
  return (
    <section className="pb-10">
      <h2 className="text-lg font-semibold">Experience</h2>

      {experienceData.map((item, i) => (
        <ExperienceCard data={item} key={i} />
      ))}
    </section>
  );
};

export default Experience;
