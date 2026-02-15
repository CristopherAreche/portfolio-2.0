"use client";
import ThemeSwitcher from "./ThemeSwitcher";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/app/language-provider";

const navLinks = [
  { href: "/", key: "index" as const },
  { href: "/projects", key: "projects" as const },
];

const Navbar = () => {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      aria-label="Main navigation"
      className="fixed top-0 w-full z-50 bg-light_bg dark:bg-dark_bg border-b border-gray-300 dark:border-gray-700"
    >
      <div className="flex justify-between items-stretch px-4 laptop:px-12">
        <div
          className="flex items-center gap-1"
          role="group"
          aria-label={t.navbar.languageLabel}
        >
          <button
            type="button"
            onClick={() => setLanguage("en")}
            aria-pressed={language === "en"}
            className={`px-3 py-1 text-xs rounded-md border font-main-font tracking-wide ${
              language === "en"
                ? "border-green_text text-green_text"
                : "border-gray-300 dark:border-gray-700 text-grey_text dark:text-dark_mode_text"
            }`}
          >
            {t.navbar.english}
          </button>
          <button
            type="button"
            onClick={() => setLanguage("es")}
            aria-pressed={language === "es"}
            className={`px-3 py-1 text-xs rounded-md border font-main-font tracking-wide ${
              language === "es"
                ? "border-green_text text-green_text"
                : "border-gray-300 dark:border-gray-700 text-grey_text dark:text-dark_mode_text"
            }`}
          >
            {t.navbar.spanish}
          </button>
        </div>

        <div className="flex items-stretch">
          {navLinks.map(({ href, key }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center px-5 py-3 -mb-[1px] border-b-2 transition-all duration-300 font-main-font uppercase text-[16px] tracking-wider ${
                  isActive
                    ? "text-green_text border-green_text"
                    : "text-grey_text dark:text-dark_mode_text border-transparent hover:text-green_text hover:border-green_text"
                }`}
              >
                {t.navbar[key]}
              </Link>
            );
          })}
          <div className="flex items-center pl-5">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
