"use client";
import { BackgroundGradientAnimation } from "@/components/BackgroundGradientAnimation";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Technologies from "@/components/sections/Technologies";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col relative">
      {/* <BackgroundGradientAnimation containerClassName="absolute z-50" /> */}
      <Hero />
      <About />
      <Experience />
      <Technologies />
      <Contact />
    </div>
  );
}
