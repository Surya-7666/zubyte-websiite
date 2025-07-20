import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Components
import TestimonialBox from "../Elements/TestimonialBox";

export default function TestimonialSlider() {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true, // 🔁 autoplay enabled
    autoplaySpeed: 3000, // ⏱️ 3 seconds per slide
    pauseOnHover: true, // 🛑 pauses when hovering
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      text: "Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it.",
      author: "Ralph Waldo Emerson",
    },
    {
      text: "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt",
    },
    {
      text: "In the middle of every difficulty lies opportunity.",
      author: "Albert Einstein",
    },
    {
      text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      text: "Happiness is not something ready made. It comes from your own actions.",
      author: "Dalai Lama",
    },
    {
      text: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
    },
  ];

  return (
    <SliderContainer>
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <StyledCard key={index} className="flexCenter">
            <TestimonialBox text={item.text} author={item.author} />
          </StyledCard>
        ))}
      </Slider>
    </SliderContainer>
  );
}

const SliderContainer = styled.div`
  width: 100%;
`;

const StyledCard = styled.div`
  width: 90%;
  padding: 0 5%;
  cursor: pointer;
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  }

  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
