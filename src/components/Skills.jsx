import React from "react";
import styled from "styled-components";
import { CarouselProvider, Slider, Slide, Image } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const Wrapper = styled.div`
  padding: 40px 20px;

  Slide {
    color: #fff;
  }
  img {
    filter: grayscale(1);
    width: 100%;
    padding: 0 10px;
  }
`;
function Skills() {
  return (
    <Wrapper>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={10}
        isPlaying={true}
        interval={3000}
        visibleSlides={3}
      >
        <Slider>
          <Slide index={0}>
            <Image src="img/html-5.svg" alt="" />
          </Slide>
          <Slide index={1}>
            <Image src="img/css3.svg" alt="" />
          </Slide>
          <Slide index={2}>
            <Image src="img/javascript.svg" alt="" />
          </Slide>
          <Slide index={3}>
            <Image src="img/react.svg" alt="" />
          </Slide>
          <Slide index={4}>
            <Image src="img/nodejs.svg" alt="" />
          </Slide>
          <Slide index={5}>
            <Image src="img/angularjs.svg" alt="" />
          </Slide>
          <Slide index={6}>
            <Image src="img/mongodb.svg" alt="" />
          </Slide>
          <Slide index={7}>
            <Image src="img/mysql.svg" alt="" />
          </Slide>
          <Slide index={8}>
            <Image src="img/bootstrap.svg" alt="" />
          </Slide>
          <Slide index={9}>
            <Image src="img/wordpress.svg" alt="" />
          </Slide>
        </Slider>
      </CarouselProvider>
    </Wrapper>
  );
}

export default Skills;
