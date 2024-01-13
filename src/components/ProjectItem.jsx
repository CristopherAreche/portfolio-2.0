import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { TbWorldCode } from "react-icons/tb";
import { TbWorldOff } from "react-icons/tb";
import CustomLink from "./CustomLink";
import { motion } from "framer-motion";

const ProjectItem = ({
  index,
  id,
  name,
  image,
  frontend_tech,
  backend_tech,
  description,
  deployment,
  sourceCode,
}) => {
  const isOddId = id % 2 !== 0;
  return (
    <>
      {isOddId ? (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 2,
            x: { type: "tween", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 4,
          }}
          key={index}
          className="xsPhone:w-[324px] tablet:w-full tablet:gap-8 tablet:h-[300px] gap-2  dark:shadow-none flex flex-col md:flex-row items-center justify-between"
        >
          <div className="flex flex-col h-full">
            <Image
              className="tablet:max-w-[340px] tablet:h-[270px] shadow-lg shadow-gray-400 dark:shadow-transparent rounded-xl border-2 border-black dark:border-white transition-transform transform hover:scale-90"
              src={image}
              width={324}
              height={231}
              alt={name}
            />
            {/* Github and Email */}
            <div className="flex justify-between items-center mt-3">
              <h3 className="xsPhone:text-[25px]  text-grey_text dark:text-green_text font-main-font p-0 m-0 xsPhone:block tablet:hidden">
                {name}
              </h3>
              <div className="w-auto flex justify-end tablet:justify-between gap-[13px]">
                <Link
                  target="_blank"
                  href={sourceCode}
                  className="rounded-full gap-2 flex justify-center items-center font-main-font transition-transform transform hover:scale-90"
                >
                  <FaGithub className="w-[35px] h-[35px] text-grey_text dark:text-white" />
                  <p className="text-[20px] dark:text-white uppercase hidden tablet:block">
                    Source Code
                  </p>
                </Link>
                <Link
                  target="_blank"
                  href={deployment === "in progress" ? "#" : deployment}
                  className={`rounded-full uppercase transition-transform transform hover:scale-90 ${
                    deployment === "in progress" ? "" : ""
                  } `}
                >
                  <div className="flex gap-2 items-center justify-center font-main-font">
                    {deployment === "in progress" ? (
                      <TbWorldOff className="w-[35px] h-[35px] text-red-700" />
                    ) : (
                      <TbWorldCode className="w-[35px] h-[35px] text-grey_text dark:text-white" />
                    )}
                    <p className="text-[20px] uppercase hidden tablet:block dark:text-white">
                      Visit Website
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Name and description */}
          <div className="flex flex-col tablet:w-auto tablet:h-full">
            <h3 className="xsPhone:hidden tablet:block tablet:text-start text-[45px] font-main-font text-grey_text dark:text-green_text  xl:text-left text-center">
              {name}
            </h3>
            <p className="tablet:mb-5 w-full tablet:h-[130px] text-left text-md py-3 text-grey_text dark:text-gray-100 cursor-pointer overflow-hidden">
              {description}
            </p>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.1,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 0.1,
              }}
            >
              <div className="flex gap-4 mb-4">
                {frontend_tech &&
                  frontend_tech.map(({ index, name, image }) => (
                    <Image
                      width={30}
                      height={30}
                      key={index}
                      src={image}
                      alt={name}
                      className="transition-transform transform hover:scale-125"
                    />
                  ))}
              </div>
              <div className="flex gap-4">
                {backend_tech &&
                  backend_tech.map(({ index, name, image }) => (
                    <Image
                      width={30}
                      height={30}
                      key={index}
                      src={image}
                      alt={name}
                      className="transition-transform transform hover:scale-125"
                    />
                  ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.1,
            x: { type: "tween", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 0.1,
          }}
          key={index}
          className="xsPhone:w-[324px] tablet:w-full tablet:gap-8 tablet:h-[300px] gap-2  dark:shadow-none flex flex-col-reverse md:flex-row items-center justify-between"
        >
          {/* Name and description */}
          <div className="flex flex-col tablet:w-auto tablet:h-full">
            <h3 className="xsPhone:hidden  tablet:block tablet:text-end text-[45px] font-main-font text-grey_text dark:text-green_text text-center">
              {name}
            </h3>
            <p className="tablet:mb-5 tablet:text-right w-full tablet:h-[130px] text-left  text-md py-3 text-grey_text dark:text-gray-100 cursor-pointer overflow-hidden">
              {description}
            </p>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.1,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 0.1,
              }}
              className="tablet:flex tablet:flex-col tablet:items-end"
            >
              <div className="flex gap-4 mb-4">
                {frontend_tech &&
                  frontend_tech.map(({ index, name, image }) => (
                    <Image
                      className="object-cover object-center transition-transform transform hover:scale-125"
                      width={30}
                      height={30}
                      key={index}
                      src={image}
                      alt={name}
                    />
                  ))}
              </div>
              <div className="flex gap-4">
                {backend_tech &&
                  backend_tech.map(({ index, name, image }) => (
                    <Image
                      width={30}
                      height={30}
                      key={index}
                      src={image}
                      alt={name}
                      className="transition-transform transform hover:scale-125"
                    />
                  ))}
              </div>
            </motion.div>
          </div>
          {/* Image */}
          <div className="flex flex-col h-full">
            <Image
              className="tablet:max-w-[340px] tablet:h-[270px] shadow-lg shadow-gray-400 dark:shadow-transparent rounded-xl border-2 border-black dark:border-white transition-transform transform hover:scale-90"
              src={image}
              width={324}
              height={231}
              alt={name}
            />
            {/* Github and Email */}
            <div className="flex justify-between items-center mt-3">
              <h3 className="xsPhone:text-[25px] text-grey_text dark:text-green_text font-main-font p-0 m-0 xsPhone:block tablet:hidden">
                {name}
              </h3>
              <div className="w-auto flex justify-end tablet:justify-between gap-[13px]">
                <Link
                  target="_blank"
                  href={sourceCode}
                  className="rounded-full gap-2 flex justify-center items-center font-main-font transition-transform transform hover:scale-90"
                >
                  <FaGithub className="w-[35px] h-[35px] text-grey_text dark:text-white" />
                  <p className="text-[20px] uppercase hidden tablet:block dark:text-white">
                    Source Code
                  </p>
                </Link>
                <CustomLink href={deployment} deployment={deployment} />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ProjectItem;
