import styled from "@emotion/styled";
import type { NextPage } from "next";
import Image from "next/image";
import { BREAKPOINTS } from "../../constants/styles";
import AnimateOnScroll from "../animations/AnimateOnScroll";
import GradientCircle from "../GradientCircle";

const About: NextPage = () => {
  return (
    <Container>
      <AnimateOnScroll>
        <DesktopImage src="/images/me.svg" height={300} width={300} alt="" />
        <MobileImage src="/images/me.svg" height={200} width={200} alt="" />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Text>
          Hey there! I&apos;m Feras, a Software Engineer based in New Jersey.
          When I&apos;m not coding, I enjoy taking photos, attending concerts,
          gaming, and baking (though I&apos;m not great at it...)
        </Text>
      </AnimateOnScroll>
      <GradientCircle
        top="0%"
        left="-40%"
        color="rgb(145,35,64)"
        opacity={0.2}
      />
      <GradientCircle
        top="10%"
        left="-10%"
        color="rgb(98,120,100)"
        opacity={0.25}
      />
      <GradientCircle
        top="-5%"
        left="30%"
        color="rgb(49,67,87)"
        opacity={0.4}
      />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  @media (max-width: ${BREAKPOINTS.LG}) {
    flex-direction: column;
    justify-content: center;
    height: fit-content;
    width: 50vh;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    width: 95vw;
  }
`;

const DesktopImage = styled(Image)`
  display: block;
  @media (max-width: ${BREAKPOINTS.LG}) {
    display: none;
  }
`;

const MobileImage = styled(Image)`
  display: none;
  @media (max-width: ${BREAKPOINTS.LG}) {
    display: block;
    margin-bottom: 20px;
  }
`;

const Text = styled.p`
  max-width: 400px;
  text-align: justify;
  font-family: Blinker;
  font-size: 25px;

  @media (max-width: ${BREAKPOINTS.LG}) {
    font-size: 20px;
    max-width: 100%;
  }
`;

export default About;
