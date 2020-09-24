import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .intro {
    position: relative;
    margin-left: 8.88%;

    @media (max-width: 600px) {
      padding-top: 50px;
      margin: 0;
    }
  }
  .booking {
    img {
      max-width: 100%;
    }
    .avialblity {
      position: absolute;
      left: 24%;
      top: 35px;
      display: flex;
      > div {
        padding: 58px;
        padding-left: 20px;
        @media (max-width: 600px) {
          padding: 0 0 0 20px;
        }
      }
      @media (max-width: 600px) {
        left: 52%;
        top: 82px;
        padding: 0;
        padding-left: 20px;
      }
      .day {
        font-size: 6.25rem;
        font-weight: 700;
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: white;
        -webkit-text-fill-color: transparent;
        font-family: "Monuments", sans-serif;
        @media (max-width: 600px) {
          font-size: 2.25rem;
          font-weight: 400;
        }
      }
      .month {
        font-weight: 700;
        font-size: 1.3rem;
        font-family: "Monuments", sans-serif;
        @media (max-width: 600px) {
          font-size: 0.825rem;
          font-weight: 500;
        }
      }
    }
    .book {
      width: 200px;
      position: absolute;
      top: 45%;
      left: 12%;
      a {
        color: rgba(255, 255, 255, 0.33);
        font-size: 1.3rem;
        text-decoration: none;
        font-weight: 300;
        transition: color 0.7s ease;
        &:hover {
          color: #fff;
        }

        @media (max-width: 600px) {
          top: 40%;
          left: 20%;
        }
      }
    }
  }
  .introduction {
    width: 450px;
    margin-left: 310px;
    margin-top: -124px;

    @media (max-width: 600px) {
      margin-left: 0;
      margin-top: -40px;
      width: 100%;
    }

    p {
      line-height: 1.75rem;
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;

function Intro() {
  return (
    <Wrapper>
      <div className="intro">
        <div className="booking">
          <img src="img/circle.svg" alt="circle" />
          <div className="avialblity">
            <p>
              <span className="day">{new Date().getDate().toString()}</span>
            </p>
            <div>
              <p className="month">{new Date().toDateString().slice(4, 7)}</p>
              <p>Available for work</p>
            </div>
          </div>
          <div className="book">
            <a href="mailto:pathakvikash@9211@gmail.com">
              <p>Schedule</p> <p>Next Meeting</p>{" "}
            </a>
          </div>
        </div>
        <div className="introduction">
          <p>
            Akash Pathak is a software developer based in India. <br /> I
            convert idea into code to bring the change you want. <br />
            You have any idea? let's change the world.
            <br /> I have 1+ year experience of designing and developing user
            friendly aand web app. <br />
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

export default Intro;
