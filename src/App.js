import React from "react";
import "./App.css";
// import Home from "./components/Home";
import Routes from "./Routes/Routes";
import styled from "styled-components";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const AppWrapper = styled.div`
  background-image: url("img/bggg.gif");
  background-color: #0d0d0d;
  width: 100%;
  padding-bottom: 50px;
  color: #fff;
`;

function App() {
  return (
    <AppWrapper className="App">
      <Navigation />
      <Routes />
      <Footer />
    </AppWrapper>
  );
}

export default App;
