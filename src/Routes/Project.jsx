import React from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import projects from "../project.json";

const ProjectWrapper = styled.div`
  padding: 20px;

  .back-container {
    padding: 10px;
    position: relative;

    img {
      display: inline-block;
      width: 35px;
      transform: rotate(135deg);
    }
  }

  .project-container {
    display: flex;
    padding: 50px;
    .discription {
      flex: 1;
    }
    .full-image-container {
      flex: 2;
      padding: 0 20px;
      .full-image {
        background-size: cover;
        width: 100%;
      }
    }
  }
`;

function Project() {
  const { id } = useParams();
  const item = projects.find((item) => item.id === id);
  return (
    <ProjectWrapper>
      <div className="back-container">
        <Link to="/">
          <img src="/img/arrow-down.svg" alt="back" />
        </Link>
      </div>
      <div className="project-container">
        <div className="discription">
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </div>
        <div className="full-image-container">
          <img className="full-image" src={item["full-img"]} alt={item.title} />
        </div>
      </div>
    </ProjectWrapper>
  );
}

export default Project;
