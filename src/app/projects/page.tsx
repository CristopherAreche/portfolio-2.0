import { Metadata } from "next";
import Projects from "@/components/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my portfolio of full-stack web development projects built with React, Next.js, Node.js, and PostgreSQL.",
};

export default function ProjectsPage() {
  return <Projects />;
}
