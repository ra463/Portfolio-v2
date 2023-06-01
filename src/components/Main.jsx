import React from "react";
import Nav from "./Nav";
import "./Main.scss";
import Intro from "./Intro";
import About from "./About";
import Experience from "./Experience";
import Project from "./Project";
import OtherProject from "./OtherProject";
import Education from "./Education";
import Contact from "./Contact";

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
        <section id="education" className="education">
          <Education />
        </section>
        <section id="contact" className="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default Main;
