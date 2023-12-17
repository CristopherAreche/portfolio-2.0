"use client";

import React, { useEffect, useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";
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
      } bg-gray-700 text-dark_mode_text flex gap-3 text-xl p-3 rounded-full`}
    >
      {theme === "dark" ? (
        <label
          className="cursor-pointer flex justify-center items-center gap-2"
          onClick={() => setTheme("light")}
        >
          <BsSun className="text-yellow-400 font-bold" />
        </label>
      ) : (
        <label
          className="cursor-pointer flex justify-center items-center gap-2"
          onClick={() => setTheme("dark")}
        >
          <BsMoon className="text-white" />
        </label>
      )}
    </div>
  );
};

export default ThemeSwitcher;
