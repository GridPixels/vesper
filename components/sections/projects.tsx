import { projectsData } from "@/data";
import React from "react";
import ProjectCard from "../shared/project-card";

const Projects = () => {
  return (
    <section className="py-10">
      <h3 className="text-lg font-semibold">Articles</h3>

      <div className="flex gap-5">
        {projectsData.map((item, i) => (
          <ProjectCard data={item} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
