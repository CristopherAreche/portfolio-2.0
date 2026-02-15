import Link from "next/link";
import { TbWorldCode, TbWorldOff } from "react-icons/tb";

interface CustomLinkProps {
  deployment: string;
  name: string;
}

const CustomLink = ({ deployment, name }: CustomLinkProps) => {
  const isLinkDisabled = deployment === "in progress";

  return (
    <div
      className={`flex gap-2 items-center justify-center font-main-font transition-transform transform hover:scale-90 ${
        isLinkDisabled ? "pointer-events-none" : ""
      }`}
    >
      {isLinkDisabled ? (
        <div className="flex gap-2 items-center justify-center font-main-font">
          <TbWorldOff
            aria-hidden="true"
            className="w-[35px] h-[35px] text-red-700"
          />
          <span className="text-[20px] uppercase hidden tablet:block dark:text-white">
            in progress
          </span>
        </div>
      ) : (
        <Link
          href={deployment}
          target="_blank"
          className="flex gap-2"
          aria-label={`Visit ${name} live website`}
        >
          <TbWorldCode
            aria-hidden="true"
            className="w-[35px] h-[35px] text-grey_text dark:text-white"
          />
          <span className="text-[20px] uppercase hidden tablet:block dark:text-white">
            visit website
          </span>
        </Link>
      )}
    </div>
  );
};

export default CustomLink;
