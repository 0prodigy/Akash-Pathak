import React from "react";
import styled from "styled-components";
import Main from "../components/Main";
import Intro from "../components/Intro";
import SectionTitle from "../components/SectionTitle";
import Project from "../components/Project";
import Skills from "../components/Skills";
import Projects from "../project.json";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const HomeWrapper = styled.div`
  background-image: url("img/bggg.gif");
  background-color: #0d0d0d;
  width: 100%;
  padding-bottom: 50px;
  color: #fff;
  overflow: auto;

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

    @media (max-width: 600px) {
      font-size: 2.75rem;
    }
  }

  .lets-talk:after {
    background: #f5efe1;
    height: 14px;
    @media (max-width: 600px) {
      height: 4px;
    }
  }
`;

function Home() {
  return (
    <HomeWrapper>
      <Navigation />
      <Main />
      <div className="container">
        <Intro />
        <section className="projects" id="work">
          <SectionTitle h1="selected_" h2="works:" />
          {Projects &&
            Projects?.map((project, i) => (
              <Project
                key={project.id}
                flow={i % 2 && "row-reverse"}
                {...project}
              />
            ))}
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
