"use client";
import ThemeSwitcher from "./ThemeSwitcher";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/app/language-provider";
import { HiFolder, HiHome } from "react-icons/hi";

const navLinks = [
  { href: "/", key: "index" as const },
  { href: "/projects", key: "projects" as const },
];

const Navbar = () => {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const isEnglish = language === "en";

  const handleLanguageToggle = () => {
    setLanguage(isEnglish ? "es" : "en");
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      aria-label="Main navigation"
      className="fixed top-0 w-full z-50 bg-light_bg dark:bg-dark_bg border-b border-gray-300 dark:border-gray-700"
    >
      <div className="flex justify-between items-stretch px-3 tablet:px-4 laptop:px-12">
        <div
          className="flex items-center"
          role="group"
          aria-label={t.navbar.languageLabel}
        >
          <button
            type="button"
            onClick={handleLanguageToggle}
            aria-label={t.navbar.languageToggleLabel}
            className="px-2 tablet:px-3 py-1 text-xs rounded-md border border-gray-300 dark:border-gray-700 font-main-font tracking-wide flex items-center gap-1"
          >
            <span
              className={
                isEnglish
                  ? "text-green_text"
                  : "text-grey_text dark:text-dark_mode_text"
              }
            >
              {t.navbar.english}
            </span>
            <span className="text-grey_text dark:text-dark_mode_text">|</span>
            <span
              className={
                !isEnglish
                  ? "text-green_text"
                  : "text-grey_text dark:text-dark_mode_text"
              }
            >
              {t.navbar.spanish}
            </span>
          </button>
        </div>

        <div className="flex items-stretch">
          {navLinks.map(({ href, key }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                aria-label={t.navbar[key]}
                className={`flex items-center justify-center px-3 tablet:px-5 py-3 -mb-[1px] border-b-2 transition-all duration-300 font-main-font uppercase text-[16px] tracking-wider ${
                  isActive
                    ? "text-green_text border-green_text"
                    : "text-grey_text dark:text-dark_mode_text border-transparent hover:text-green_text hover:border-green_text"
                }`}
              >
                {href === "/" ? (
                  <>
                    <HiHome
                      className="tablet:hidden w-5 h-5"
                      aria-hidden="true"
                    />
                    <span className="hidden tablet:inline-flex">
                      {t.navbar[key]}
                    </span>
                  </>
                ) : (
                  <>
                    <HiFolder
                      className="tablet:hidden w-5 h-5"
                      aria-hidden="true"
                    />
                    <span className="hidden tablet:inline-flex">
                      {t.navbar[key]}
                    </span>
                  </>
                )}
              </Link>
            );
          })}
          <div className="flex items-center pl-2 tablet:pl-5">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
