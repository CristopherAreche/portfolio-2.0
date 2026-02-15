"use client";
import { useEffect, useRef, useState } from "react";
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
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearHideTimer = () => {
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      clearHideTimer();
    };
  }, []);

  return (
    <button
      type="button"
      className="relative flex items-center justify-center rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green_text"
      aria-label={name}
      aria-pressed={showName}
      onMouseEnter={() => {
        clearHideTimer();
        setShowName(true);
      }}
      onMouseLeave={() => {
        clearHideTimer();
        setShowName(false);
      }}
      onFocus={() => {
        clearHideTimer();
        setShowName(true);
      }}
      onBlur={() => {
        clearHideTimer();
        setShowName(false);
      }}
      onPointerDown={(event) => {
        if (event.pointerType !== "touch") return;

        clearHideTimer();
        setShowName(true);

        hideTimerRef.current = setTimeout(() => {
          setShowName(false);
          hideTimerRef.current = null;
        }, 1400);
      }}
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
          className="phone:h-[28px] transition-transform transform hover:scale-125"
        />
      </div>
    </button>
  );
};

export default SkillIcon;
