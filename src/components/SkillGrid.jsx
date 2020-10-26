import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #f3efec;
  padding: 20px 0;
  margin-bottom: 150px;
  .row {
    display: flex;

    .col-md-4 {
      flex: 33.33%;
      max-width: 33.33%;

      .skill-img-container {
        padding: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;

        img {
          display: block;
          max-width: 120px;
          margin-bottom: 15px;
        }
      }

      .programer {
        padding: 10px;
        height: 100%;
        > div {
          background: url("/img/programer.png") center;
          height: 100%;
          background-size: cover;
        }
      }
      @media (max-width: 720px) {
        .programer {
          display: none;
        }
      }
    }
  }
`;

function SkillGrid() {
  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="skill-img-container">
              <img src="/img/icons/html-5.png" alt="skill-img" />
              <img src="/img/icons/css3.png" alt="skill-img" />
              <img src="/img/icons/javascript.png" alt="skill-img" />
              <img src="/img/icons/jquery.png" alt="skill-img" />
              <img src="/img/react.svg" alt="skill-img" />
              <img src="/img/icons/git.png" alt="skill-img" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="programer">
              <div></div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="skill-img-container">
              <img src="/img/icons/nodejs.png" alt="skill-img" />
              <img src="/img/icons/php.png" alt="skill-img" />
              <img src="/img/icons/bootstrap.png" alt="skill-img" />
              <img src="/img/icons/wordpress.png" alt="skill-img" />
              <img src="/img/mongodb.svg" alt="skill-img" />
              <img src="/img/icons/mysql.png" alt="skill-img" />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default SkillGrid;
