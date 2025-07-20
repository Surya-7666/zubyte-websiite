import React from "react";
import styled from "styled-components";

export default function ProjectBox({ img, title, text, action }) {
  return (
    <Card>
      <ImageWrapper onClick={action ? () => action() : null}>
        <img src={img} alt="project" />
      </ImageWrapper>
      <Content>
        <Title>{title}</Title>
        <Description>{text}</Description>
      </Content>
    </Card>
  );
}

const Card = styled.div`
  width: 100%;
  max-width: 350px;
  margin: 20px auto;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    margin: 16px 0;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 12px;

  img {
    width: 100%;
    height: auto;
    display: block;
    transition: all 0.4s ease;

    &:hover {
      transform: scale(1.05);
      opacity: 0.85;
    }
  }
`;

const Content = styled.div`
  padding: 12px 8px 0;
  text-align: left;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: #222;
  margin: 10px 0 6px;
`;

const Description = styled.p`
  font-size: 0.95rem;
  color: #666;
  line-height: 1.4;
  margin: 0;
`;
