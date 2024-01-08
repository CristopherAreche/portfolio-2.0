"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ThemeSwitcher from "./ThemeSwitcher";
import { FaCode } from "react-icons/fa6";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (router.asPath === "/#project") {
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
          ? `fixed absolute w-full mt-[60px] shadow-xl dark:shadow-gray-900 dark:shadow-md z-[100] bg-[${navBg}] dark:bg-black`
          : `absolute xsPhone:top-[80vh] tablet:top-0 w-full mt-[71px] z-[100] dark:bg-black`
      }
    >
      <div className="flex justify-center items-center w-full h-full">
        <div
          className={`flex justify-between items-center text-[${linkColor}] h-[46px] w-[223px] px-1 dark:bg-light_text bg-grey_text rounded-full`}
        >
          <ThemeSwitcher />

          <Link
            href="/#home"
            className="w-[160px] h-[40px] bg-light_bg dark:bg-grey_text justify-center items-center rounded-full flex gap-1"
          >
            <FaCode className="w-[34px] h-[20px] text-grey_text dark:text-light_text" />

            <p className="text-full text-[20px] dark:text-light_text text-grey_text font-main-font uppercase uppercase">
              projects
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
