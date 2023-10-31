"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { projects } from "@/utils/Object";

export default function ProjectDetails({ params }) {
  const paramsId = parseInt(params.id);
  const project = projects.find((obj) => obj.id === paramsId);

  return (
    <div className="w-full dark:bg-dark_bg">
      <Navbar />
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/10 z-10" />
        <Image
          className="absolute z-1 blur-sm"
          layout="fill"
          objectFit="cover"
          src={project.image}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10">
          <h1>{project.name}</h1>
          <br></br>
          <div className="flex gap-4 uppercase">
            {project.mainTechnologies.map((obj, index) => (
              <h3 key={index}>{obj}</h3>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="dark:text-dark_mode_text">Project</p>
          <h2 className="dark:text-dark_mode_text">Overview</h2>
          <p className="dark:text-dark_mode_text">{project.description}</p>
          <Link href={project.deployment} target="_blank">
            <button className="px-8 py-2 mt-4 mr-8 dark:shadow-none">
              Demo
            </button>
          </Link>
          <Link href={project.sourceCode} target="_blank">
            <button className="px-8 py-2 mt-4 dark:shadow-none">Code</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl dark:bg-gray-800 dark:shadow-none dark:text-dark_mode_text shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              {project.allTechnologies.map((obj, index) => (
                <label
                  key={index}
                  className="text-gray-600 py-2 flex items-center  dark:text-dark_mode_text"
                >
                  <RiRadioButtonFill className="pr-1" />
                  <p className="text-black">{obj}</p>
                </label>
              ))}
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer dark:text-dark_mode_text">
            Back
          </p>
        </Link>
      </div>
    </div>
  );
}
