import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineDownload } from "react-icons/ai";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-16 dark:bg-dark_bg"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#53E767]">
            About
          </p>
          <h2 className="py-4 dark:text-dark_mode_text">Who I Am</h2>
          <p className="py-2 text-gray-600">
            {" //Transforming ideas into seamless web wonders"}
          </p>
          <p className="py-2 text-gray-600 dark:text-dark_mode_text">
            I enjoy creating things that live on the internet. I learned web
            development because I wanted to have the ability to create useful
            and attractive things online. I love the idea of being able to bring
            an idea to life and share it with the world through the web.
          </p>
          <p className="py-2 text-gray-600 dark:text-dark_mode_text">
            Additionally, I have always enjoyed the challenge of learning
            something new, and web development provides me with the opportunity
            to do so constantly.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest proyects.
            </p>
          </Link>
          <div className="flex items-center">
            <a
              href="/CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="items-center justify-center flex"
            >
              <button className="px-8 py-3 mt-6 mr-8 hover:scale-105 ease-in duration-300 dark:shadow-none">
                CV
              </button>
            </a>
            <a
              href="/CV.pdf"
              download
              className="rounded-full shadow-lg dark:shadow-none dark:bg-dark_mode_text shadow-gray-400 mt-6 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <AiOutlineDownload size={20} />
            </a>
          </div>
        </div>
        <div className="w-full h-auto m-auto shadow-xl dark:shadow-none dark:bg-gray-800 shadow-gray-400 rounded-full hidden lg:block md:block items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src={require("/public/assets/me.jpeg")}
            alt="portrait-photo"
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
