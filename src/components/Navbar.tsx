"use client";
import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Index" },
  { href: "/projects", label: "Projects" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      aria-label="Main navigation"
      className="fixed top-0 w-full z-50 bg-light_bg dark:bg-dark_bg border-b border-gray-300 dark:border-gray-700"
    >
      <div className="flex justify-end items-stretch px-6 laptop:px-12">
        {navLinks.map(({ href, label }) => {
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
              {label}
            </Link>
          );
        })}
        <div className="flex items-center pl-5">
          <ThemeSwitcher />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
