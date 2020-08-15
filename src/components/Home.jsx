import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

const HomeWrapper = styled.div`
  background: url("img/bggg.gif");
  width: 100%;
  height: 1220px;
  color: #e0e1e7;
`;

function Home() {
  return (
    <HomeWrapper>
      <Navigation></Navigation>
    </HomeWrapper>
  );
}

export default Home;
