import React from "react";
import { projects } from "../utils/data";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div className="min-w-screen max-w-[900px] h-auto xsPhone:mt-[30px] tablet:mt-[140px] mx-[15px] overflow-x-hidden overflow-y-auto scrollbar-hide flex flex-col items-center gap-14">
      {projects.map(
        ({
          index,
          id,
          name,
          image,
          propertyUrl,
          frontend_tech,
          backend_tech,
          description,
          deployment,
          sourceCode,
        }) => (
          <ProjectItem
            key={id}
            id={id}
            name={name}
            image={image}
            propertyUrl={propertyUrl}
            deployment={deployment}
            description={description}
            sourceCode={sourceCode}
            frontend_tech={frontend_tech}
            backend_tech={backend_tech}
          />
        )
      )}
    </div>
  );
};

export default Projects;
