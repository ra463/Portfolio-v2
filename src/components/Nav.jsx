import React, { useEffect, useState } from "react";

const Nav = () => {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(true);
      } else {
        // if scroll up show the navbar
        setShow(false);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);
  return (
    <nav className={`active-nav ${show && "hidden"}`}>
      <a href="/">
        <svg
          id="logo"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 84 96"
          width={45}
        >
          <title>Logo</title>
          <g transform="translate(-8.000000, -2.000000)">
            <g transform="translate(11.000000, 5.000000)">
              <polygon
                id="Shape"
                stroke="#64ffda"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                points="39 0 0 22 0 67 39 90 78 68 78 23"
                fill="none"
              />

              <text
                x="39"
                y="48"
                dominant-baseline="middle"
                text-anchor="middle"
                font-size="40"
                fill="#64ffda"
              >
                R
              </text>
            </g>
          </g>
        </svg>
      </a>
      <ol>
        <li>
          {" "}
          <span>1.</span> About
        </li>
        <li>
          {" "}
          <span>2.</span> Experience
        </li>
        <li>
          {" "}
          <span>3.</span> Project
        </li>
        <li>
          {" "}
          <span>4.</span> Contact
        </li>
        <button>Resume</button>
      </ol>
    </nav>
  );
};

export default Nav;
