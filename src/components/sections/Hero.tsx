import { NextPage } from "next";
import FadeInElement from "../animations/FadeInElement";
import { BackgroundGradientAnimation } from "../BackgroundGradientAnimation";

const Hero: NextPage = () => {
  return (
    <FadeInElement duration={2}>
      <div className="relative w-full h-screen ">
        <FadeInElement duration={5}>
          <video
            src="/video.mp4"
            className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
            autoPlay
            loop
            muted
          />
        </FadeInElement>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none flex-col z-110000">
          <FadeInElement duration={3}>
            <h1 className="text-center font-[Collects] text-black text-7xl tracking-[10px]">
              FERAS AHMAD
            </h1>
          </FadeInElement>
        </div>
        {/* <FadeInElement duration={5}>
          <BackgroundGradientAnimation containerClassName="relative" />
        </FadeInElement> */}
      </div>
    </FadeInElement>
  );
};

export default Hero;
