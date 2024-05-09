import styled from "@emotion/styled";
import Image from "next/image";
import { BREAKPOINTS } from "../../constants/styles";
import AnimateOnScroll from "../animations/AnimateOnScroll";
import GradientCircle from "../GradientCircle";

type Experience = {
  startDate: string;
  endDate: string;
  company: string;
  details: string;
};

const Experience = () => {
  const experienceArray = [
    {
      startDate: "Jul 2018",
      endDate: "Dec 2018",
      company: "V1 Apps",
      details: "",
    },
    {
      startDate: "Jan 2019",
      endDate: "Oct 2019",
      company: "HopUp",
      details: "",
    },
    {
      startDate: "Oct 2019",
      endDate: "Mar 2020",
      company: "V1 Apps",
      details: "",
    },
    {
      startDate: "Mar 2020",
      endDate: "Jan 2021",
      company: "Scout",
      details: "",
    },
    {
      startDate: "Jan 2021",
      endDate: "Jul 2021",
      company: "Skyline Solutions",
      details: "",
    },
    {
      startDate: "Aug 2021",
      endDate: "Present",
      company: "Series",
      details: "",
    },
  ];

  return (
    <div style={{ position: "relative" }}>
      <AnimateOnScroll>
        <Container>
          {experienceArray.map((experience) => (
            <TimelineItem
              experience={experience}
              key={experienceArray.indexOf(experience)}
              index={experienceArray.indexOf(experience)}
            />
          ))}
        </Container>
      </AnimateOnScroll>
      <div>
        <GradientCircle
          top="0%"
          left="-40%"
          color="rgb(145,35,64)"
          opacity={0.25}
        />
        <GradientCircle
          top="20%"
          left="-10%"
          color="rgb(98,120,100)"
          opacity={0.3}
        />
        <GradientCircle
          top="10%"
          left="10%"
          color="rgb(49,67,87)"
          opacity={0.5}
        />
        <GradientCircle
          top="-10%"
          left="50%"
          color="rgb(145,35,64)"
          opacity={0.15}
        />
      </div>
    </div>
  );
};

const TimelineItem = ({
  index,
  experience,
}: {
  index: number;
  experience: Experience;
}) => {
  return (
    <TimelineImageContainer index={index}>
      <CompanyName index={index}>{experience.company}</CompanyName>
      <StartDate>{experience.startDate}</StartDate>
      <ImageContainer index={index}>
        <Image fill src="/images/timeline.svg" alt="" />
      </ImageContainer>
      <EmptySpace index={index} />
    </TimelineImageContainer>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 70vh;
  width: 878px;
  @media (max-width: ${BREAKPOINTS.LG}) {
    width: 50vh;
    flex-direction: column;
    height: fit-content;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    width: 95vw;
  }
`;

const StartDate = styled.p`
  position: absolute;
  font-size: 15px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  margin: 0;
  @media (max-width: ${BREAKPOINTS.LG}) {
    font-size: 14px;
    left: 50%;
    top: 40%;
    @media (max-width: ${BREAKPOINTS.XS}) {
      font-size: 13px;
    }
  }
`;

const CompanyName = styled.p<{ index: number }>`
  margin: -40px 0 -40px 0;
  white-space: nowrap;
  font-size: 20px;
  @media (max-width: ${BREAKPOINTS.LG}) {
    font-size: 15px;
    white-space: wrap;
    width: 70px;
    text-align: center;
    left: ${({ index }) => (index % 2 === 0 ? "0" : "auto")};
    right: ${({ index }) => (index % 2 === 0 ? "auto" : "0")};

    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;
    @media (max-width: ${BREAKPOINTS.XS}) {
      font-size: 13px;
    }
  }
`;

const EmptySpace = styled.div<{ index: number }>`
  height: ${({ index }) => (index % 2 === 0 ? "50px" : "20px")};
  width: 100px;
  @media (max-width: ${BREAKPOINTS.LG}) {
    width: ${({ index }) => (index % 2 === 0 ? "40px" : "40px")};
  }
`;

const ImageContainer = styled.div<{ index: number }>`
  transform: ${({ index }) =>
    index % 2 === 0 ? "rotate(0deg)" : "rotate(180deg) scaleX(-1)"};
  height: 239.5px;
  width: 152px;
  @media (max-width: ${BREAKPOINTS.LG}) {
    margin: ${({ index }) => (index % 2 === 0 ? "0 85px 0 0" : "0 0 0 85px")};
    height: 170px;
    width: 102px;
    transform: ${({ index }) =>
      index % 2 === 0 ? "rotate(90deg)" : "rotate(270deg) scaleX(-1)"};
    @media (max-width: ${BREAKPOINTS.XS}) {
      height: 140px;
      width: 90px;
    }
  }
`;

const TimelineImageContainer = styled.div<{ index: number }>`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  height: 350px;
  width: 152px;
  margin-right: -3.3px;
  margin-left: -3.3px;
  z-index: 100;
  flex-direction: ${({ index }) =>
    index % 2 === 0 ? "column-reverse" : "column"};
  @media (max-width: ${BREAKPOINTS.LG}) {
    width: 100%;
    margin: 0;
    justify-content: space-between;
    flex-direction: ${({ index }) => (index % 2 === 0 ? "row" : "row-reverse")};
    height: 98.5px;
    @media (max-width: ${BREAKPOINTS.XS}) {
      height: 85px;
    }
  }
`;

export default Experience;
