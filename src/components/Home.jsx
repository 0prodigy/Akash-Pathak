import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import Main from "./Main";
import Intro from "./Intro";
import SectionTitle from "./SectionTitle";
import Project from "./Project";
import Skills from "./Skills";
import Footer from "./Footer";

const HomeWrapper = styled.div`
  background-image: url("img/bggg.gif");
  background-color: #0d0d0d;
  width: 100%;
  padding-bottom: 50px;
  color: #fff;

  .container {
    max-width: 1120px;
    padding: 0 15px;
    margin: 0 auto;
  }
  .projects {
    padding-top: 350px;
  }
  .skills {
    padding-top: 250px;
    padding-bottom: 150px;
  }

  .lets-talk {
    color: #f5efe1;
    padding-top: 0.5rem;
    display: inline-block;
    font-size: 7.5rem;
    font-family: "Monuments", sans-serif;
    line-height: 1.1;
    text-decoration: none;
    margin-bottom: 110px;
    font-weight: 400;
  }

  .lets-talk:after {
    background: #f5efe1;
    height: 14px;
  }
`;

function Home() {
  return (
    <HomeWrapper>
      <Navigation></Navigation>
      <Main />
      <div className="container">
        <Intro />
        <section className="projects" id="work">
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
      <div className="container">
        <SectionTitle
          h1="I am always intrested about cool stuff."
          h2="Are you minding a project? "
          style={{ marginLeft: 0 }}
        />
        <h1>
          <a href="mailto:pathakvikash9211@gmail.com" className="lets-talk">
            Let's Talk.
          </a>
        </h1>
      </div>
      <Footer />
    </HomeWrapper>
  );
}

export default Home;
