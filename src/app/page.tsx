"use client";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Technologies from "@/components/sections/Technologies";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-transparent via-black via-black to-black">
      <Hero />
      <About />
      <Experience />
      <Technologies />
      <Contact />
    </div>
  );
}
