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
      .tech-stack {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: 50px 0;

        img {
          width: 60px;
          margin: 5px 20px;
        }
      }
    }
    .full-image-container {
      flex: 2;
      padding: 0 20px;
      .full-image {
        background-size: cover;
        width: 100%;
        filter: grayscale(1);
        &:hover {
          filter: grayscale(0);
        }
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

          <div class="tech-stack">
            {item.tech?.map((tech) => (
              <img src={`/img/${tech}.svg`} alt={tech} />
            ))}
          </div>
        </div>
        <div className="full-image-container">
          <img className="full-image" src={item["full-img"]} alt={item.title} />
        </div>
      </div>
    </ProjectWrapper>
  );
}

export default Project;
