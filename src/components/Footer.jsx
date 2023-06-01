import React from "react";
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="foo">
      <div className="container">
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
        <a
          href="https://github.com/ra463"
          rel="noopener noreferrer"
          target="_blank"
          className="para"
        >
          <p>Designed and Built with ❤️ by Rachit Patel</p>
          <p>Design inspired from Brittany Chiang v4</p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
