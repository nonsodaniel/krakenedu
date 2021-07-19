
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Container from "./components/container/Container";
const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Container />
      </div>
    </BrowserRouter>
  );
};

export default App;
