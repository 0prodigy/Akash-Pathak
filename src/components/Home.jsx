import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import Main from "./Main";
import Intro from "./Intro";

const HomeWrapper = styled.div`
  background: url("img/bggg.gif");
  width: 100%;
  height: 1220px;
  color: #fff;

  .container {
    max-width: 1120px;
    padding: 0 15px;
    margin: 0 auto;
  }
`;

function Home() {
  return (
    <HomeWrapper>
      <Navigation></Navigation>
      <Main />
      <div className="container">
        <Intro />
      </div>
    </HomeWrapper>
  );
}

export default Home;
