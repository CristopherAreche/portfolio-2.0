import Link from "next/link";
import { TbWorldCode, TbWorldOff } from "react-icons/tb";
import { CustomLinkProps } from "@/types";

const CustomLink = ({ deployment }: CustomLinkProps) => {
  const isLinkDisabled = deployment === "in progress";

  return (
    <div
      className={`flex gap-2 items-center justify-center font-main-font transition-transform transform hover:scale-90 ${
        isLinkDisabled ? "pointer-events-none" : ""
      }`}
    >
      {isLinkDisabled ? (
        <div className="flex gap-2 items-center justify-center font-main-font">
          <TbWorldOff className="w-[35px] h-[35px] text-red-700" />
          <p className="text-[20px] uppercase hidden tablet:block dark:text-white">
            in progress
          </p>
        </div>
      ) : (
        <Link href={deployment} className="flex gap-2" target="_blank">
          <TbWorldCode className="w-[35px] h-[35px] text-grey_text dark:text-white" />
          <p className="text-[20px] uppercase hidden tablet:block dark:text-white">
            visit website
          </p>
        </Link>
      )}
    </div>
  );
};

export default CustomLink;
