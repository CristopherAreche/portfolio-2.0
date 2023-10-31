import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ name, id, image, mainTechnologies }) => {
  return (
    <>
      <div className="dark:bg-gray-800 dark:shadow-none relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#4ee862] to-[#53E767]">
        <Image
          className="rounded-xl group-hover:opacity-10"
          src={image.toString()}
          width={600}
          height={600}
          alt={name}
        />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-2xl text-white tracking-wider text-center">
            {name}
          </h3>
          <p className="pb-4 pt-2 text-white text-center">
            {mainTechnologies[0]}
          </p>
          <Link href={`property/${id}`}>
            <p className="w-full px-3 text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
              {`More Information`}
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectItem;
