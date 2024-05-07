"use client";
import { BackgroundGradientAnimation } from "@/components/BackgroundGradientAnimation";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Technologies from "@/components/sections/Technologies";
import { BREAKPOINTS } from "@/constants/styles";
import styled from "@emotion/styled";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col relative">
      {/* <BackgroundGradientAnimation containerClassName="absolute z-50" /> */}
      <Hero />
      <MobileSpace />
      <About />
      <MobileSpace />

      <Experience />
      <MobileSpace />

      <Technologies />
      <MobileSpace />

      <Contact />
    </div>
  );
}

const MobileSpace = styled.div`
  display: none;
  width: 100%;
  height: 200px;
  @media (max-width: ${BREAKPOINTS.MD}) {
    display: inline;
  }
`;
