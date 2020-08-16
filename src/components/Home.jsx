import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import Main from "./Main";
import Intro from "./Intro";
import SectionTitle from "./SectionTitle";
import Project from "./Project";
import Skills from "./Skills";

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
          <Project
            flow="row-reverse"
            title="Todo App"
            description="A simple todo app to track daily tasks"
            img="img/todo.png"
          />
          <Project
            title="Todo App"
            description="A simple todo app to track daily tasks"
            img="img/todo.png"
          />
          <Project
            flow="row-reverse"
            title="Todo App"
            description="A simple todo app to track daily tasks"
            img="img/todo.png"
          />
          <Project
            title="Todo App"
            description="A simple todo app to track daily tasks"
            img="img/todo.png"
          />
        </section>
        <section className="skills">
          <div style={{ textAlign: "right" }}>
            <SectionTitle h1="skills:" />
            <Skills />
          </div>
        </section>
      </div>
    </HomeWrapper>
  );
}

export default Home;
