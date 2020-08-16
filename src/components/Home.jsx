import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import Main from "./Main";
import Intro from "./Intro";
import SectionTitle from "./SectionTitle";
import Project from "./Project";

const HomeWrapper = styled.div`
  background: url("img/bggg.gif");
  width: 100%;
  padding-bottom: 50px;
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
        <section className="projects">
          <SectionTitle h1="selected_" h2="works:" />
          <Project />
        </section>
      </div>
    </HomeWrapper>
  );
}

export default Home;
