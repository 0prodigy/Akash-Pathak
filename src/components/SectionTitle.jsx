import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .title {
    margin-left: 16.66%;
  }
  h1 {
    font-size: 120px;
    font-family: "Monuments", sans-serif;
    font-weight: 400;
    line-height: 1.1;
    color: #fff;
  }
`;

function SectionTitle(props) {
  return (
    <Wrapper>
      <div className="title" style={props.style}>
        <h1>{props.h1} </h1>
        <h1>{props.h2}</h1>
      </div>
    </Wrapper>
  );
}

export default SectionTitle;
