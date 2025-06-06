import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

export const frontEndSkills = [
  {
    id: 1,
    name: "HTML",
    image: "/assets/skills/html.png",
  },
  {
    id: 2,
    name: "CSS",
    image: "/assets/skills/css.png",
  },
  {
    id: 3,
    name: "JavaScript",
    image: "/assets/skills/javascript.png",
  },
  { id: 4, name: "React", image: "/assets/skills/react.png" },
  { id: 5, name: "Redux-Toolkit", image: "/assets/skills/redux.svg" },
  { id: 6, name: "Bootstrap", image: "/assets/skills/bootstrap.svg" },
  { id: 7, name: "Tailwind", image: "/assets/skills/tailwind.png" },
];
export const backEndSkills = [
  { id: 2, name: "Node", image: "/assets/skills/node.png" },
  { id: 3, name: "Sequelize", image: "/assets/skills/sequelize.svg" },
  { id: 4, name: "PostgreSQL", image: "/assets/skills/postgresql.svg" },
  { id: 5, name: "Postman", image: "/assets/skills/postman.svg" },
  { id: 1, name: "Next", image: "/assets/skills/nextjs.png" },
];
export const tools = [
  { id: 13, name: "Github", image: "/assets/skills/github1.png" },
  { id: 14, name: "Git", image: "/assets/skills/git-icon.svg" },
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
    id: 11,
    name: "CRM",
    image: "/assets/crm.jpeg",
    propertyUrl: "/property",
    frontend_tech: [
      { name: "HTML", image: "/assets/skills/html.png" },
      { name: "CSS", image: "/assets/skills/css.png" },
      { name: "JavaScript", image: "/assets/skills/javascript.png" },
      { name: "React", image: "/assets/skills/react.png" },
      { name: "Redux-Toolkit", image: "/assets/skills/redux.svg" },
      { name: "Tailwind", image: "/assets/skills/tailwind.png" },
    ],
    backend_tech: [
      { id: 2, name: "Node", image: "/assets/skills/node.png" },
      { id: 3, name: "Sequelize", image: "/assets/skills/sequelize.svg" },
      { id: 4, name: "PostgreSQL", image: "/assets/skills/postgresql.svg" },
    ],
    description:
      "Elevate your business management with this amazing CRM project, the all-in-one solution for sales, profiles, inventory, purchases, and VIP customer engagement. Streamline your operations and take control of your business success effortlessly.",
    deployment: "https://crm-2-mocha.vercel.app/",
    sourceCode: "https://github.com/CristopherAreche/CRM",
  },
  {
    index: 2,
    id: 12,
    name: "Dental Care",
    image: "/assets/DentalCare.png",
    propertyUrl: "/property",
    frontend_tech: [
      { name: "HTML", image: "/assets/skills/html.png" },
      { name: "CSS", image: "/assets/skills/css.png" },
      { name: "JavaScript", image: "/assets/skills/javascript.png" },
      { name: "React", image: "/assets/skills/react.png" },
      { name: "Redux-Toolkit", image: "/assets/skills/redux.svg" },
      { name: "Tailwind", image: "/assets/skills/tailwind.png" },
    ],
    backend_tech: [
      { id: 2, name: "Node", image: "/assets/skills/node.png" },
      { id: 3, name: "Sequelize", image: "/assets/skills/sequelize.svg" },
      { id: 4, name: "PostgreSQL", image: "/assets/skills/postgresql.svg" },
    ],
    description:
      "I'm working on an app designed for dental healthcare centers to facilitate appointments with doctors. It consists of two sections: one for patients and another for doctors or administrators. The app manages patient appointments, maintains their medical history, creates digital odontograms for each patient, and keeps track of inventory records.",
    deployment: "https://dental-care-pi.vercel.app/",
    sourceCode: "https://github.com/CristopherAreche/DentalCare",
  },

  {
    index: 3,
    id: 13,
    name: "Business Box",
    image: "/assets/business_box.png",
    propertyUrl: "/property",
    frontend_tech: [
      { name: "HTML", image: "/assets/skills/html.png" },
      { name: "CSS", image: "/assets/skills/css.png" },
      { name: "JavaScript", image: "/assets/skills/javascript.png" },
      { name: "React", image: "/assets/skills/react.png" },
      { name: "Redux-Toolkit", image: "/assets/skills/redux.svg" },
      { name: "Tailwind", image: "/assets/skills/tailwind.png" },
    ],
    backend_tech: [{ id: 2, name: "Node", image: "/assets/skills/node.png" }],
    description:
      "This was built using ReactJS and is hosted on Firebase. Users are able to search properties based on an address, city, or zip code to retrieve a list of active properties currently for sale. You will be able to view property information as well as the specific location of the property integrated with the Google Maps API.",
    deployment: "https://business-box-git-main-jdaniel96.vercel.app/",
    sourceCode: "https://github.com/CristopherAreche/business-box",
  },

  {
    index: 4,
    id: 14,
    name: "Coffee Shop",
    image: "/assets/coffeeShop.png",
    propertyUrl: "/property",
    frontend_tech: [
      { name: "HTML", image: "/assets/skills/html.png" },
      { name: "CSS", image: "/assets/skills/css.png" },
      { name: "JavaScript", image: "/assets/skills/javascript.png" },
      { name: "React", image: "/assets/skills/react.png" },
      { name: "Redux-Toolkit", image: "/assets/skills/redux.svg" },
      { name: "Tailwind", image: "/assets/skills/tailwind.png" },
    ],
    backend_tech: [
      { id: 2, name: "Node", image: "/assets/skills/node.png" },
      { id: 3, name: "Sequelize", image: "/assets/skills/sequelize.svg" },
      { id: 4, name: "PostgreSQL", image: "/assets/skills/postgresql.svg" },
    ],
    description:
      "An online hub for coffee enthusiasts, this website allows users to effortlessly explore and order diverse coffee blends. The user-friendly interface ensures a seamless experience, while a convenient order history feature lets users track and replicate their favorite coffee choices. Elevate your coffee experience with this stylish and user-centric web solution.",
    deployment: "in progress",
    sourceCode: "https://github.com/CristopherAreche/business-box",
  },

  {
    index: 5,
    id: 15,
    name: "Workout Webapp",
    image: "/assets/workout.jpeg",
    propertyUrl: "/property",
    frontend_tech: [
      { name: "HTML", image: "/assets/skills/html.png" },
      { name: "CSS", image: "/assets/skills/css.png" },
      { name: "JavaScript", image: "/assets/skills/javascript.png" },
      { name: "React", image: "/assets/skills/react.png" },
      { name: "Tailwind", image: "/assets/skills/tailwind.png" },
    ],
    description:
      "Welcome to my Fitness Webapp, your go-to destination for targeted workouts based on specific body regions. This user-friendly website offers a curated collection of exercises designed to tone and strengthen different parts of your body",
    deployment: "https://fitness-website-ashy-nine.vercel.app/",
    sourceCode: "https://github.com/CristopherAreche/Fitness-Website",
  },

  {
    index: 6,
    id: 16,
    name: "Rick and Morthy",
    image: "/assets/rickmorty_wp.jpeg",
    propertyUrl: "/property",
    frontend_tech: [
      { name: "HTML", image: "/assets/skills/html.png" },
      { name: "CSS", image: "/assets/skills/css.png" },
      { name: "JavaScript", image: "/assets/skills/javascript.png" },
      { name: "React", image: "/assets/skills/react.png" },
      { name: "Bootstrap", image: "/assets/skills/bootstrap.svg" },
    ],
    description:
      "Explore the quirky world of Rick and Morty through my React.js project, featuring an extensive character encyclopedia. Discover character traits, episode appearances, and filter options for status, species, and gender.",
    deployment: "https://cristopherareche.github.io/rick_and_morty_website/",
    sourceCode: "https://github.com/CristopherAreche/rick_and_morty_website",
  },

  {
    index: 7,
    id: 17,
    name: "Pokemon Webapp",
    image: "/assets/pokemon.png",
    propertyUrl: "/property",
    frontend_tech: [
      { name: "HTML", image: "/assets/skills/html.png" },
      { name: "CSS", image: "/assets/skills/css.png" },
      { name: "JavaScript", image: "/assets/skills/javascript.png" },
      { name: "React", image: "/assets/skills/react.png" },
      { name: "Redux-Toolkit", image: "/assets/skills/redux.svg" },
    ],
    backend_tech: [
      { name: "Node", image: "/assets/skills/node.png" },
      { name: "Sequelize", image: "/assets/skills/sequelize.svg" },
      { name: "PostgreSQL", image: "/assets/skills/postgresql.svg" },
    ],
    description:
      "This was built using ReactJS and is hosted on Firebase. Users are able to search properties based on an address, city, or zip code to retrieve a list of active properties currently for sale. You will be able to view property information as well as the specific location of the property integrated with the Google Maps API.",
    deployment: "https://pokemon-website-2-0.vercel.app/",
    sourceCode: "https://github.com/CristopherAreche/pokemon-website",
  },
];
