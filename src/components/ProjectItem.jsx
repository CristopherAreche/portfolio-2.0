import Image from "next/image";
import Link from "next/link";

const ProjectItem = (item) => {
  return (
    <div className="gap-2 dark:shadow-none relative flex flex-col md:flex-row items-center justify-between w-full h-auto rounded-xl p-2 group">
      <div className="flex flex-col gap-4">
        <div className="w-full h-auto shadow-md shadow-gray-400 rounded-xl border-4">
          <Image
            className="rounded-xl object-contain"
            src={item.image}
            width={380}
            height={380}
            alt={item.name}
          />
        </div>
        <div className="flex justify-evenly">
          <Link
            href={item.sourceCode}
            className="py-1 px-5 rounded-full uppercase bg-gradient-to-r from-[#53E767] to-[#3fce52] text-white"
          >
            Code
          </Link>
          <Link
            href={item.deployment}
            className={`py-1 px-5 rounded-full uppercase ${
              item.deployment === "in progress"
                ? "bg-gradient-to-r from-[#d21b1b] to-[#f13c20]"
                : "bg-gradient-to-r from-[#53E767] to-[#3fce52]"
            } text-white`}
          >
            {item.deployment === "in progress" ? "In Progress" : "Live"}
          </Link>
        </div>
      </div>
      <div className="w-full h-full xl:px-4 flex flex-col gap-2">
        <h3 className="text-2xl text-gray-800 dark:text-gray-100 xl:text-left text-center">
          {item.name}
        </h3>
        <p className="w-full text-left text-md h-full px-3 py-3 rounded-lg text-gray-800 dark:text-gray-100 cursor-pointer">
          {item.description}
        </p>
        <div className="pb-4 pt-2 text-gray-800 text-center flex px-3 gap-3 flex-wrap">
          {item.allTechnologies.map((items, index) => (
            <div
              className=" border-green-500 text-green-500 border-2 rounded-full py-1 px-3 flex flex-wrap"
              key={index}
            >
              {items}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;

{
  /* <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
<h3 className="text-2xl text-white tracking-wider text-center">
  {name}
</h3>

<Link href={`property/${id}`}>
  <p className="w-full px-3 text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
    {`More Information`}
  </p>
</Link>
</div> */
}
