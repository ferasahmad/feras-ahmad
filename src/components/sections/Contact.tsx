import styled from "@emotion/styled";
import type { NextPage } from "next";
import { useState } from "react";
import { BREAKPOINTS } from "../../constants/styles";
import AnimateOnScroll from "../animations/AnimateOnScroll";
import Lottie from "react-lottie";
import success from "../../lotties/success-animation.json";
import { isValidEmail } from "../../utilities/helpers";
import Image from "next/image";

const Contact: NextPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [step, setStep] = useState<number>(1);

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
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
      console.log(`ERROR: ${error}`);
    } finally {
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
                disabled={!isValidEmail(email) || !message.trim()}
              >
                SEND
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
                height={150}
                width={150}
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
      </Container>
    </AnimateOnScroll>
  );
};

const Container = styled.div`
  flex-direction: column;
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
  background-color: black;
  color: white;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  border: 2px solid white;
  padding: 50px;
  box-sizing: border-box;

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

const Button = styled.button`
  align-self: flex-end;
  font-family: Blinker;
  padding: 10px 40px;
  border: none;
  border-radius: 5px;
  background-color: white;
  color: black;
  font-size: 20px;
  cursor: pointer;
  outline: none;
  transition: 0.3s;
  &:hover {
    background-color: black;
    color: white;
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
  font-size: 14px;
  letter-spacing: 3px;

  @media (max-width: ${BREAKPOINTS.LG}) {
    font-size: 12px;
    margin: 0;
    margin-top: 10px;
  }
`;

export default Contact;
