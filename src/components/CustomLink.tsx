import Link from "next/link";
import { TbWorldCode, TbWorldOff } from "react-icons/tb";
import { ProjectDeployment } from "@/types";

interface CustomLinkProps {
  deployment: ProjectDeployment;
  name: string;
}

const CustomLink = ({ deployment, name }: CustomLinkProps) => {
  if (deployment.status === "in-progress") {
    return (
      <div className="flex gap-2 items-center justify-center font-main-font pointer-events-none transition-transform transform hover:scale-90">
        <TbWorldOff
          aria-hidden="true"
          className="w-[35px] h-[35px] text-red-700"
        />
        <span className="text-[20px] uppercase hidden tablet:block dark:text-white">
          in progress
        </span>
      </div>
    );
  }

  return (
    <div className="flex gap-2 items-center justify-center font-main-font transition-transform transform hover:scale-90">
      <Link
        href={deployment.url}
        target="_blank"
        rel="noopener noreferrer"
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
    </div>
  );
};

export default CustomLink;
