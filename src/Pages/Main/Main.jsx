import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Home from "../Home/Home";
import Exp from "../Exp/Exp";
import Projects from "../Projects/Projects";
import About from "../About/About";

const Main = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Home />
        <Exp />
        <Projects />
        <About />
      </main>
    </div>
  );
};

export default Main;
