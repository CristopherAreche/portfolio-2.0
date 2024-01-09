import Link from "next/link";
import { TbWorldCode, TbWorldOff } from "react-icons/tb";
const CustomLink = ({ deployment }) => {
  const isLinkDisabled = deployment === "in progress";

  return (
    <div
      className={`flex gap-2 items-center justify-center font-main-font transition-transform transform hover:scale-90 ${
        isLinkDisabled ? "pointer-events-none" : ""
      }`}
    >
      <Link href={deployment} className="flex gap-2" target="_blank">
        {isLinkDisabled ? (
          <TbWorldOff className="w-[35px] h-[35px] text-red-700" />
        ) : (
          <TbWorldCode className="w-[35px] h-[35px] text-grey_text dark:text-white" />
        )}
        <p className="text-[20px] uppercase hidden tablet:block dark:text-white">
          {isLinkDisabled ? "in progress" : "visit website"}
        </p>
      </Link>
    </div>
  );
};

export default CustomLink;
