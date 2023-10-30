import React from "react";
import { projects } from "../../utils/Object";
import ProjectItem from "../projectItem/page";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-[6em]">
        <p className="text-xl tracking-widest uppercase text-[#53E767]">
          Projects
        </p>
        <h2 className="py-4">What I've built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map(
            ({
              id,
              name,
              image,
              propertyUrl,
              deployment,
              mainTechnologies,
            }) => (
              <ProjectItem
                key={id}
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
