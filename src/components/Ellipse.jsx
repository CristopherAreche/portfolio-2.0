import React from "react";

const Ellipse = () => {
  return (
    <div className="z-[-1] bg-grey_text dark:bg-green-500 dark:flex rounded-full phone:w-[175px] phone:h-[175px] laptop:h-[350px] laptop:w-[343px] absolute laptop:top-[70px] laptop:left-[70px] phone:top-[25px] phone:left-[30px]">
      <svg
        width="342"
        height="345"
        viewBox="0 0 342 345"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="171" cy="172.5" rx="171" ry="172.5" />
      </svg>
    </div>
  );
};

export default Ellipse;
