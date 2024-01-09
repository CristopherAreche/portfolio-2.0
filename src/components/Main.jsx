"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Projects from "./Projects";

const Main = () => {
  const [project, setProject] = useState(false);

  return (
    <div className="relative xsPhone:overflow-auto xsPhone:h-screen phone:min-h-screen phone:overflow-hidden">
      <Navbar project={project} setProject={setProject} />
      {project ? (
        <div className="h-full py-10 flex items-start justify-center overflow-y-auto">
          <Projects />
        </div>
      ) : (
        <Hero />
      )}
    </div>
  );
};

export default Main;
