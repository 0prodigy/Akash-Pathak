import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 75px 0 0 75px;
  position: relative;
  .content {
    position: relative;
    h1 {
      font-family: "Monuments", sans-serif;
      font-size: 100px;
      margin: 0;
      color: #fff;
      line-height: 1;
      font-weight: 100;
    }

    &:after {
      content: "";
      width: 54px;
      height: 53px;
      position: absolute;
      right: 50%;
      bottom: 0;
      background: url("img/arrow-down.svg");
    }
    .fields {
      position: absolute;
      right: calc(20% + 50px);
      bottom: -20px;
      padding: 10px 0;
      h4 {
        font-weight: 400;
        line-height: 1.3;
      }
      @media (max-width: 600px) {
        position: relative;
        left: calc(20% + 16px);
        bottom: 0;
        right: 0;
      }
    }
    @media (max-width: 600px) {
      h1 {
        font-size: 4.25rem;
      }
      &:after {
        right: 0;
        left: 10px;
        bottom: 12px;
      }
    }
  }

  @media (max-width: 600px) {
    padding: 130px 0 0 40px;
  }
`;

function Main() {
  return (
    <Wrapper id="home">
      <div className="content">
        <h1>HellO.</h1>
        <h1>I am Akash</h1>
        <h1>Pathak</h1>
        <div className="fields">
          <h4>Software Developer</h4>
          <h4>Mix Martial Artist</h4>
          <h4>Calisthenic &amp; Yoga Practitioner</h4>
        </div>
      </div>
    </Wrapper>
  );
}

export default Main;
