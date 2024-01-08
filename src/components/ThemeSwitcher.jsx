"use client";

import React, { useEffect, useState } from "react";
import { BsSun } from "react-icons/bs";
import { RiMoonClearFill } from "react-icons/ri";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div
      className={`${
        theme === "dark" ? "dark bg-gray-400" : ""
      } bg-light_bg dark:bg-grey_text text-dark_mode_text gap-3 text-xl h-[38px] w-[38px] flex justify-center rounded-full`}
    >
      {theme === "dark" ? (
        <label
          className="cursor-pointer flex justify-center items-center gap-2"
          onClick={() => setTheme("light")}
        >
          <BsSun className="text-yellow-400 font-bold h-30 w-30 transition-transform transform hover:scale-150" />
        </label>
      ) : (
        <label
          className="cursor-pointer flex justify-center items-center gap-2"
          onClick={() => setTheme("dark")}
        >
          <RiMoonClearFill className="text-grey_text h-30 w-30 transition-transform transform hover:scale-150" />
        </label>
      )}
    </div>
  );
};

export default ThemeSwitcher;
