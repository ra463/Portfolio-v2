import React from "react";
import "./OtherProject.scss";
import { FiExternalLink, FiFolder, FiGithub } from "react-icons/fi";

const OtherProject = () => {
  return (
    <div className="other_pro">
      <div className="other_inner">
        <h2>Some Other Project's</h2>
        <span>Listed below</span>
      </div>
      <ul className="list_other">
        <li className="onhover">
          <div className="main_box">
            <div className="header">
              <div className="first">
                <FiFolder className="fold" />
                <div className="link">
                  <a
                    href="https://github.com/ra463/Ecommerce"
                    aria-label="GitHub Link"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FiGithub />
                  </a>
                  <a
                    href="https://ecommerce-rp.herokuapp.com/"
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
                <a href="/">Ecommerce Online Shopping Website</a>
              </h3>
              <div className="para">
                <p>
                  This is a <span>Ecommerce</span> Website which is built using{" "}
                  <span>MERN Stack</span>. This website has all the features of
                  Ecommerce Website like Cart, Wishlist,{" "}
                  <span>Payment Gateway</span>, etc.
                </p>
              </div>
            </div>
            <div className="footer">
              <ol>
                <li>React</li>
                <li>MongoDb</li>
                <li>Node</li>
              </ol>
            </div>
          </div>
        </li>
        <li className="onhover">
          <div className="main_box">
            <div className="header">
              <div className="first">
                <FiFolder className="fold" />
                <div className="link">
                  <a
                    href="https://github.com/ra463/SocialMedia"
                    aria-label="GitHub Link"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FiGithub />
                  </a>
                  <a
                    href="https://socialmedia-gxmj.onrender.com/"
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
                <a href="/">Photo & Video Sharing Webapp</a>
              </h3>
              <div className="para">
                <p>
                  In this Webapp, you can share your photos and videos with your
                  friends & family and can follow eachother. You can also like
                  and comment on other people's posts.
                </p>
              </div>
            </div>
            <div className="footer">
              <ol>
                <li>Tailwind CSS</li>
                <li>JavaScript</li>
                <li>ExpressJS</li>
              </ol>
            </div>
          </div>
        </li>
        <li className="onhover">
          <div className="main_box">
            <div className="header">
              <div className="first">
                <FiFolder className="fold" />
                <div className="link">
                  <a
                    href="https://github.com/ra463/food"
                    aria-label="GitHub Link"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FiGithub />
                  </a>
                  <a
                    href="https://ra463.github.io/food/"
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
                <a href="/">Satic Food Website</a>
              </h3>
              <div className="para">
                <p>
                  This is simple static Food Website built with HTML and CSS.
                  This website is fully responsive and has a beautiful UI.
                </p>
              </div>
            </div>
            <div className="footer">
              <ol>
                <li>HTML</li>
                <li>CSS</li>
                <li>Github</li>
              </ol>
            </div>
          </div>
        </li>
        <li className="onhover">
          <div className="main_box">
            <div className="header">
              <div className="first">
                <FiFolder className="fold" />
                <div className="link">
                  <a
                    href="https://github.com/ra463/Portfolio-v2"
                    aria-label="GitHub Link"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FiGithub />
                  </a>
                  <a
                    href="https://rachitpatel.vercel.app/"
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
                <a href="/">Version-2 (v2) of My Portfolio</a>
              </h3>
              <div className="para">
                <p>
                  This is the second version of my portfolio website. This
                  website is built using ReactJS and SCSS. This website is fully
                  responsive and has a beautiful UI.
                </p>
              </div>
            </div>
            <div className="footer">
              <ol>
                <li>SCSS</li>
                <li>ReactJS</li>
                <li>Portfolio</li>
              </ol>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default OtherProject;
