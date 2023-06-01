import React, { useState } from "react";
import "./Experience.scss";

const Experience = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="experience">
      <div className="experience_inner">
        <span>2.</span>
        <h2>My Experience</h2>
        <p></p>
      </div>
      <div className="exp_div">
        <div className="roles">
          <button
            onClick={() => setActive(0)}
            className={`${active === 0 ? "active" : ""}`}
          >
            <span>Bhumi</span>
          </button>
          <button
            onClick={() => setActive(1)}
            className={`${active === 1 ? "active" : ""}`}
          >
            <span>SIH 2022</span>
          </button>
          <button
            onClick={() => setActive(2)}
            className={`${active === 2 ? "active" : ""}`}
          >
            <span> Kenvent IT</span>
          </button>
        </div>
        <div className="roles_responsive">
          <button
            onClick={() => setActive(0)}
            className={`${active === 0 ? "active" : ""}`}
          >
            <span>Bhumi</span>
          </button>
          <button
            onClick={() => setActive(1)}
            className={`${active === 1 ? "active" : ""}`}
          >
            <span>SIH 2022</span>
          </button>
          <button
            onClick={() => setActive(2)}
            className={`${active === 2 ? "active" : ""}`}
          >
            <span> Kenvent IT</span>
          </button>
        </div>
        <div className="position">
          {active === 0 && (
            <div className="container">
              <div className="head">
                <div className="first">
                  <h3>Youth Volunteer</h3>
                  <a href="https://bhumi.ngo">
                    <p>@</p>
                    <p>Bhumi</p>
                  </a>
                </div>
                <div className="second">
                  <span>April 2021</span> <span>-</span> <span>May 2021</span>
                </div>
              </div>
              <div className="desc">
                <ol>
                  <li>
                    <div>•</div>
                    <div>
                      Bhumi is one of India's largest independent and youth
                      volunteer <span>non-profit organization</span>.
                    </div>
                  </li>
                  <li>
                    <div>•</div>
                    <div>
                      Attending orientation to know more about COVID,{" "}
                      <span>COVID vaccination</span>, myths, and facts around
                      the same.
                    </div>
                  </li>
                  <li>
                    <div>•</div>
                    <div>
                      The content can cover any <span>thematic area</span>{" "}
                      including the need to get vaccinated myths and facts
                      around COVID vaccination and/or process to{" "}
                      <span>register</span> and get vaccinated.
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          )}
          {active === 1 && (
            <div className="container">
              <div className="head">
                <div className="first">
                  <h3>Backend & Frontend Developer</h3>
                  <a className="first_a" href="https://www.sih.gov.in/">
                    <p>@</p>
                    <p>SMART INDIA HACKATHON 2022</p>
                  </a>
                  <a className="first_a_res" href="https://www.sih.gov.in/">
                    <p>@</p>
                    <p>SIH 2022</p>
                  </a>
                </div>
                <div className="second">
                  <span>November 2021</span> <span>-</span>{" "}
                  <span>April 2022</span>
                </div>
              </div>
              <div className="desc">
                <ol>
                  <li>
                    <div>•</div>
                    <div>
                      Smart India Hackathon is a{" "}
                      <span>nationwide initiative</span> to provide students
                      with a platform to solve some of the{" "}
                      <span>pressing problems</span> we face in our daily lives.
                    </div>
                  </li>
                  <li>
                    <div>•</div>
                    <div>
                      Our Team consists of 6 members and we are working on a
                      project named <span>Smart Learning</span>. I'm working as
                      a <span>Backend & Frontend Developer</span> in this
                      project.
                    </div>
                  </li>
                  <li>
                    <div>•</div>
                    <div>
                      Our Problem Statement was <span>Smart Education</span> and
                      we have to develop a <span>Software</span> through which
                      we can provide <span>Interactive</span> &{" "}
                      <span>Interactive</span> Learning.
                    </div>
                  </li>
                  <li>
                    <div>•</div>
                    <div>
                      Though we could not make it to the <span>final list</span>{" "}
                      but we learned a lot from this experience. We are Proud of
                      our Team and looking forward to face{" "}
                      <span>more challenges</span> in future.
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          )}
          {active === 2 && (
            <div className="container">
              <div className="head">
                <div className="first">
                  <h3>FrontEnd Developer</h3>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://kenvent.in/"
                  >
                    <p>@</p>
                    <p>Kenvent IT</p>
                  </a>
                </div>
                <div className="second">
                  <span>January 2022</span> <span>-</span>{" "}
                  <span>February 2022</span>
                </div>
              </div>
              <div className="desc">
                <ol>
                  <li>
                    <div>•</div>
                    <div>
                      Kenvent Services is one of the best{" "}
                      <span>website design</span>{" "}
                      development companies in <span>India</span>.
                    </div>
                  </li>
                  <li>
                    <div>•</div>
                    <div>
                      Work using HTML, CSS, JS, understanding of{" "}
                      <span>responsive web design</span> and on-page SEO.
                    </div>
                  </li>
                  <li>
                    <div>•</div>
                    <div>
                      Work on completing the <span>task</span> in the given time
                      frame.
                    </div>
                  </li>
                  <li>
                    <div>•</div>
                    <div>
                      Handle the <span>updation</span> of the work each day.
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
