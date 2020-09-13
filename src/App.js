import React from "react";
import "./App.css";
import Routes from "./Routes/Routes";
import styled from "styled-components";

const AppWrapper = styled.div`
  background-image: url("img/bggg.gif");
  background-color: #0d0d0d;
  width: 100%;
  padding-bottom: 50px;
  color: #fff;
  min-height: 100vh;
`;

function App() {
  return (
    <AppWrapper className="App">
      <Routes />
    </AppWrapper>
  );
}

export default App;
