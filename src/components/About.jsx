import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <div className="about_inner">
        <span>1.</span>
        <h2>About Me</h2>
        <p></p>
      </div>
      <div className="def">
        <div className="first_about">
          <p>
            Hello! I'm <span>Rachit Patel</span> a Software Engineering student
            who is highly focused self motivated Software Developer who{" "}
            <span>loves to code</span>. I'm a{" "}
            <span>Full stack Web Developer</span>. My interest in the field of
            Web Development started when I was in 2nd Year and use to make
            static website with the help of <span>HTML & CSS</span>.
          </p>
          <p>
            I am a quick learner and a team player who believes in{" "}
            <span>working hard and smart</span>. I am always open to new{" "}
            <span>opportunities and challenges</span>. I always try to utilize
            my knowledge of various databases for the growth of the{" "}
            <span>organization</span>.
          </p>
          <p>
            I have a good knowledge of{" "}
            <span>
              HTML/CSS, JavaScript, ReactJS, NodeJS, ExpressJS, MongoDB
            </span>{" "}
            etc. I have also worked on various <span>projects</span> using these
            technologies. Here are some technologies I have been working:
          </p>
          <div className="list">
            <ul>
              <li>
                <span>•</span>ReactJS
              </li>
              <li>
                <span>•</span>ExpressJS
              </li>
              <li>
                <span>•</span>MongoDb
              </li>
            </ul>
            <ul>
              <li>
                <span>•</span>JavaScript
              </li>
              <li>
                <span>•</span>NodeJS
              </li>
            </ul>
          </div>
        </div>
        <div className="second_about">
          <div className="image">
            <img src="/imgrp.jpg" alt="Rachit Patel" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
