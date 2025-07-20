import React from "react";
import Slider from "react-slick";
import styled, { keyframes } from "styled-components";

// Assets
import ProjectImg1 from "../../assets/img/projects/1.png";
import ProjectImg2 from "../../assets/img/projects/2.jpeg";
import ProjectImg3 from "../../assets/img/projects/3.jpeg";
import ProjectImg4 from "../../assets/img/projects/4.jpeg";
import ProjectImg5 from "../../assets/img/projects/5.jpeg";
import ProjectImg6 from "../../assets/img/projects/6.jpeg";

const projects = [
  { img: ProjectImg1, link: "https://tetroninfotech.com/", title: "Tetron Infotech" },
  { img: ProjectImg2, link: "https://jafonlinestore.github.io/", title: "JAF Online Store" },
  { img: ProjectImg3, link: "https://ijmm.chendurph.com/", title: "IJMM Journal" },
  { img: ProjectImg4, link: "https://lujeinnovations.com/", title: "Luje Innovations" },
  { img: ProjectImg5, link: "https://eliita.com/", title: "Eliita Fashion" },
  { img: ProjectImg6, link: "https://exceljournals.org.in/", title: "Excel Journals" },
];

export default function Projects() {
  const settings = {
    infinite: true,
    speed: 7000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Wrapper id="projects">
      <Header>
        <h2 className="font40 extraBold"> Our Clients</h2>
        <p className="font13">Explore the ideas brought to life </p>
      </Header>

      <SliderWrapper>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <Card
              key={index}
              onClick={() => window.open(project.link, "_blank")}
            >
              <ImageWrapper>
                <img src={project.img} alt={project.title} />
              </ImageWrapper>
              <Title>{project.title}</Title>
            </Card>
          ))}
        </Slider>
      </SliderWrapper>
    </Wrapper>
  );
}

// === Styled Components ===
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const Wrapper = styled.section`
  width: 100%;
  padding: 60px 20px;
  background: linear-gradient(135deg,  #ffffff);
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;

  h2 {
    font-size: 2.4rem;
    color: #0a0a0a;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: #666;
  }
`;

const SliderWrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;

  .slick-slide {
    display: flex;
    justify-content: center;
    padding: 10px;
  }
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  padding: 20px;
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
  transition: all 0.35s ease;
  cursor: pointer;
  text-align: center;
  min-width: 180px;
  max-width: 240px;
  animation: ${fadeIn} 0.6s ease both;

  &:hover {
    transform: translateY(-6px) scale(1.05);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
    border: 1px solid #c9e7ff;
  }
`;

const ImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto 14px;
  border-radius: 16px;
  padding: 10px;
  background: linear-gradient(135deg, #d1eaff, #ffffff);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    transition: transform 0.3s ease;
  }

  ${Card}:hover & img {
    transform: scale(1.08) rotate(1deg);
  }
`;

const Title = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #222;
  transition: all 0.3s ease;
`;
