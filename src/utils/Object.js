import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

export const skills = [
  {
    id: 1,
    name: "HTML",
    image: "/../assets/skills/html.png",
  },
  {
    id: 2,
    name: "CSS",
    image: "/../assets/skills/css.png",
  },
  {
    id: 3,
    name: "JavaScript",
    image: "/../assets/skills/javascript.png",
  },
  { id: 4, name: "React", image: "/../assets/skills/react.png" },
  { id: 5, name: "Redux-Toolkit", image: "/../assets/skills/redux.svg" },
  { id: 6, name: "Bootstrap", image: "/../assets/skills/bootstrap.svg" },
  { id: 7, name: "Tailwind", image: "/../assets/skills/tailwind.png" },
  { id: 8, name: "Next", image: "/../assets/skills/nextjs.png" },
  { id: 9, name: "Node", image: "/../assets/skills/node.png" },
  { id: 10, name: "Sequelize", image: "/../assets/skills/sequelize.svg" },
  { id: 11, name: "PostgreSQL", image: "/../assets/skills/postgresql.svg" },
  { id: 12, name: "Postman", image: "/../assets/skills/postman.svg" },
  { id: 13, name: "Github", image: "/../assets/skills/github1.png" },
  { id: 14, name: "Git", image: "/../assets/skills/git-icon.svg" },
  {
    id: 15,
    name: "VS Code",
    image: "/../assets/skills/visual-studio-code.svg",
  },
  { id: 16, name: "Trello", image: "/../assets/skills/trello.svg" },
];
export const social = [
  {
    id: 1,
    name: "LinkedIn",
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/in/cristopher-areche-guillen-01a603186/",
  },
  {
    id: 2,
    name: "Github",
    icon: <FaGithub />,
    url: "https://github.com/CristopherAreche?tab=repositories",
  },
  {
    id: 3,
    name: "X",
    icon: <RiTwitterXFill />,
    url: "https://twitter.com/criistopher_ag",
  },
  {
    id: 4,
    name: "Gmail",
    icon: <AiOutlineMail />,
    url: "mailto:cristopherareche764@gmail.com",
  },
];
export const projects = [
  {
    index: 1,
    id: 10,
    name: "Rick and Morthy Webapp",
    image: "/../assets/projects/rickmorty_wp.jpeg",
    propertyUrl: "/property",
    mainTechnologies: [" React JS", "Bootstrap", "Javascript"],
    allTechnologies: ["HTML & CSS", "React", "Bootstrap", "Javascript"],
    description:
      "Explore the quirky world of Rick and Morty through my React.js project, featuring an extensive character encyclopedia. Discover character traits, episode appearances, and filter options for status, species, and gender. Dive into specific locations to find the characters that inhabit them, all in a user-friendly experience that brings React.js and the show's charm together",
    deployment: "https://cristopherareche.github.io/rick_and_morty_website/",
    sourceCode: "https://github.com/CristopherAreche/rick_and_morty_website",
  },
  {
    index: 2,
    id: 11,
    name: "CRM",
    image: "/../assets/projects/crm.jpeg",
    propertyUrl: "/property",
    mainTechnologies: [" React JS", "Bootstrap", "Javascript"],
    allTechnologies: [
      "HTML & CSS",
      "React JS",
      "Tailwind CSS",
      "Javascript",
      "Node JS",
      "PosgreSQL",
      "Sequalize",
      "Express",
    ],
    description:
      "Elevate your business management with this amazing CRM project, the all-in-one solution for sales, profiles, inventory, purchases, and VIP customer engagement. Streamline your operations and take control of your business success effortlessly.",
    deployment: "https://crm-henry-34b.vercel.app/",
    sourceCode: "https://github.com/CristopherAreche/crm-front",
  },
  {
    index: 3,
    id: 12,
    name: "Business Box",
    image: "/../assets/projects/business_box.jpeg",
    propertyUrl: "/property",

    mainTechnologies: [" React JS", "Bootstrap", "Node JS"],
    allTechnologies: ["HTML & CSS", "React", "Bootstrap", "Javascript", "Node"],
    description:
      "This was built using ReactJS and is hosted on Firebase. Users are able to search properties based on an address, city, or zip code to retrieve a list of active properties currently for sale. You will be able to view property information as well as the specific location of the property integrated with the Google Maps API.",
    deployment: "https://business-box-git-main-jdaniel96.vercel.app/",
    sourceCode: "https://github.com/CristopherAreche/business-box",
  },
  {
    index: 4,
    id: 13,
    name: "Pokemon Webapp",
    image: "/../assets/projects/pokemon.jpeg",
    propertyUrl: "/property",

    mainTechnologies: [" React JS", "Javascript", "Bootstrap"],
    allTechnologies: [
      "HTML & CSS",
      "React JS",
      "Javascript",
      "Node JS",
      "PosgreSQL",
      "Sequalize",
      "Express",
    ],
    description:
      "This was built using ReactJS and is hosted on Firebase. Users are able to search properties based on an address, city, or zip code to retrieve a list of active properties currently for sale. You will be able to view property information as well as the specific location of the property integrated with the Google Maps API.",
    deployment: "https://pokemon-lemon-two.vercel.app/",
    sourceCode: "https://github.com/CristopherAreche/pokemon-website",
  },
];
