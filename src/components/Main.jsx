import React from "react";
import { social } from "@/utils/Object";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center dark:bg-dark_bg">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600 dark:text-white">
            Turning pixels into possibilities, one line of code at a time
          </p>
          <h1 className="py-4 text-gray-700 dark:text-dark_mode_text">
            Hi, I&apos;m <span className="text-[#53E767]">Cristopher</span>
          </h1>
          <h1 className="py-2 text-gray-700 dark:text-dark_mode_text">
            A Front-End Developer
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto dark:text-dark_mode_text">
            I&apos;m deeply passionate about crafting outstanding digital
            experiences. I also enjoy doing some design work. Right now,
            I&apos;m mainly working on building responsive front-end web
            applications and learning more about back-end technologies. I&apos;m
            dedicated to delivering high-quality projects that make the web a
            better place for users.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            {social.map(({ id, icon, url }) => (
              <a
                key={id}
                href={url}
                target="_blank"
                className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-800 dark:bg-dark_mode_text  p-6 cursor-pointer hover:scale-110 ease-in duration-300"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
