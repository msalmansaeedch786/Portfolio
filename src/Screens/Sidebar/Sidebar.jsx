import React from "react";
import "./Sidebar.scss";

import home from "../../Assets/home.svg";
import about from "../../Assets/about.svg";
import services from "../../Assets/services.svg";
import contact from "../../Assets/contacts.svg";
import award from "../../Assets/award.svg";
import certificate from "../../Assets/certificate.svg";
import project from "../../Assets/project.svg";

import { NavLink } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <div className="sb__container">
      <div className="sb__header">
        <div className="name cursor">
          <span className="first">S</span>ALMAN
        </div>
      </div>
      <div className="sb__body">
        <NavLink
          to="/home"
          activeClassName="active"
          onClick={props.homescroll}
          className="home">
          <img src={home} alt="" className="icon" />
          <div className="text">Home</div>
        </NavLink>

        <NavLink
          to="/about"
          activeClassName="active"
          onClick={props.aboutscroll}
          className="home">
          <img src={about} alt="" className="icon" />
          <div className="text">About</div>
        </NavLink>
        <NavLink
          to="/services"
          activeClassName="active"
          onClick={props.servicescroll}
          className="home">
          <img src={services} alt="" className="icon" />
          <div className="text">Services</div>
        </NavLink>
        <NavLink
          to="projects"
          activeClassName="active"
          onClick={props.projectscroll}
          className="home">
          <img src={project} alt="" className="icon" />
          <div className="text">Projects</div>
        </NavLink>
        <NavLink
          to="certifications"
          activeClassName="active"
          onClick={props.certificationscroll}
          className="home">
          <img src={certificate} alt="" className="icon" />
          <div className="text">Certifications</div>
        </NavLink>
        <NavLink
          to="awards"
          activeClassName="active"
          onClick={props.awardscroll}
          className="home">
          <img src={award} alt="" className="icon" />
          <div className="text">Awards</div>
        </NavLink>
        <NavLink
          to="contact"
          activeClassName="active"
          onClick={props.contactscroll}
          className="home">
          <img src={contact} alt="" className="icon" />
          <div className="text">Contact</div>
        </NavLink>
      </div>
      {/* <div className="sb__footer">
        <img src={zahid} alt="" className="my__img" />
        <div className="info">
          <div className="name">Salman</div>
          <div className="mail">support@salman.com</div>
        </div>
      </div> */}
    </div>
  );
};

export default Sidebar;
