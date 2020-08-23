import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  padding: 40px 50px;
  display: flex;
  justify-content: space-around;
  position: fixed;
  width: 100%;
  z-index: 2;

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
    padding-left: calc(100% - 420px);
    ul {
      display: flex;
      list-style: none;
      justify-content: space-around;

      .nav-link {
        text-decoration: none;
        text-transform: lowercase;
        font-weight: 400;
        letter-spacing: 2px;
        color: inherit;
        padding: 10px 15px;
        font-size: 1.2rem;
        cursor: pointer;
        transition: all 0.5s ease-in;
        font-family: "Monuments", sans-serif;

        &:after {
          display: none;
        }
      }
    }
  }
`;

function Navigation() {
  return (
    <Nav>
      <div className="logo-container">
        {/* <img src="img/logo.svg" alt="logo" /> */}
      </div>
      <div className="nav-links">
        <ul>
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
        </ul>
      </div>
    </Nav>
  );
}

export default Navigation;
