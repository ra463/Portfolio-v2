import React from "react";
import Nav from "./Nav";
import "./Main.scss";
import Intro from "./Intro";
import About from "./About";
import Experience from "./Experience";
import Project from "./Project";
import OtherProject from "./OtherProject";

const Main = () => {
  return (
    <div className="main_page">
      <Nav />
      <div id="content">
        <section className="intro">
          <Intro />
        </section>
        <section id="about" className="about">
          <About />
        </section>
        <section id="exp" className="exp">
          <Experience />
        </section>
        <section id="project" className="project">
          <Project />
        </section>
        <section className="other_project">
          <OtherProject />
        </section>
      </div>
    </div>
  );
};

export default Main;
