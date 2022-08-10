import React, { useRef } from "react";
import "./Right.scss";
import Home from "../Home/Home";
import Sidebar from "../Sidebar/Sidebar";
import About from "../About/About";
import Services from "../Services/Services";
import Project from "../Projects/Project";
import Contact from "../Contact/Contact";
import Mobile from "../Sidebar/Mobile";
import Certifications from "../Certifications/Certifications";
import Awards from "../Awards/Awards";

const Right = () => {
  const home = useRef(null);
  const about = useRef(null);
  const services = useRef(null);
  const projects = useRef(null);
  const certifications = useRef(null);
  const awards = useRef(null);
  const contacts = useRef(null);

  const homescroll = () =>
    home.current.scrollIntoView({ behavior: "smooth", block: "start" });
  const aboutscroll = () =>
    about.current.scrollIntoView({ behavior: "smooth", block: "start" });
  const servicescroll = () =>
    services.current.scrollIntoView({ behavior: "smooth", block: "start" });
  const projectscroll = () =>
    projects.current.scrollIntoView({ behavior: "smooth", block: "start" });
  const certificationscroll = () =>
    certifications.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  const awardscroll = () =>
    awards.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  const contactscroll = () =>
    contacts.current.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="right__main">
      <div className="sidebar">
        <Sidebar
          homescroll={homescroll}
          aboutscroll={aboutscroll}
          servicescroll={servicescroll}
          projectscroll={projectscroll}
          certificationscroll={certificationscroll}
          awardscroll={awardscroll}
          contactscroll={contactscroll}
        />
      </div>
      <div className="mobile__sidebar">
        <Mobile
          homescroll={homescroll}
          aboutscroll={aboutscroll}
          servicescroll={servicescroll}
          projectscroll={projectscroll}
          certificationscroll={certificationscroll}
          awardscroll={awardscroll}
          contactscroll={contactscroll}
        />
      </div>
      <div className="right">
        <Home home={home} />
        <About about={about} />
        <Services services={services} />
        <Project projects={projects} />
        <Certifications certifications={certifications} />
        <Awards awards={awards} />
        <Contact contacts={contacts} />
      </div>
    </div>
  );
};

export default Right;
