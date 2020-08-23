import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
  padding: 80px 0;
  position: relative;
  background: #f6f0e3;
  margin: 0 15px;
  .container {
    max-width: 1140px;
    margin: 0 auto;
  }
  .row {
    display: flex;
  }
  .social,
  .links {
    max-width: 50%;
    flex: 50%;
  }
  .social .row {
    justify-content: space-between;
    a {
      text-decoration: none;
      color: #000;
      font-size: 1rem;
      font-weight: 400;
      font-family: "Monuments", sans-serif;
      display: inline-block;
    }
  }
  .links {
    text-align: right;
  }
  ul {
    list-style: none;
    li {
      display: block;
    }
    a {
      text-decoration: none;
      color: #000;
      font-size: 1rem;
      font-weight: 400;
      font-family: "Monuments", sans-serif;
      display: inline-block;
    }
  }
`;

function Footer() {
  return (
    <Wrapper id="contact">
      <div className="container">
        <div className="row">
          <div className="social">
            <ul className="row">
              <li>
                <a href="https://github.com/0prodigy">github</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/akash-pathak-0796a7165/">
                  linkedin
                </a>
              </li>
              <li>
                <a href="https://twitter.com/pathakprodigy">twitter</a>
              </li>
              <li>
                <a href="https://www.hackerrank.com/prodigyDev">hackerrank</a>
              </li>
            </ul>
          </div>
          <div className="links">
            <ul>
              <li>
                <a href="#home">Back to top</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Footer;
