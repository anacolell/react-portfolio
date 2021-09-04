import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components";
import { Hero } from "./components";
import { Work } from "./components";
import { Skills } from "./components";
import { Contact } from "./components";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <Work />
      <Skills />
      <Contact />
    </Router>
  );
}

export default App;
