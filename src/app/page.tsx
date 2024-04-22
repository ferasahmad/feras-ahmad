"use client";
import { BackgroundGradientAnimation } from "@/components/BackgroundGradientAnimation";

export default function Home() {
  return (
    <>
      <video
        className="w-full h-full float-left p-0 fixed z-[-1] object-cover filter brightness-70"
        src={"/video.mp4"}
        playsInline
        autoPlay
        loop
        muted
        controls={false}
      />
      <BackgroundGradientAnimation />
    </>
  );
}
