import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import LogoImg from "../../assets/svg/MobileLogo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <FooterWrapper>
      <div style={{ background: "#0e0e0e", width: "100%" }}>
        <div className="container">
          <FooterContent>
            <LeftSide>
              <Link to="home" smooth={true} offset={-80} className="pointer" style={{ display: "flex", alignItems: "center" }}>
                <LogoImg />
                <LogoText>ZUBYTE SOLUTION</LogoText>
              </Link>
              <Tagline>Where Ideas <span className="highlight">Evolve</span> into Product.</Tagline>
            </LeftSide>

            <RightSide>
              <LinksGroup>
                <GroupTitle>Services</GroupTitle>
                <a href="#">Design</a>
                <a href="#">Development</a>
              </LinksGroup>

              <LinksGroup>
                <GroupTitle>Products</GroupTitle>
                <a href="#">Web</a>
                <a href="#">App</a>
                <a href="#">Software</a>
              </LinksGroup>

              <LinksGroup>
                <GroupTitle>Company</GroupTitle>
                <a href="#">Terms & Conditions</a>
                <a href="#">Privacy Policy</a>
              </LinksGroup>

              <LinksGroup>
                <GroupTitle>Get in Touch</GroupTitle>
                <SocialIcons>
                  <a href="https://www.instagram.com/sudharsan_444" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="lg" style={{ color: "#E1306C" }} />
                  </a>
                  <a href="mailto:your.email@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faEnvelope} size="lg" style={{ color: "#D44638" }} />
                  </a>
                  <a href="https://twitter.com/your_username" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} size="lg" style={{ color: "#1DA1F2" }} />
                  </a>
                </SocialIcons>

              </LinksGroup>

            </RightSide>
          </FooterContent>

          <BottomBar>
            <p>
              © {getCurrentYear()} - <span className="highlight">Zubyte</span> All rights reserved
            </p>
            <Link to="home" smooth={true} offset={-80} className="pointer highlight">
              Back to top ↑
            </Link>
          </BottomBar>
        </div>
      </div>
    </FooterWrapper>
  );
}


const FooterWrapper = styled.div`
  width: 100%;
  color: #ffffff;
  font-family: "Poppins", sans-serif;

  a {
    color: #aaa;
    font-size: 14px;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #ffffff;
    }
  }

  .highlight {
    color: #60e5c2;
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 60px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
    align-items: center;
    text-align: center;
  }
`;

const LeftSide = styled.div`
  max-width: 300px;

  .highlight {
    color: #60e5c2;
  }
`;

const LogoText = styled.h1`
  margin-left: 15px;
  font-size: 22px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 1px;
`;

const Tagline = styled.p`
  margin-top: 20px;
  font-size: 14px;
  color: #aaa;
  line-height: 1.6;
`;

const RightSide = styled.div`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const LinksGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const GroupTitle = styled.h3`
  font-size: 16px;
  color: #fff;
  margin-bottom: 12px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 25px;

  a {
    display: flex;
    align-items: center;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.2);
    }
  }

  svg {
    font-size: 18px;
    transition: color 0.3s ease;
  }
`;


const BottomBar = styled.div`
  padding: 20px;
  font-size: 13px;
  color: #aaa;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
`;
