import React from "react";
import { Navbar } from "./components";
import { Hero } from "./components";
import { Work } from "./components";
import { Skills } from "./components";
import { Contact } from "./components";
import { Footer } from "./components";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <Work />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
