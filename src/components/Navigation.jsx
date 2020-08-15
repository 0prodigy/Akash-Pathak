import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  padding: 20px 50px;
  display: flex;
  justify-content: space-around;

  > div {
    flex: 1;
  }

  .logo-container img {
    width: 50px;
    animation: rotate 2s infinite linear;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .nav-links {
    ul {
      display: flex;
      list-style: none;
      justify-content: space-around;

      .nav-link {
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 500;
        color: inherit;
        padding: 10px 15px;
        font-size: 0.9rem;
        cursor: pointer;
        postion: absolute;
        transition: all 0.5s ease-in;
      }
      .active,
      & .nav-link:hover {
        color: #ac0000;
        &:after {
          content: "";
          width: 20px;
          height: 30px;
          position: absolute;
          background: url("img/caret-down.svg");
        }
      }
      .chat {
        color: #ac0000;
        border: 1px solid #ac0000;
        transition: background 0.5s ease;

        &:hover {
          background: #ac0000;
          color: inherit;
        }
      }
    }
  }
`;

function Navigation() {
  return (
    <Nav>
      <div className="logo-container">
        <img src="img/logo.svg" alt="logo" />
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <a href="/#" className="nav-link active">
              about
            </a>
          </li>
          <li>
            <a href="/#" className="nav-link">
              work
            </a>
          </li>
          <li>
            <a href="/#" className="nav-link">
              skills
            </a>
          </li>
          <li>
            <a href="/#" className="nav-link">
              contact
            </a>
          </li>
          <li>
            <a href="/#" className="nav-link chat">
              Let's Chat
            </a>
          </li>
        </ul>
      </div>
    </Nav>
  );
}

export default Navigation;
