import { NextPage } from "next";
import FadeInElement from "../animations/FadeInElement";

const Hero: NextPage = () => {
  return (
    <FadeInElement duration={2}>
      <div className="relative w-full h-screen">
        <FadeInElement duration={5}>
          <video
            src="/videos/video.mp4"
            className="w-screen h-screen object-cover"
            autoPlay
            loop
            muted
          />
        </FadeInElement>
        <div className="absolute inset-0 flex items-center justify-center flex-col bg-gradient-to-b from-transparent to-black">
          <FadeInElement duration={1}>
            <h1 className="text-center font-[Collects] text-7xl tracking-[10px] text-nowrap">
              FERAS AHMAD
            </h1>
          </FadeInElement>
        </div>
      </div>
    </FadeInElement>
  );
};

export default Hero;
