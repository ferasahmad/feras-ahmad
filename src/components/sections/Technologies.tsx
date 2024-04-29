import styled from "@emotion/styled";
import type { NextPage } from "next";
import Image from "next/image";
import { BREAKPOINTS } from "../../constants/styles";
import AnimateOnScroll from "../animations/AnimateOnScroll";

const Technologies: NextPage = () => {
  const technologies = [
    "typescript",
    // "html",
    // "css",
    // "javascript",
    "next",
    "react",
    "node",
    "express",
    "github",
  ];

  return (
    <Container>
      {technologies.map((technology) => {
        return (
          <AnimateOnScroll key={technology}>
            <Item key={technology} technology={technology} />
          </AnimateOnScroll>
        );
      })}
    </Container>
  );
};

const Item = ({ technology }: { technology: string }) => {
  return (
    <IconContainer>
      <DesktopImage
        src={`/${technology}.png`}
        alt=""
        width={100}
        height={100}
      />
      <MobileImage src={`/${technology}.png`} alt="" width={80} height={80} />
      <IconLabel>{technology}</IconLabel>
    </IconContainer>
  );
};

const Container = styled.div`
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 50px;
  height: 30vh;
  width: 878px;
  @media (max-width: ${BREAKPOINTS.LG}) {
    padding: 0;
    height: fit-content;
    gap: 42px;
    width: 50vw;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    width: 95vw;
  }
`;

const IconLabel = styled.p`
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 3px;

  @media (max-width: ${BREAKPOINTS.LG}) {
    font-size: 12px;
    margin: 0;
    margin-top: 10px;
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
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100px;

  img {
    filter: brightness(0) invert(1);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  @media (max-width: ${BREAKPOINTS.LG}) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 80px;
  }
`;

export default Technologies;
