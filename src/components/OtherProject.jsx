import React from "react";
import "./OtherProject.scss";
import { FiExternalLink, FiFolder, FiGithub } from "react-icons/fi";

const OtherProject = () => {
  return (
    <div className="other_pro">
      <div className="other_inner">
        <h2>Some Project's I've built</h2>
        <span>Listed below</span>
      </div>
      <ol className="list_other">
        <li>
          <div className="main_box">
            <div className="header">
              <div className="first">
                <FiFolder />
                <div className="link">
                  <a
                    href="https://github.com/ra463/Dev-portfolio"
                    aria-label="GitHub Link"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FiGithub />
                  </a>
                  <a
                    href="https://dev-portfolio-flax.vercel.app/"
                    aria-label="External Link"
                    className="external"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FiExternalLink />
                  </a>
                </div>
              </div>
              <h3>
                <a href="/">Test Project 2021</a>
              </h3>
              <div className="para">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Minima asperiores quibusdam quod dicta.
                  Facilis amet doloribus exercitationem officia itaque sapiente.
                </p>
              </div>
            </div>
            <div className="footer">
              <ol>
                <li>React</li>
                <li>Next</li>
                <li>Node</li>
              </ol>
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default OtherProject;
