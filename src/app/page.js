"use client";
import Main from "@/app/main/page";
import Navbar from "./navbar/page";
import About from "@/app/about/page";
import Skills from "@/app/skills/page";
import Projects from "@/app/projects/page";
import Contact from "@/app/contact/page";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
