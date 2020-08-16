import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px;
  .row {
    width: 100%;
    display: flex;
    position: relative;
    flex-warap: wrap;
    justify-content: center;
    > div {
      margin: 10px 30px;
      width: 250px;
      img {
        width: 100%;
        filter: grayscale(1);
      }
    }
  }
`;
function Skills() {
  return (
    <Wrapper>
      <div className="row">
        <div>
          <img src="img/caret-down.svg" alt="" />
        </div>
        <div>
          <img src="img/caret-down.svg" alt="" />
        </div>
        <div>
          <img src="img/caret-down.svg" alt="" />
        </div>
      </div>
      <div className="row">
        <div>
          <img src="img/caret-down.svg" alt="" />
        </div>
        <div>
          <img src="img/caret-down.svg" alt="" />
        </div>
      </div>
      <div className="row">
        <div>
          <img src="img/caret-down.svg" alt="" />
        </div>
      </div>
    </Wrapper>
  );
}

export default Skills;
