"use client";
import { useEffect, useState } from "react";
import { BsSun } from "react-icons/bs";
import { RiMoonClearFill } from "react-icons/ri";
import { useTheme } from "next-themes";
import { useLanguage } from "@/app/language-provider";

const ThemeSwitcher = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? t.themeSwitcher.toLight : t.themeSwitcher.toDark}
      className={`${
        isDark ? "dark bg-gray-400" : ""
      } bg-light_bg dark:bg-grey_text text-dark_mode_text gap-3 text-xl h-[38px] w-[38px] flex justify-center items-center rounded-full shadow-none cursor-pointer`}
    >
      {isDark ? (
        <BsSun
          aria-hidden="true"
          className="text-yellow-400 font-bold h-5 w-5 transition-transform transform hover:scale-125"
        />
      ) : (
        <RiMoonClearFill
          aria-hidden="true"
          className="text-grey_text h-5 w-5 transition-transform transform hover:scale-125"
        />
      )}
    </button>
  );
};

export default ThemeSwitcher;
