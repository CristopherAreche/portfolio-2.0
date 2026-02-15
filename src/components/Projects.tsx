"use client";

import { projects } from "../utils/data";
import ProjectItem from "./ProjectItem";
import { useLanguage } from "@/app/language-provider";

const Projects = () => {
  const { t } = useLanguage();

  return (
    <section
      aria-label={t.projects.sectionLabel}
      className="min-w-screen max-w-[900px] h-auto xsPhone:mt-[30px] tablet:mt-[140px] mx-[15px] overflow-x-hidden scrollbar-hide flex flex-col items-center gap-14"
    >
      <h2 className="sr-only">{t.projects.heading}</h2>
      {projects.map(
        ({
          id,
          name,
          image,
          frontend_tech,
          backend_tech,
          description,
          descriptionEs,
          deployment,
          sourceCode,
        }) => (
          <ProjectItem
            key={id}
            id={id}
            name={name}
            image={image}
            deployment={deployment}
            description={description}
            descriptionEs={descriptionEs}
            sourceCode={sourceCode}
            frontend_tech={frontend_tech}
            backend_tech={backend_tech}
          />
        )
      )}
    </section>
  );
};

export default Projects;
