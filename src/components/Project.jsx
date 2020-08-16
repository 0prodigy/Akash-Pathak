import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  margin-top: 150px;
  display: flex;

  .img-container {
    max-width: 60%;
    height: 160px;
  }
  .img-wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  img {
    width: 100%;
  }
  .details {
    padding-left: 60px;
    padding-right: 40px;
    h3 {
      font-size: 1.4rem;
      font-family: "Russo One", san-serif;
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
  }
`;

function Project(props) {
  return (
    <a href="/#" style={{ textDecoration: "none" }}>
      <Wrapper style={{ flexFlow: props.flow }}>
        <div className="img-container">
          <div className="img-wrap">
            <img src="img/todo.png" alt="todo" />
          </div>
        </div>
        <div className="details">
          <h3>Todo list </h3>
          <p>A simple todo application to scheduled you daily task.</p>
        </div>
      </Wrapper>
    </a>
  );
}

export default Project;
