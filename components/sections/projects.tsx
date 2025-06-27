import { projectsData } from "@/data";
import React from "react";
import ProjectCard from "../shared/project-card";

const Projects = () => {
  return (
    <section className="pb-16">
      <h3 className="text-lg font-semibold">Projects</h3>

      <div className="flex gap-5 flex-col md:flex-row">
        {projectsData.map((item, i) => (
          <ProjectCard data={item} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
