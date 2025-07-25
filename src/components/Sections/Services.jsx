import React from "react";
import styled from "styled-components";
// Components
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage1 from "../../assets/img/add/1.png";
import AddImage2 from "../../assets/img/add/2.jpg";
import AddImage3 from "../../assets/img/add/3.png";
import AddImage4 from "../../assets/img/add/4.png";

export default function Services() {
  return (
    <Wrapper id="services">
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Awesome Services</h1>
            <p className="font13">
              We create pixel-perfect solutions to elevate your brand.
              <br />
              Web, UI, design — all in one ecosystem.
            </p>
          </HeaderInfo>

          <ServiceGrid>
            <ServiceBox
              icon="roller"
              title="Graphic Design"
              subtitle="Creative visual content that connects with your brand's soul."
            />
            <ServiceBox
              icon="monitor"
              title="Web Design"
              subtitle="User-focused websites with killer interfaces and seamless UX."
            />
            <ServiceBox
              icon="browser"
              title="Development"
              subtitle="Robust, scalable, and future-proof web development solutions."
            />
            <ServiceBox
              icon="printer"
              title="UI/UX Design"
              subtitle="Designs that don't just look good but feel intuitive."
            />
          </ServiceGrid>
        </div>
      </div>
    </Wrapper>
  );
}

// Styled Components

const Wrapper = styled.section`
  width: 100%;
`;

const HeaderInfo = styled.div`
  text-align: center;
  margin-bottom: 50px;

  h1 {
    margin-bottom: 20px;
  }

  p {
    line-height: 1.6;
    color: #555;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  padding: 0 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 0 15px;
  }
`;
