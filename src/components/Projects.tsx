import { projects } from "../utils/data";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <section
      aria-label="Projects"
      className="min-w-screen max-w-[900px] h-auto xsPhone:mt-[30px] tablet:mt-[140px] mx-[15px] overflow-x-hidden scrollbar-hide flex flex-col items-center gap-14"
    >
      <h2 className="sr-only">My Projects</h2>
      {projects.map(
        ({
          id,
          name,
          image,
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
            deployment={deployment}
            description={description}
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
