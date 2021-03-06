import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  position: relative;
  margin-top: 150px;
  display: flex;

  .img-container {
    flex: 0 0 60%;
    max-width: 60%;
    height: 160px;
    position: relative;

    @media (max-width: 600px) {
      flex: 0 0 100%;
      max-width: 100%;
    }

    .read-more {
      position: absolute;
      bottom: 0;
      bottom: -55px;
      transition: all 0.4s cubic-bezier(0.77, 0, 0.175, 1);
      transform: translate(-5%, -5%) skewX(-40deg);
      opacity: 0;
      img {
        animation: rotate 8s linear infinite;
      }
    }
  }
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  &:hover .read-more {
    opacity: 1;
  }
  .img-wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  img {
    width: 100%;
    filter: grayscale(1);
    transition: filter 0.5s ease;
    &:hover {
      filter: grayscale(0);
    }
  }
  .details {
    padding-left: 60px;
    padding-right: 40px;
    h3 {
      font-size: 1.4rem;
      font-family: "Monuments", sans-serif;
      letter-spacing: 1px;
      font-weight: 400;
      color: #fff;
    }
    p {
      padding: 15px 0 0 60px;
      color: rgba(225, 225, 225, 0.7);
      font-size: 1rem;
      line-height: 1.75;
    }

    @media (max-width: 600px) {
      flex: 0 0 100%;
      max-width: 100%;
      padding: 40px 0 0 15px;
    }
  }
  @media (max-width: 600px) {
    flex-wrap: wrap !important;
  }
`;

function Project(props) {
  return (
    <Link to={`/project/${props.id}`} style={{ textDecoration: "none" }}>
      <Wrapper style={{ flexFlow: props.flow }}>
        <div
          className="img-container"
          data-aos="slide-right"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          <div className="img-wrap">
            <img src={props.img} alt={props.img} />
          </div>
          <div
            className="read-more"
            style={
              props.flow !== "row-reverse"
                ? { right: "-55px" }
                : { left: "-55px" }
            }
          >
            <img src="img/more-details.svg" alt="read-more" />
          </div>
        </div>
        <div
          className="details"
          data-aos="slide-left"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          <h3>{props.title} </h3>
          <p>{props.description}</p>
        </div>
      </Wrapper>
    </Link>
  );
}

export default Project;
