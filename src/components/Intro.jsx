import React from "react";

const Intro = () => {
  return (
    <div className="intro_inner">
      <div className="first">Hi, I'm</div>
      <div className="second">
        <h2>Rachit Patel.</h2>
      </div>
      <div className="third">
        <h2>Looking for the opportunity.</h2>
      </div>
      <div className="fourth">
        <p>
          I am highly focused self motivated <span>Software Developer</span> who
          loves to code. I always keep trying to seek an opportunity to work in
          a challenging environment to prove my <span>coding skills.</span>
          {/* coding skills and utilize my knowledge of various databases for the growth of the{" "} organization */}
        </p>
      </div>
      <div className="fifth">
        <a href="#contact" className="btn">
          Explore More
        </a>
      </div>
    </div>
  );
};

export default Intro;
