"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { social } from "@/utils/Object";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/#home" ||
      router.asPath === "/#project" ||
      router.asPath === "/#skills" ||
      router.asPath === "/#contact"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  return (
    <div
      id="navbar"
      className={
        shadow
          ? `fixed w-full h-28 shadow-xl dark:shadow-gray-900 dark:shadow-md z-[100] bg-[${navBg}] dark:bg-black`
          : `fixed w-full h-28 z-[100] dark:bg-black`
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 md:px-10 xl:px-24">
        <Link href="/#home">
          <Image
            src={require("/public/assets/logo.png")}
            alt="/"
            width={50}
            height={10}
          />
        </Link>
        <div>
          <ul
            className={`hidden md:flex text-[${linkColor}] dark:text-dark_mode_text`}
          >
            <li>
              <ThemeSwitcher />
            </li>
            <Link href="/#home">
              <li className="ml-10 text-sm uppercase hover:border-b h-full flex items-center">
                Home
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b h-full flex items-center">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b h-full flex items-center">
                Projects
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b h-full flex items-center">
                About
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b h-full flex items-center">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? `md:hidden fixed left-0 top-0 w-full h-screen bg-black/70` : ``
        }
      >
        <div
          className={
            nav
              ? ` fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] dark:bg-gray-800 p-10 ease-in duration-500`
              : `fixed left-[-100%] top-0 p-10 ease-in duration-500`
          }
        >
          <div>
            <div className="flex w-full items-center justify-between ">
              <Link href="/#home">
                <Image
                  src="/../assets/logo.png"
                  width="60"
                  height="35"
                  alt="/"
                />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 dark:shadow-none dark:bg-dark_mode_text p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4 dark:text-dark_mode_text">
              <p className="w-[85%] md:w-[90%] py-4 dark:text-dark_mode_text">
                Let&apos;s build something legendary together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase dark:text-dark_mode_text">
              <li className="flex">
                <ThemeSwitcher />
              </li>
              <Link href="/#home">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Proyect
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#53E767]">
                Let&apos;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                {social.map(({ id, icon, url }) => (
                  <a
                    href={url}
                    target="_blank"
                    key={id}
                    className="rounded-full shadow-lg shadow-gray-400 dark:shadow-none dark:bg-dark_mode_text p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
