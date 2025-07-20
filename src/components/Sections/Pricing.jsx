import React from "react";
import styled, { keyframes } from "styled-components";
import AboutImg from "../../assets/img/add/2.png"; // ✅ Make sure this exists!

export default function AboutUs() {
  return (
    <Wrapper id="about">
      <Container>
        <ImageSection>
          <img src={AboutImg} alt="About us" />
        </ImageSection>

        <TextSection>
          <h1 className="font40 extraBold">About Us</h1>
          <p className="font13">
            We’re not just developers — we’re digital storytellers. 🚀 At our core, we blend innovation with experience
            to craft web solutions that don’t just look great, but perform brilliantly.
          </p>
          <p className="font13" style={{ marginTop: "20px" }}>
            From startups to enterprises, we partner with brands to build digital products that push boundaries and
            solve real problems. Every pixel, every line of code — done with intention. 💻✨
          </p>
        </TextSection>
      </Container>
    </Wrapper>
  );
}

// === Styled Components ===
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  } to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.section`
  width: 100%;
  padding: 80px 20px;
  background: linear-gradient(135deg, #e9f0ff, #ffffff);
  
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  gap: 50px;

  @media (max-width: 860px) {
    flex-direction: column;
    text-align: center;
    gap: 30px;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  animation: ${fadeInUp} 1s ease both;
  display: flex;
  justify-content: center;

  img {
    width: 300px;
    height: 400px;
    border-radius: 20px;
    object-fit: cover;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);

    @media (max-width: 480px) {
      width: 80%;
      height: auto;
    }
  }
`;

const TextSection = styled.div`
  flex: 2;
  animation: ${fadeInUp} 0.8s ease both;

  h1 {
    margin-bottom: 20px;
    color: #0a0a0a;
    font-size: 2.4rem;
  }

  p {
    color: #444;
    font-size: 1rem;
    line-height: 1.7;
  }
`;
