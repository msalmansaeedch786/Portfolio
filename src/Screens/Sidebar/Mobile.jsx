import React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import "./Mobile.scss";

import MenuIcon from "@mui/icons-material/Menu";
import home from "../../Assets/home.svg";
import about from "../../Assets/about.svg";
import services from "../../Assets/services.svg";
import blog from "../../Assets/blog.svg";
import contact from "../../Assets/contacts.svg";
import award from "../../Assets/award.svg";
import certificate from "../../Assets/certificate.svg";
import project from "../../Assets/project.svg";

const Mobile = (props) => {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 300 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <div className="sb__container">
        <div className="sb__header">
          <div className="name">
            <span className="first">S</span>ALMAN
          </div>
        </div>
        <div className="sb__body">
          <div onClick={props.homescroll} className="home">
            <img src={home} alt="" className="icon" />
            <div className="text">Home</div>
          </div>

          <div onClick={props.aboutscroll} className="home">
            <img src={about} alt="" className="icon" />
            <div className="text">About</div>
          </div>
          <div onClick={props.servicescroll} className="home">
            <img src={services} alt="" className="icon" />
            <div className="text">Services</div>
          </div>
          <div onClick={props.projectscroll} className="home">
            <img src={project} alt="" className="icon" />
            <div className="text">Projects</div>
          </div>
          <div onClick={props.certificationscroll} className="home">
            <img src={certificate} alt="" className="icon" />
            <div className="text">Certifications</div>
          </div>
          <div onClick={props.awardscroll} className="home">
            <img src={award} alt="" className="icon" />
            <div className="text">Awards</div>
          </div>
          <div onClick={props.contactscroll} className="home">
            <img src={contact} alt="" className="icon" />
            <div className="text">Contact</div>
          </div>
        </div>
        {/* <div className="sb__footer">
          <img src={zahid} alt="" className="my__img" />
          <div className="info">
            <div className="name">Salman</div>
            <div className="mail">support@salman.com</div>
          </div>
        </div> */}
      </div>
    </Box>
  );
  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <div className="burger" onClick={toggleDrawer(anchor, true)}>
            <MenuIcon className="iconss" />
          </div>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}>
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Mobile;
