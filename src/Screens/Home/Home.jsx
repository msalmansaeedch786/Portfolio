import React from "react";
import { NavLink } from "react-router-dom";

import cv from "../../Assets/cv.pdf";

import "./Home.scss";

import headerImg from "../../Assets/mainimg.jpg";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Home = (props) => {
  return (
    <div ref={props.home} className="home__container">
      <div className="header__img">
        <img src={headerImg} alt="Error" className="main__img" />
      </div>

      <div className="name">Salman Saeed</div>
      <div className="home__about">
        Software | DevOps Engineer | 3x - AWS Certified
      </div>
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="400"
        className="social__links">
        <a
          className="social__anchor"
          href="https://web.facebook.com/msalmansaeedch786?_rdc=1&_rdr"
          target="_blank"
          rel="noreferrer">
          <FacebookIcon className="social" />
        </a>
        <a
          className="social__anchor"
          href="https://twitter.com/_msalmansaeedch"
          target="_blank"
          rel="noreferrer">
          {" "}
          <TwitterIcon className="social" />
        </a>
        <a
          className="social__anchor"
          href="https://www.instagram.com/msalmansaeedch/"
          target="_blank"
          rel="noreferrer">
          <InstagramIcon className="social" />
        </a>
        <a
          className="social__anchor"
          href="https://www.linkedin.com/in/msalmansaeedch/"
          target="_blank"
          rel="noreferrer">
          {" "}
          <LinkedInIcon className="social" />
        </a>
        <a
          className="social__anchor"
          href="https://github.com/msalmansaeedch786"
          target="_blank"
          rel="noreferrer">
          {" "}
          <GitHubIcon className="social" />
        </a>
      </div>

      <a href={cv} target="_blank" download rel="noreferrer">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
          className="cv__btn">
          Download CV
        </div>
      </a>
    </div>
  );
};

export default Home;
