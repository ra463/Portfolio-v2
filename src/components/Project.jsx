import React from "react";
import "./Project.scss";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Project = () => {
  return (
    <div className="pro">
      <div className="pro_inner">
        <span>3.</span>
        <h2>Some Project's I've built</h2>
        <p></p>
      </div>
      <div className="pro_section">
        <div className="pro_1">
          <div className="img">
            <img src="/finder.png" alt="E-commerce" />
          </div>
          <div className="project_head">
            <p className="project_tag">Project Name</p>
            <h3 className="project_title">
              <a
                href="https://finderofficial.vercel.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Finder Webapp
              </a>
            </h3>
            <div className="project_desc back1">
              <p>
                The name of this project is <span>Finder</span>. The main aim of
                this Project that you can report the <span>missing person</span>{" "}
                and you can also <span>submit report</span> of the missing
                person you have found. This project is built using{" "}
                <span>MERN Stack</span>.
              </p>
            </div>
            <ul className="project_item">
              <li>VS Code</li>
              <li>ReactJS</li>
              <li>MongoDb</li>
              <li>ExpressJS</li>
              <li>Cloudinary</li>
            </ul>
            <div className="project_l">
              <a
                href="https://github.com/ra463/FrontF"
                aria-label="GitHub Link"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FiGithub />
              </a>
              <a
                href="https://finderofficial.vercel.app/"
                aria-label="External Link"
                className="external"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FiExternalLink />
              </a>
            </div>
          </div>
        </div>
        <div className="pro_1">
          <div className="img">
            <img src="/eleran.png" alt="E-learning" />
          </div>
          <div className="project_head back2">
            <p className="project_tag">Project Name</p>
            <h3 className="project_title">
              <a
                href="https://learninglab.vercel.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Elearning Website
              </a>
            </h3>
            <div className="project_desc">
              <p>
                This is an e-learning website which is built using{" "}
                <span>MERN Stack</span>. Students can register themselves and
                can buy the Subscription and enroll in any course. Admin can add
                courses and can see the progress of students.
              </p>
            </div>
            <ul className="project_item">
              <li>Scss</li>
              <li>JavaScript</li>
              <li>MongoDb</li>
              <li>Razorpay</li>
              <li>Vercel</li>
            </ul>
            <div className="project_l">
              <a
                href="https://github.com/ra463/Lab-front"
                aria-label="GitHub Link"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FiGithub />
              </a>
              <a
                href="https://learninglab.vercel.app/"
                aria-label="External Link"
                className="external"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FiExternalLink />
              </a>
            </div>
          </div>
        </div>
        <div className="pro_1">
          <div className="img">
            <img src="/port.png" alt="Portfolio" />
          </div>
          <div className="project_head back3">
            <p className="project_tag">Project Name</p>
            <h3 className="project_title">
              <a
                href="https://dev-portfolio-flax.vercel.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Personal Portfolio
              </a>
            </h3>
            <div className="project_desc">
              <p>
                This is a <span>personal Portfolio</span> Website which is built
                using <span>ReactJS</span>. This website written in{" "}
                <span>TypeScript</span> and Sanity.io for the{" "}
                <span>Database</span>. This website is fully responsive
              </p>
            </div>
            <ul className="project_item">
              <li>Santy.io</li>
              <li>ReactJS</li>
              <li>TypeScript</li>
              <li>Portfolio</li>
              <li>Github</li>
            </ul>
            <div className="project_l">
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
        </div>
      </div>
    </div>
  );
};

export default Project;
