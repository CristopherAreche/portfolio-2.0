"use client";
import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { FaCode } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { motion } from "framer-motion";
import { NavbarProps } from "@/types";

const Navbar = ({ project, setProject }: NavbarProps) => {
  const handleComponent = () => {
    setProject(!project);
  };

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.1,
        x: { type: "spring", stiffness: 20 },
        opacity: { duration: 1 },
        ease: "easeIn",
        duration: 0.8,
      }}
      className="z-50 w-full absolute xsPhone:top-[2vh] tablet:top-0  tablet:pt-[71px] tablet:pb-6 laptop:bg-light_text dark:laptop:bg-black"
    >
      <div className="flex justify-center items-center w-full h-full transition-transform transform hover:scale-95">
        <div
          className={`flex justify-between items-center h-[46px] w-[223px] px-1 dark:bg-light_text bg-grey_text rounded-full`}
        >
          <ThemeSwitcher />

          <div
            onClick={handleComponent}
            className={`cursor-pointer group w-[160px] h-[40px] bg-light_bg dark:bg-grey_text justify-center items-center rounded-full flex gap-1`}
          >
            {project ? (
              <FaHome className="w-[34px] h-[20px] text-grey_text dark:text-light_text group-hover:text-green_text" />
            ) : (
              <FaCode className="w-[34px] h-[20px] text-grey_text dark:text-light_text group-hover:text-green_text" />
            )}
            <span className="text-full text-[20px] dark:text-light_text text-grey_text font-main-font uppercase group-hover:text-green_text">
              {project ? "Home" : "Projects"}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
