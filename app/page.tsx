"use client";

import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <Hero />
      <AboutMe />
      <Projects />
      <Skills />
      {/* <Experience /> */}
      {/* <Contact /> */}
      <Footer />
    </main>
  );
}
