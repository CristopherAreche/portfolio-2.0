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
    <div className="dark:bg-gray-800 dark:text-dark_mode_text flex gap-3 text-xl py-[3px] px-2 rounded-full">
      <label className="" onClick={() => setTheme("light")}>
        <BsSun />
      </label>
      <label className="" onClick={() => setTheme("dark")}>
        <BsMoon />
      </label>
    </div>
  );
};

export default ThemeSwitcher;
