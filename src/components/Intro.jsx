import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .intro {
    position: relative;
    margin-left: 8.88%;
  }
  .booking {
    .avialblity {
      position: absolute;
      left: 22%;
      top: 12px;
      display: flex;
      > div {
        padding: 58px;
        padding-left: 20px;
      }
      .day {
        font-size: 6.25rem;
        font-weight: 700;
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: white;
        -webkit-text-fill-color: transparent;
      }
      .month {
        font-weight: 700;
        font-size: 1.3rem;
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
      }
    }
  }
  .introduction {
    width: 450px;
    margin-left: 310px;
    margin-top: -124px;

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
            I am software developer based in India. <br /> I work on top notch
            web technologies to give user smooth and comfortable expreience.{" "}
            <br /> I have 1+ year experience of designing and developing user
            friendly web app. <br /> I love to work my way. Don't trust me go
            checkout my work.
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

export default Intro;
