/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import SlideImage from "assets/Cinema_1.jpg";

type Props = {};

const SliderShow = (props: Props) => {
  return (
    <div css={slider}>
      <Carousel showStatus={false} showThumbs={false} autoPlay={true} infiniteLoop={true} interval={4000}>
        <div>
          <img src={SlideImage} alt="슬라이드이미지" />
        </div>
        <div>
          <img src={SlideImage} alt="슬라이드이미지" />
        </div>
      </Carousel>
      {/* <div css={sliderSlides}>
        <div
          className="slider-image"
          style={{
            backgroundImage: `url(${SlideImage})`,
          }}
        ></div>
      </div> */}
    </div>
  );
};

const slider = css`
  .carousel-container .carousel-slide {
    display: flex;
    justify-content: center;
    height: 500px;
  }

  .carousel.carousel-slider {
    height: 500px;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const sliderSlides = css`
  .slider-image {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 700px;
    color: #fff;
    text-align: center;
  }
`;

export default SliderShow;
