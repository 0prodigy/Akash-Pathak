import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import Main from "./Main";

const HomeWrapper = styled.div`
  background: url("img/bggg.gif");
  width: 100%;
  height: 1220px;
  color: #fff;
`;

function Home() {
  return (
    <HomeWrapper>
      <Navigation></Navigation>
      <Main />
    </HomeWrapper>
  );
}

export default Home;
