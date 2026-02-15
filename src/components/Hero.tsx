"use client";
import { useState } from "react";
import Image from "next/image";
import { backEndSkills, frontEndSkills, tools } from "@/utils/data";
import { FaFileAlt, FaCopy } from "react-icons/fa";
import Link from "next/link";
import clipboard from "clipboard-copy";
import toast from "react-hot-toast";
import { motion, useReducedMotion } from "framer-motion";
import { CONTACT_EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/utils/constants";
import SkillIcon from "./SkillIcon";

const DARK_ICONS = ["nextjs"];

const Hero = () => {
  const [isCopied, setIsCopied] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleCopyClick = async () => {
    try {
      await clipboard(CONTACT_EMAIL);
      setIsCopied(true);
      toast.success("Email copied to clipboard!");
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch {
      toast.error("Failed to copy email. Please try manually.");
    }
  };

  return (
    <section
      aria-label="About me"
      className="w-full max-w-full overflow-x-hidden pt-[2em] pb-[4em] laptop:pt-0 laptop:pb-0 phone:w-full phone:items-center laptop:items-start laptop:w-[1100px] laptop:h-[550px] tablet:w-[500px] h-full tablet:mt-[140px] mx-[15px] scrollbar-hide flex phone:flex-col-reverse items-center gap-14 phone:h-auto phone:gap-0 phone:justify-between laptop:flex-row laptop:justify-between justify-center"
    >
      {/* Left */}
      <div className="ml-1 phone:w-full phone:max-w-[498px] xsPhone:w-full xsPhone:max-w-full xsPhone:h-[600px] xsPhone:gap-6 xsPhone:justify-center phone:h-[510px] tablet:max-w-[550px] laptop:max-h-[520px] laptop:justify-between flex flex-col phone:justify-start laptop:gap-4 phone:gap-8">
        {/* Header */}
        <motion.div
          initial={shouldReduceMotion ? false : { y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : {
                  delay: 0.1,
                  x: { type: "spring", stiffness: 20 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 0.5,
                }
          }
          className="flex flex-col phone:justify-center phone:items-center laptop:items-start"
        >
          <div className="xsPhone:px-[15px] xsPhone:text-center laptop:px-0 font-main-font font-normal xsPhone:text-[30px] phone:text-[38px] mb-4 text-start text-grey_text dark:text-dark_mode_text">
            Hi, I&apos;M <span className="text-[#53E767]">Cristopher</span>
          </div>
          <h1 className="xsPhone:px-[15px] text-center laptop:px-0 tablet:text-center laptop:text-start uppercase font-main-font font-normal xsPhone:text-[30px] phone:text-[38px] text-grey_text dark:text-dark_mode_text">
            A Software Engineer
          </h1>
        </motion.div>
        {/* Description */}
        <motion.p
          initial={shouldReduceMotion ? false : { y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : {
                  delay: 0.1,
                  x: { type: "spring", stiffness: 20 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 0.8,
                }
          }
          className="xsPhone:px-[15px] laptop:text-start laptop:px-0 phone:text-[16px] tablet:text-[20px] text-grey_text dark:text-dark_mode_text phone:text-center"
        >
          driven by the desire to bring ideas to life on the internet. Over
          time, I&apos;ve expanded my expertise to designing and building
          scalable applications, always aiming to create solutions that are both
          reliable and intuitive.
          <br />
          <br />I enjoy the challenge of combining clean architecture,
          performance, and user-focused design to deliver meaningful digital
          experiences.
        </motion.p>
        {/* Tech Stack */}
        <div className="flex flex-col xsPhone:items-start laptop:items-start gap-3 xsPhone:px-[15px] laptop:px-0">
          {/* frontend */}
          <motion.div
            initial={shouldReduceMotion ? false : { x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    delay: 0.1,
                    x: { type: "spring", stiffness: 20 },
                    opacity: { duration: 1 },
                    ease: "easeIn",
                    duration: 0.8,
                  }
            }
            className="flex"
          >
            <div className="flex tablet:gap-4 xsPhone:gap-2">
              <p className="flex uppercase font-main-font xsPhone:text-[12px] phone:text-[16px] tablet:text-[20px] text-grey_text dark:text-dark_mode_text">
                Front<span className="hidden tablet:block">-end</span>
              </p>
              <p className="font-main-font xsPhone:text-[12px] phone:text-[16px] tablet:text-[20px] text-grey_text mr-6 dark:text-dark_mode_text">
                |
              </p>
            </div>
            <div className="flex gap-[10px] items-center">
              {frontEndSkills?.map((skill) => (
                <SkillIcon
                  key={skill.id}
                  name={skill.name}
                  image={skill.image}
                />
              ))}
            </div>
          </motion.div>
          {/* backend */}
          <motion.div
            initial={shouldReduceMotion ? false : { x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    delay: 0.1,
                    x: { type: "spring", stiffness: 20 },
                    opacity: { duration: 1 },
                    ease: "easeIn",
                    duration: 0.8,
                  }
            }
            className="flex"
          >
            <div className="flex tablet:gap-4 xsPhone:gap-2">
              <p className="flex uppercase font-main-font xsPhone:text-[12px] phone:text-[16px] tablet:text-[20px] text-grey_text dark:text-dark_mode_text">
                Back<span className="hidden tablet:block">-end</span>
              </p>
              <p className="font-main-font xsPhone:text-[12px] phone:text-[16px] tablet:text-[20px] text-grey_text mr-6 dark:text-dark_mode_text">
                |
              </p>
            </div>
            <div className="flex gap-[10px] items-center">
              {backEndSkills?.map((skill) => (
                <SkillIcon
                  key={skill.id}
                  name={skill.name}
                  image={skill.image}
                  needsDarkBg={DARK_ICONS.some((icon) =>
                    skill.image.includes(icon)
                  )}
                />
              ))}
            </div>
          </motion.div>
          {/* tools */}
          <motion.div
            initial={shouldReduceMotion ? false : { x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    delay: 0.1,
                    x: { type: "spring", stiffness: 20 },
                    opacity: { duration: 1 },
                    ease: "easeIn",
                    duration: 0.8,
                  }
            }
            className="flex"
          >
            <div className="flex tablet:gap-4 xsPhone:gap-2">
              <p className="flex uppercase font-main-font xsPhone:text-[12px] phone:text-[16px] tablet:text-[20px] text-grey_text dark:text-dark_mode_text">
                Tools
              </p>
              <p className="font-main-font xsPhone:text-[12px] phone:text-[16px] tablet:text-[20px] text-grey_text mr-6 dark:text-dark_mode_text">
                |
              </p>
            </div>
            <div className="flex gap-[10px] items-center">
              {tools?.map((tool) => (
                <SkillIcon key={tool.id} name={tool.name} image={tool.image} />
              ))}
            </div>
          </motion.div>
        </div>
        {/* Email and CV */}
        <div className="flex justify-start gap-6 xsPhone:px-[15px] laptop:px-0">
          {/* CV */}
          <motion.div
            initial={shouldReduceMotion ? false : { x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    delay: 0.1,
                    x: { type: "spring", stiffness: 20 },
                    opacity: { duration: 1 },
                    ease: "easeIn",
                    duration: 0.8,
                  }
            }
          >
            <Link
              href="/assets/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex ring-2 ring-[#53E767] w-[150px] items-center justify-center gap-1 rounded-lg cursor-pointer hover:bg-[#53E767] transition-colors"
            >
              <FaFileAlt
                aria-hidden="true"
                className="w-5 h-5 text-center dark:text-dark_mode_text"
              />
              <p className="font-main-font text-[20px] dark:text-dark_mode_text">
                RESUME / CV
              </p>
            </Link>
          </motion.div>
          {/* Email */}
          <motion.div
            initial={shouldReduceMotion ? false : { x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    delay: 0.1,
                    x: { type: "spring", stiffness: 20 },
                    opacity: { duration: 1 },
                    ease: "easeIn",
                    duration: 0.8,
                  }
            }
          >
            <button
              type="button"
              onClick={handleCopyClick}
              aria-label={isCopied ? "Email copied" : "Copy email to clipboard"}
              className="flex px-1 items-center justify-start gap-1 rounded-lg cursor-pointer transition-colors bg-transparent shadow-none"
            >
              <FaCopy
                aria-hidden="true"
                className="w-5 h-5 text-center dark:text-dark_mode_text hover:text-[#53E767] hover:dark:text-[#53E767]"
              />
              <span className="font-main-font text-[20px] uppercase dark:text-dark_mode_text">
                {isCopied ? "Copied!" : "Email"}
              </span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Right */}
      <motion.div
        initial={shouldReduceMotion ? false : { x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : {
                delay: 0.3,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }
        }
        className="phone:flex phone:h-full phone:w-full phone:max-w-full tablet:w-[520px] laptop:max-h-[520px] xsPhone:hidden"
      >
        <div className="relative w-full flex laptop:pt-10 justify-center">
          <motion.div
            initial={shouldReduceMotion ? false : { x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    delay: 0.5,
                    x: { type: "spring", stiffness: 60 },
                    opacity: { duration: 0.6 },
                    ease: "easeIn",
                    duration: 1,
                  }
            }
          >
            <div className=" z-20 mb-10 laptop:h-[400px] flex">
              {/* LinkedIn */}
              <motion.div
                initial={shouldReduceMotion ? false : { y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : {
                        delay: 0.5,
                        y: { type: "spring", stiffness: 60 },
                        opacity: { duration: 1 },
                        ease: "easeIn",
                        duration: 1,
                      }
                }
                className="justify-center self-end"
              >
                <Link
                  className="h-full"
                  target="_blank"
                  href={LINKEDIN_URL}
                  rel="noopener noreferrer"
                  aria-label="Visit LinkedIn profile"
                >
                  <Image
                    src="/assets/linkedin.svg"
                    alt="LinkedIn"
                    width={90}
                    height={90}
                    className="animate-pulse rounded-full laptop:w-[90px] laptop:h-[90px] phone:w-[44px] phone:h-[44px] cursor-pointer"
                  />
                </Link>
              </motion.div>
              {/* Image and Ellipse */}
              <div className="relative">
                <Image
                  src="/assets/portrait.webp"
                  alt="Portrait photo of Cristopher Areche"
                  width={343}
                  height={350}
                  sizes="(min-width: 1440px) 343px, (min-width: 768px) 45vw, 175px"
                  priority
                  className=" z-10 object-cover ring-8 ring-gray-600 relative rounded-full dark:ring-green_text phone:w-[175px] phone:h-[175px] laptop:h-[350px] laptop:w-[343px] transition-transform transform hover:scale-110"
                />
                {/* Ellipse */}
                <div
                  aria-hidden="true"
                  className="z-0 bg-grey_text dark:bg-green_text/75 rounded-full h-[350px] w-[343px] absolute top-[40px] left-[40px] hidden laptop:block"
                >
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
                initial={shouldReduceMotion ? false : { y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : {
                        delay: 0.5,
                        y: { type: "spring", stiffness: 60 },
                        opacity: { duration: 1 },
                        ease: "easeIn",
                        duration: 1,
                      }
                }
              >
                <Link
                  target="_blank"
                  href={GITHUB_URL}
                  rel="noopener noreferrer"
                  aria-label="Visit GitHub profile"
                >
                  <Image
                    src="/assets/github.svg"
                    alt="GitHub"
                    width={90}
                    height={90}
                    className=" animate-pulse rounded-full laptop:w-[90px] laptop:h-[90px] phone:w-[44px] phone:h-[44px] cursor-pointer"
                  />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
