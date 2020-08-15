import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 60px 0 0 75px;
  postion: relative;
  .content {
    position: relative;
    h1 {
      font-family: "Russo One", sans-serif;
      font-size: 7.2rem;
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
    }
  }
  .intro-container {
    padding-left: 170px;
  }
  .intro {
    position: relative;
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

function Main() {
  return (
    <Wrapper>
      <div className="content">
        <h1>HellO.</h1>
        <h1>I am Akash</h1>
        <h1>Pathak</h1>
        <div className="fields">
          <h4>Software Developer</h4>
          <h4>Mix Marital Artist</h4>
          <h4>Calisthenic &amp; Yoga Practitioner</h4>
        </div>
      </div>
      <div className="intro-container">
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
              <a href="/#">
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
      </div>
    </Wrapper>
  );
}

export default Main;
