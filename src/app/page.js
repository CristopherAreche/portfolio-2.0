"use client";
import Main from "@/components/Main";
import Navbar from "../components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Main />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
