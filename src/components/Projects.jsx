import React from "react";
import { projects } from "../utils/Object";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full dark:bg-dark_bg">
      <div className="max-w-[1240px] mx-auto px-2 py-[6em] ">
        <p className="text-xl tracking-widest uppercase text-[#53E767]">
          Projects
        </p>
        <h2 className="py-4 dark:text-dark_mode_text">What I&apos;ve built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map(
            ({
              id,
              index,
              name,
              image,
              propertyUrl,
              deployment,
              mainTechnologies,
            }) => (
              <ProjectItem
                key={index}
                id={id}
                name={name}
                image={image}
                propertyUrl={propertyUrl}
                deployment={deployment}
                projects={projects}
                mainTechnologies={mainTechnologies}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
