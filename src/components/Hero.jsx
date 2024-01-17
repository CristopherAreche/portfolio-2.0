import React, { useState } from "react";
import Image from "next/image";
import { backEndSkills, frontEndSkills } from "@/utils/Object";
import { FaFileAlt } from "react-icons/fa";
import { FaCopy } from "react-icons/fa";
import Link from "next/link";
import Ellipse from "./Ellipse";
import clipboard from "clipboard-copy";
import { motion } from "framer-motion";

const Hero = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await clipboard("cristopherareche764@gmail.com");
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div className="overflow-x-hidden pt-[2em] pb-[4em] laptop:pt-0 laptop:pb-0 phone:w-full phone:items-center laptop:items-start laptop:w-[1100px] laptop:h-[550px] tablet:w-[500px] h-full tablet:mt-[140px] mx-[15px] overflow-y-auto scrollbar-hide flex phone:flex-col-reverse items-center gap-14 phone:h-auto phone:gap-0  phone:justify-between laptop:flex-row laptop:justify-between justify-center">
      {/* Left */}
      <div className="ml-1 phone:w-full  phone:max-w-[498px] xsPhone:w-screen xsPhone:h-[600px] xsPhone:gap-6 xsPhone:justify-center phone:h-[510px] tablet:max-w-[550px]  laptop:max-h-[520px] laptop:justify-between  flex flex-col phone:justify-start laptop:gap-4 phone:gap-8">
        {/* Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.1,
            x: { type: "spring", stiffness: 20 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 0.5,
          }}
          className="flex flex-col phone:justify-center phone:items-center laptop:items-start"
        >
          <div className="xsPhone:px-[15px] xsPhone:text-center laptop:px-0 font-main-font font-normal xsPhone:text-[30px] phone:text-[38px] mb-4 text-start text-grey_text dark:text-dark_mode_text">
            Hi, I&apos;M <span className="text-[#53E767]">Cristopher</span>
          </div>
          <h1 className="xsPhone:px-[15px] text-center laptop:px-0 tablet:text-center laptop:text-start uppercase font-main-font font-normal  xsPhone:text-[30px] phone:text-[38px] text-grey_text dark:text-dark_mode_text">
            A Front-End Developer
          </h1>
        </motion.div>
        {/* Description */}
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.1,
            x: { type: "spring", stiffness: 20 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 0.8,
          }}
          className="xsPhone:px-[15px] laptop:text-start laptop:px-0 phone:text-[16px] tablet:text-[20px] text-grey_text dark:text-dark_mode_text phone:text-center"
        >
          I enjoy creating things that live on the internet. I learned web
          development because I wanted to have the ability to create useful and
          attractive things online. I love the idea of being able to bring an
          idea to life and share it with the world through the web.
        </motion.p>
        {/* Tech Stack */}
        <div className="flex flex-col xsPhone:items-start laptop:items-start gap-3 xsPhone:px-[15px] laptop:px-0">
          {/* frontend */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.1,
              x: { type: "spring", stiffness: 20 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 0.8,
            }}
            className="flex"
          >
            <div className="flex tablet:gap-4 xsPhone:gap-2">
              <p className="flex uppercase font-main-font xsPhone:text-[12px] phone:text-[16px] table:text-[30px]  text-grey_text dark:text-dark_mode_text">
                Front<span className="hidden tablet:block">-end</span>
              </p>
              <p className="font-main-font xsPhone:text-[12px] phone:text-[16px] table:text-[20px] text-grey_text mr-6 dark:text-dark_mode_text">
                |
              </p>
            </div>
            <div className="flex gap-[10px] ">
              {frontEndSkills?.map((skill) => (
                <Image
                  key={skill.id}
                  src={skill.image}
                  alt={skill.name}
                  width={30}
                  height={30}
                  className="transition-transform transform hover:scale-125"
                />
              ))}
            </div>
          </motion.div>
          {/* backend */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.1,
              x: { type: "spring", stiffness: 20 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 0.8,
            }}
            className="flex"
          >
            <div className="flex tablet:gap-6 xsPhone:gap-3">
              <p className="flex uppercase font-main-font xsPhone:text-[12px] phone:text-[16px] table:text-[20px] text-grey_text dark:text-dark_mode_text">
                Back<span className="hidden tablet:block">-end</span>
              </p>
              <p className="font-main-font xsPhone:text-[12px] phone:text-[16px] table:text-[20px] text-grey_text mr-6 dark:text-dark_mode_text">
                |
              </p>
            </div>
            <div className="flex gap-[10px]">
              {backEndSkills?.map((skill) => (
                <Image
                  key={skill.id}
                  src={skill.image}
                  alt={skill.name}
                  width={30}
                  height={30}
                  className="phone:h-[28] transition-transform transform hover:scale-125"
                />
              ))}
            </div>
          </motion.div>
        </div>
        {/* Email and CV */}
        <div className="flex justify-between xsPhone:px-[15px] laptop:px-0">
          {/* CV */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.1,
              x: { type: "spring", stiffness: 20 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 0.8,
            }}
          >
            <Link
              href="/assets/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex ring-2 ring-[#53E767] w-[150px] items-center justify-center gap-1 rounded-lg cursor-pointer hover:bg-[#53E767] transition-transform transform hover:scale-110"
            >
              <FaFileAlt className="w-18 h-21 text-center dark:text-dark_mode_text" />
              <p className="font-main-font text-[20px] dark:text-dark_mode_text">
                RESUME / CV
              </p>
            </Link>
          </motion.div>
          {/* Email */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.1,
              x: { type: "spring", stiffness: 20 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 0.8,
            }}
          >
            <div
              onClick={handleCopyClick}
              className="flex px-1 laptop:w-[330px] items-center justify-start gap-1 rounded-lg cursor-pointer transition-transform transform hover:scale-110 "
            >
              <FaCopy className="w-18 h-21 text-center dark:text-dark_mode_text hover:text-[#53E767] hover:dark:text-[#53E767]" />
              <p className="font-main-font text-[20px] uppercase dark:text-dark_mode_text xsPhone:hidden laptop:flex">
                {isCopied ? "Copied!" : "cristopherareche764@gmail.com"}
              </p>
              <p className="font-main-font text-[20px] uppercase dark:text-dark_mode_text xsPhone:flex laptop:hidden">
                {isCopied ? "Copied!" : "Copy Email"}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right */}
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 5,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 5,
        }}
        className=" phone:flex phone:h-full phone:w-screen tablet:w-[520px] laptop:max-h-[520px]  xsPhone:hidden"
      >
        <div className="relative w-full flex laptop:pt-10 justify-center">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.6 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <div className=" z-20 mb-10 laptop:h-[400px] flex">
              {/* LinkedIn */}
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.5,
                  y: { type: "spring", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className="justify-center self-end"
              >
                <Link
                  className="h-full"
                  target="_blank"
                  href={
                    "https://www.linkedin.com/in/cristopher-areche-guillen-01a603186/"
                  }
                >
                  <Image
                    src={require("/public/assets/linkedin.svg")}
                    alt="portrait-photo"
                    className="animation-pulse laptop:w-[90px] laptop:h-[90px] cursor-pointer transition-transform transform hover:scale-125"
                  />
                </Link>
              </motion.div>
              {/* Image and Ellipse */}
              <div className="relative">
                <Image
                  src={require("/public/assets/me.jpeg")}
                  alt="portrait-photo"
                  className=" z-10 object-cover ring-8 ring-gray-600 relative object-center rounded-full dark:ring-green_text phone:w-[175px] phone:h-[175px] laptop:h-[350px] laptop:w-[343px] transition-transform transform hover:scale-110"
                />
                {/* Ellipse */}
                <div className="z-0 bg-grey_text dark:bg-green_text/75 rounded-full h-[350px] w-[343px] absolute top-[70px] left-[70px] hidden laptop:block">
                  <svg
                    width="342"
                    height="345"
                    viewBox="0 0 342 345"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse cx="171" cy="172.5" rx="171" ry="172.5" />
                  </svg>
                </div>
              </div>
              {/* Github */}
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.5,
                  y: { type: "spring", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }}
              >
                <Link
                  target="_blank"
                  href={"https://github.com/CristopherAreche?tab=repositories"}
                >
                  <Image
                    src={require("/public/assets/github.svg")}
                    alt="portrait-photo"
                    className=" animate-pulse rounded-full laptop:w-[90px] laptop:h-[90px] phone:w-[44px] phone:h-[44px] cursor-pointer transition-transform transform hover:scale-125"
                  />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
