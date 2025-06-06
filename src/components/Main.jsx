"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Projects from "./Projects";

const Main = () => {
  const [project, setProject] = useState(false);

  return (
    <div className="relative xsPhone:overflow-auto xsPhone:viewport-h-screen phone:min-h-screen phone:overflow-hidden">
      <Navbar project={project} setProject={setProject} />
      <div className="h-full -z-1 py-20 flex items-start justify-center overflow-y-auto overflow-x-hidden">
        {project ? <Projects /> : <Hero />}
      </div>
    </div>
  );
};

export default Main;
