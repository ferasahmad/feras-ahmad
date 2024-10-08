import styled from "@emotion/styled";
import type { NextPage } from "next";
import { useState } from "react";
import { BREAKPOINTS } from "../../constants/styles";
import AnimateOnScroll from "../animations/AnimateOnScroll";
import Lottie from "react-lottie";
import success from "../../lotties/success-animation.json";
import { isValidEmail } from "../../utilities/helpers";
import Image from "next/image";
import GradientCircle from "../GradientCircle";

const Contact: NextPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [step, setStep] = useState<number>(1);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      });

      if (res.status === 429) {
        setErrorMessage("Too many requests, please try again later.");
        setStep(3);
      } else if (res.ok) {
        setStep(2);
      } else {
        setErrorMessage("An error occurred while sending the message.");
        setStep(3);
      }
    } catch (error) {
      setErrorMessage("An error occurred while sending the message.");
      setStep(3);
    } finally {
      setLoading(false);
      setEmail("");
      setMessage("");
    }
  };

  return (
    <AnimateOnScroll>
      <Container>
        <OuterWrapper onSubmit={handleSubmit}>
          {step === 1 && (
            <>
              <H1>Let&apos;s connect</H1>
              <InputContainer>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="Email"
                />
              </InputContainer>
              <TextArea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                maxLength={200}
              />
              <Button
                type="submit"
                disabled={!isValidEmail(email) || !message.trim() || loading}
                loading={loading}
              >
                {loading ? <CustomSpinner /> : "SEND"}
              </Button>
            </>
          )}
          {step === 2 && (
            <>
              <Lottie
                options={{
                  loop: false,
                  autoplay: true,
                  animationData: success,
                }}
                height={200}
                width={200}
              />
              <RequestStatus>Message sent. Talk to you soon!</RequestStatus>
            </>
          )}
          {step === 3 && (
            <>
              <ErrorIcon
                src="/images/fail.png"
                height={150}
                width={150}
                alt=""
                priority
              />
              <RequestStatus>{errorMessage}</RequestStatus>
            </>
          )}
        </OuterWrapper>
        <GradientCircle
          top="0%"
          left="-40%"
          color="rgb(49,67,87)"
          opacity={0.2}
        />
        <GradientCircle
          top="-10%"
          left="-30%"
          color="rgb(145,35,64)"
          opacity={0.2}
        />
        <GradientCircle
          top="-5%"
          left="15%"
          color="rgb(98,120,100)"
          opacity={0.25}
        />
        <GradientCircle
          top="0%"
          left="50%"
          color="rgb(49,67,87)"
          opacity={0.25}
        />
      </Container>
    </AnimateOnScroll>
  );
};

const Container = styled.div`
  flex-direction: column;
  position: relative;
  width: 878px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${BREAKPOINTS.LG}) {
    height: fit-content;
    width: 50vw;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    width: 95vw;
  }
`;

const OuterWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 450px;
  width: 100%;
  gap: 30px;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  z-index: 100;
  @media (max-width: ${BREAKPOINTS.LG}) {
    padding: 20px;
  }
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border: 2px solid white;
  border-radius: 5px;
  background-color: transparent;
  color: white;
  font-size: 20px;
  box-sizing: border-box;
  font-family: Blinker;
  outline: none;
  &:focus ~ label {
    top: -20px;
    left: 0;
    font-size: 15px;
  }
`;

const TextArea = styled.textarea`
  font-family: Blinker;
  width: 100%;
  padding: 10px;
  border: none;
  border: 2px solid white;
  border-radius: 5px;
  background-color: transparent;
  color: white;
  font-size: 20px;
  box-sizing: border-box;
  outline: none;
  min-width: 100%;
  max-width: 100%;
  min-height: 150px;
  max-height: 150px;
  &:focus ~ label {
    top: -20px;
    left: 0;
    font-size: 15px;
  }
`;

const H1 = styled.h1`
  margin: 0;
  font-size: 30px;
`;

const Button = styled.button<{ loading: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  font-family: Blinker;
  border: none;
  height: 45px;
  width: 140px;
  border-radius: 5px;
  background-color: white;
  color: black;
  font-size: 20px;
  cursor: ${(props) => (props.loading ? "default" : "pointer")};
  outline: none;
  transition: 0.3s;
  &:hover {
    background-color: ${(props) => (props.loading ? "white" : "black")};
    color: ${(props) => (props.loading ? "black" : "white")};
  }
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

const ErrorIcon = styled(Image)`
  filter: brightness(0) invert(1) contrast(100);
`;

const RequestStatus = styled.p`
  text-transform: uppercase;
  text-align: center;
  font-size: 14px;
  letter-spacing: 3px;

  @media (max-width: ${BREAKPOINTS.LG}) {
    font-size: 12px;
    margin: 0;
    margin-top: 10px;
  }
`;

const CustomSpinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 3px solid black;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Contact;
