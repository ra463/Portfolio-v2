import React from "react";
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import "./Icons.scss";

const Icons = () => {
  return (
    <div className="main_icon">
      <div className="icons">
        <a
          href="https://github.com/ra463"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FiGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/rachit-patel-3a6602209/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FiLinkedin />
        </a>
        <a
          href="https://leetcode.com/ra_463/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <SiLeetcode />
        </a>
        <a
          href="https://www.instagram.com/itzz_rp_here_/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FiInstagram />
        </a>
        <a
          href="https://twitter.com/RachitInd"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FiTwitter />
        </a>
      </div>
      <p></p>
    </div>
  );
};

export default Icons;
