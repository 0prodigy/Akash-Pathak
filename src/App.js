import React, { useEffect } from "react";
import "./App.css";
import Routes from "./Routes/Routes";
import styled from "styled-components";
import AOS from "aos";

const AppWrapper = styled.div`
  background-image: url("img/bggg.gif");
  background-color: #0d0d0d;
  width: 100%;
  padding-bottom: 50px;
  color: #fff;
  min-height: 100vh;
`;

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <AppWrapper className="App">
      <Routes />
    </AppWrapper>
  );
}

export default App;
