import styled from "@emotion/styled";
import Image from "next/image";
import { BREAKPOINTS } from "../../constants/styles";
import AnimateOnScroll from "../animations/AnimateOnScroll";

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
      company: "Skyline Systems",
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
        <Image fill src="/timeline.svg" alt="" />
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
  font-size: 20px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  margin: 0;
  @media (max-width: ${BREAKPOINTS.LG}) {
    font-size: 16px;
    left: 50%;
    top: 40%;
  }
`;

const CompanyName = styled.p<{ index: number }>`
  margin: -40px 0 -40px 0;
  white-space: nowrap;
  font-size: 23px;
  @media (max-width: ${BREAKPOINTS.LG}) {
    font-size: 16px;
    white-space: wrap;
    width: 60px;
    text-align: center;
    left: ${({ index }) => (index % 2 === 0 ? "0" : "auto")};
    right: ${({ index }) => (index % 2 === 0 ? "auto" : "0")};

    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;
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
    margin: ${({ index }) => (index % 2 === 0 ? "0 70px 0 0" : "0 0 0 70px")};
    height: 170px;
    width: 102px;
    transform: ${({ index }) =>
      index % 2 === 0 ? "rotate(90deg)" : "rotate(270deg) scaleX(-1)"};
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
  flex-direction: ${({ index }) =>
    index % 2 === 0 ? "column-reverse" : "column"};
  @media (max-width: ${BREAKPOINTS.LG}) {
    width: 100%;
    margin: 0;
    justify-content: space-between;
    flex-direction: ${({ index }) => (index % 2 === 0 ? "row" : "row-reverse")};
    height: 98.5px;
  }
`;

export default Experience;
