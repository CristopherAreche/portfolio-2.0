import React from "react";
import { projects } from "../utils/Object";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full dark:bg-dark_bg">
      <div className="max-w-[1240px] mx-auto py-[6em] flex flex-col items-center">
        <div className="py-6 text-center md:text-left w-full px-[4em]">
          <p className="text-2xl tracking-widest uppercase text-[#53E767]">
            Projects
          </p>
          <h2 className="py-4 dark:text-dark_mode_text">
            What I&apos;ve built
          </h2>
        </div>
        <div className="flex flex-col gap-8 w-[90%] items-center justify-center">
          {projects.map(
            ({
              index,
              id,
              name,
              image,
              propertyUrl,
              mainTechnologies,
              allTechnologies,
              description,
              deployment,
              sourceCode,
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
                description={description}
                sourceCode={sourceCode}
                allTechnologies={allTechnologies}
              />
            )
          )}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Projects;
