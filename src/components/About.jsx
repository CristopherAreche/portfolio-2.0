import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  const resume = "/public/assets/resume.pdf";
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">//I'm not your normal developer</p>
          <p className="py-2 text-gray-600">
            I enjoy creating things that live on the internet. I learned web
            development because I wanted to have the ability to create useful
            and attractive things online. I love the idea of being able to bring
            an idea to life and share it with the world through the web.
          </p>
          <p className="py-2 text-gray-600">
            Additionally, I have always enjoyed the challenge of learning
            something new, and web development provides me with the opportunity
            to do so constantly.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest proyects.
          </p>
          <Link href={resume} target="_blank" rel="noreferrer">
            <button className="px-8 py-3 mt-6 mr-8 hover:scale-105 ease-in duration-300">
              Resume
            </button>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-full flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src={require("../../public/assets/me.jpeg")}
            alt="portrait-photo"
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
