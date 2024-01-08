import React from "react";
import Image from "next/image";
import { backEndSkills, frontEndSkills } from "@/utils/Object";
import { FaFileAlt } from "react-icons/fa";
import { IoDownloadSharp } from "react-icons/io5";
import { FaCopy } from "react-icons/fa";
import Link from "next/link";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <div className="relative xsPhone:overflow-auto xsPhone:h-screen phone:min-h-screen phone:overflow-hidden">
      <Navbar />
      <div
        id="home"
        className=" absolute phone:min-w-screen tablet:w-full h-screen text-center dark:bg-dark_bg flex justify-center laptop:items-center phone:mt-[50px] tablet:mt-[150px] laptop:mt-0"
      >
        <div className="phone:w-full phone:items-center laptop:items-start tablet:w-[500px] laptop:w-[1037px] laptop:h-[466px] phone:h-[740px] phone:gap-8  phone:justify-between  flex phone:flex-col-reverse laptop:flex-row laptop:justify-between justify-center">
          {/* Left */}
          <div className=" phone:w-full phone:max-w-[498px] xsPhone:w-screen xsPhone:h-[600px] xsPhone:gap-6 xsPhone:justify-center phone:h-[510px] tablet:w-[550px]  laptop:max-h-[520px] laptop:justify-between  flex flex-col phone:justify-start laptop:gap-4 phone:gap-8">
            {/* Header */}
            <div className="flex flex-col phone:justify-center phone:items-center laptop:items-start">
              <h1 className="xsPhone:px-[15px] xsPhone:text-center laptop:px-0 font-main-font font-normal xsPhone:text-[30px] phone:text-[38px] mb-4 text-start text-grey_text dark:text-dark_mode_text">
                Hi, I&apos;M <span className="text-[#53E767]">Cristopher</span>
              </h1>
              <h1 className="xsPhone:px-[15px] laptop:px-0 tablet:text-center laptop:text-start uppercase font-main-font font-normal  xsPhone:text-[30px] phone:text-[38px] text-grey_text dark:text-dark_mode_text">
                A Front-End Developer
              </h1>
            </div>
            {/* Description */}
            <p className="xsPhone:px-[15px] laptop:text-start laptop:px-0 phone:text-[16px] tablet:text-[20px] text-grey_text dark:text-dark_mode_text phone:text-center">
              I enjoy creating things that live on the internet. I learned web
              development because I wanted to have the ability to create useful
              and attractive things online. I love the idea of being able to
              bring an idea to life and share it with the world through the web.
            </p>
            {/* Tech Stack */}
            <div className="flex flex-col xsPhone:items-center laptop:items-start gap-3 xsPhone:px-[15px] laptop:px-0">
              <div className="flex">
                <div className="flex tablet:gap-4 xsPhone:gap-2">
                  <p className="uppercase font-main-font xsPhone:text-[12px] phone:text-[16px] table:text-[30px]  text-grey_text dark:text-dark_mode_text">
                    Front-end
                  </p>
                  <p className="font-main-font xsPhone:text-[12px] phone:text-[16px] table:text-[20px] text-grey_text mr-6 dark:text-dark_mode_text">
                    |
                  </p>
                </div>
                <div className="flex gap-[10px]">
                  {frontEndSkills.map((skill) => (
                    <Image
                      key={skill.id}
                      src={skill.image}
                      alt={skill.name}
                      width={28}
                      height={28}
                      className=""
                    />
                  ))}
                </div>
              </div>
              <div className="flex">
                <div className="flex tablet:gap-6 xsPhone:gap-3">
                  <p className="uppercase font-main-font xsPhone:text-[12px] phone:text-[16px] table:text-[20px] text-grey_text dark:text-dark_mode_text">
                    Back-end
                  </p>
                  <p className="font-main-font xsPhone:text-[12px] phone:text-[16px] table:text-[20px] text-grey_text mr-6 dark:text-dark_mode_text">
                    |
                  </p>
                </div>
                <div className="flex gap-[10px]">
                  {backEndSkills.map((skill) => (
                    <Image
                      key={skill.id}
                      src={skill.image}
                      alt={skill.name}
                      width={30}
                      height={30}
                      className="phone:h-[28] phone:h-[28]"
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* CV and Email */}
            <div className="flex justify-between xsPhone:px-[15px] laptop:px-0">
              {/* CV */}
              <div className="flex ring-2 ring-[#53E767] w-[51px] items-center justify-center gap-1 rounded-lg cursor-pointer hover:bg-[#53E767]">
                <FaFileAlt className="w-18 h-21 text-center dark:text-dark_mode_text" />
                <p className="font-main-font text-[20px] dark:text-dark_mode_text">
                  CV
                </p>
              </div>
              {/* Download CV */}
              <div className="flex ring-2 ring-[#53E767] w-[115px] items-center justify-center gap-1 rounded-lg cursor-pointer hover:bg-[#53E767]">
                <IoDownloadSharp className="w-18 h-21 text-center dark:text-dark_mode_text" />
                <p className="font-main-font text-[20px] dark:text-dark_mode_text">
                  DOWNLOAD
                </p>
              </div>
              {/* Email */}
              <div className="flex px-1 items-center justify-center gap-1 rounded-lg cursor-pointer">
                <FaCopy className="w-18 h-21 text-center dark:text-dark_mode_text hover:text-[#53E767] hover:dark:text-[#53E767]" />
                <p className="font-main-font text-[20px] uppercase dark:text-dark_mode_text xsPhone:hidden laptop:flex">
                  cristopherareche764@gmail.com
                </p>
                <p className="font-main-font text-[20px] uppercase dark:text-dark_mode_text xsPhone:flex laptop:hidden">
                  copy email
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="phone:flex phone:h-[203px] phone:w-screen tablet:w-[520px] laptop:max-h-[520px]  xsPhone:hidden">
            <div className="flex phone:justify-center relative phone:w-full">
              <div className="relative">
                <Link
                  target="_blank"
                  href={"https://github.com/CristopherAreche?tab=repositories"}
                >
                  <Image
                    src={require("/public/assets/github.svg")}
                    alt="portrait-photo"
                    className="rounded-full laptop:w-[90px] laptop:h-[90px] phone:w-[44px] phone:h-[44px] z-20 absolute laptop:left-[350px] phone:left-[180px] tablet:right-[90px] tablet:w-[44px] tablet:h-[44px] cursor-pointer transition-transform transform hover:scale-110"
                  />
                </Link>
                <Link
                  target="_blank"
                  href={
                    "https://www.linkedin.com/in/cristopher-areche-guillen-01a603186/"
                  }
                >
                  <Image
                    src={require("/public/assets/linkedin.svg")}
                    alt="portrait-photo"
                    className=" laptop:w-[90px] laptop:h-[90px] z-20 absolute laptop:top-[350px] laptop:left-0 phone:top-[160px] phone:left-[-30px] cursor-pointer transition-transform transform hover:scale-110"
                  />
                </Link>

                <div className="">
                  <Image
                    src={require("/public/assets/me.jpeg")}
                    alt="portrait-photo"
                    className="rounded-full phone:w-[175px] phone:h-[175px] laptop:h-[350px] laptop:w-[343px] z-50"
                  />
                  <Image
                    src={require("/public/assets/Ellipse.svg")}
                    alt="portrait-photo"
                    className="z-[-1] rounded-full phone:w-[175px] phone:h-[175px] laptop:h-[350px] laptop:w-[343px] absolute laptop:top-[70px] laptop:left-[70px] phone:top-[25px] phone:left-[30px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
