import React, { useState } from "react";
import "./Education.scss";

const Experience = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="experience">
      <div className="experience_inner">
        <span>4.</span>
        <h2>My Education</h2>
        <p></p>
      </div>
      <div className="exp_div">
        <div className="roles">
          <button
            onClick={() => setActive(0)}
            className={`${active === 0 ? "active" : ""}`}
          >
            <span>10th</span>
          </button>
          <button
            onClick={() => setActive(1)}
            className={`${active === 1 ? "active" : ""}`}
          >
            <span>12th</span>
          </button>
          <button
            onClick={() => setActive(2)}
            className={`${active === 2 ? "active" : ""}`}
          >
            <span>B.Tech</span>
          </button>
        </div>
        <div className="roles_responsive">
          <button
            onClick={() => setActive(0)}
            className={`${active === 0 ? "active" : ""}`}
          >
            <span>10th</span>
          </button>
          <button
            onClick={() => setActive(1)}
            className={`${active === 1 ? "active" : ""}`}
          >
            <span>12th</span>
          </button>
          <button
            onClick={() => setActive(2)}
            className={`${active === 2 ? "active" : ""}`}
          >
            <span>B.Tech</span>
          </button>
        </div>
        <div className="educ">
          {(active === 0 || active === 1) && (
            <>
              <div
                className={`${active === 0 ? "container border" : "container"}`}
              >
                <div className="inner_box">
                  <div className="head">
                    <div className="logo">
                      <img
                        src="https://dev-portfolio-flax.vercel.app/spring.png"
                        alt=""
                      />
                    </div>
                    <h2>Spring Day Higher Secondary School</h2>
                  </div>
                  <div className="remain">
                    <div className="first">High School</div>
                    <div className="second">10th Standard || Jabalpur</div>
                    <div className="third">
                      <span>April 2017</span> <span>-</span>{" "}
                      <span>March 2018</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${active === 1 ? "container border" : "container"}`}>
                <div className="inner_box">
                  <div className="head">
                    <div className="logo">
                      <img
                        src="https://dev-portfolio-flax.vercel.app/spring.png"
                        alt=""
                      />
                    </div>
                    <h2>Spring Day Higher Secondary School</h2>
                  </div>
                  <div className="remain">
                    <div className="first">Higher Secondary School</div>
                    <div className="second">12th Standard || Jabalpur</div>
                    <div className="third">
                      <span>April 2019</span> <span>-</span>{" "}
                      <span>March 2020</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          {active === 2 && (
            <div
              className={`${active === 2 ? "container border" : "container"}`}
            >
              <div className="inner_box">
                <div className="head">
                  <div className="logo">
                    <img
                      src="https://dev-portfolio-flax.vercel.app/spring.png"
                      alt=""
                    />
                  </div>
                  <h2>Gyan Ganga Institute of Technology and Sciences</h2>
                </div>
                <div className="remain">
                  <div className="first">Bachelor Of Technology Degree</div>
                  <div className="second">
                    Computer Science Engineering || Jabalpur
                  </div>
                  <div className="third">
                    <span>April 2021</span> <span>-</span> <span>Present</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
