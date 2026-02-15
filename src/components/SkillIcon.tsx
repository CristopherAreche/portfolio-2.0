"use client";
import { useState } from "react";
import Image from "next/image";

interface SkillIconProps {
  name: string;
  image: string;
  size?: number;
  needsDarkBg?: boolean;
}

const SkillIcon = ({
  name,
  image,
  size = 30,
  needsDarkBg = false,
}: SkillIconProps) => {
  const [showName, setShowName] = useState(false);

  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={() => setShowName(true)}
      onMouseLeave={() => setShowName(false)}
      onClick={() => setShowName((prev) => !prev)}
    >
      {showName && (
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-grey_text dark:bg-gray-700 text-white text-[11px] px-2 py-0.5 rounded font-main-font z-10 pointer-events-none">
          {name}
        </span>
      )}
      <div
        className={
          needsDarkBg
            ? "dark:bg-white dark:rounded-full dark:p-[2px] flex items-center justify-center"
            : ""
        }
      >
        <Image
          src={image}
          alt={name}
          width={size}
          height={size}
          className="phone:h-[28px] transition-transform transform hover:scale-125 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default SkillIcon;
