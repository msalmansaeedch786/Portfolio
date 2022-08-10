import React from "react";
import "./About.scss";

// IMGS
import aboutimg from "../../Assets/main2.jpeg";

// MUI
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 12,
  borderRadius: 2,
  marginTop: 6,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#191c26",
    border: "1px solid #555",
  },
}));

const About = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div ref={props.about} className="about__container">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
          className="about__heading">
          About Me
        </div>
        <div className="about__body">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
            className="about__left">
            <div className="left__heading">Hi, I'm Salman Saeed</div>
            <div className="left__para">
              Software Engineer having 3+ years of experience in AWS at Big Data
              and DevOps Engineer roles with a professional attitude who works
              with dedication and always ready to accept challenges. I bring
              value to the team by always trying to give the best long term
              solutions for bigger problems.
            </div>
            <div className="left__heading">What is my skill level?</div>
            <div className="left__para">
              Following are Technologies in which i have experties & I have much
              grip on them
            </div>
            <div className="skills">
              <div className="skill1">
                <div className="title">Amazon Web Services (AWS)</div>
                <div className="bar">
                  <Box sx={{ flexGrow: 2 }}>
                    <BorderLinearProgress variant="determinate" value={80} />
                  </Box>
                </div>
              </div>
              <div className="skill1">
                <div className="title">DevOps</div>
                <div className="bar">
                  <Box sx={{ flexGrow: 2 }}>
                    <BorderLinearProgress variant="determinate" value={90} />
                  </Box>
                </div>
              </div>
            </div>
            <div className="skills">
              <div className="skill1">
                <div className="title">Cloud Computing</div>
                <div className="bar">
                  <Box sx={{ flexGrow: 2 }}>
                    <BorderLinearProgress variant="determinate" value={80} />
                  </Box>
                </div>
              </div>
              <div className="skill1">
                <div className="title">Serverless Computing</div>
                <div className="bar">
                  <Box sx={{ flexGrow: 2 }}>
                    <BorderLinearProgress variant="determinate" value={70} />
                  </Box>
                </div>
              </div>
            </div>
            <div className="skills">
              <div className="skill1">
                <div className="title">CI/CD Management</div>
                <div className="bar">
                  <Box sx={{ flexGrow: 2 }}>
                    <BorderLinearProgress variant="determinate" value={75} />
                  </Box>
                </div>
              </div>
              <div className="skill1">
                <div className="title">Cloud Infrastructure</div>
                <div className="bar">
                  <Box sx={{ flexGrow: 2 }}>
                    <BorderLinearProgress variant="determinate" value={90} />
                  </Box>
                </div>
              </div>
            </div>
            <div className="more__btn" onClick={handleClickOpen}>
              More About Me
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
            className="about__right">
            <img src={aboutimg} alt="" className="aboutimg" />
            <div className="experience">
              <div className="text">
                <span>3+ Years</span> <br /> of Experiance
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          // fullWidth={fullWidth}
          maxWidth="xl"
          aria-describedby="alert-dialog-slide-description">
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <div className="dialog__container">
                <div className="personal">
                  <div className="heading">Personal Info</div>
                  <div className="data">
                    <ul>
                      <li>
                        First Name: <span>Muhammad</span>
                      </li>
                      <li>
                        Last Name: <span>Salman</span>
                      </li>
                      <li>
                        DOB: <span>July 30, 1996</span>
                      </li>
                      <li>
                        Age: <span>26 Years</span>
                      </li>
                      <li>
                        Nationality: <span>Pakistani</span>
                      </li>
                      <li>
                        Freelance: <span>Available</span>
                      </li>
                      <li>
                        Adress: <span>Berlin, Germany</span>
                      </li>
                      <li>
                        Phone: <span>+491637171564 </span>
                      </li>
                      <li>
                        Skype: <span>live:msalmansaeedch786</span>
                      </li>

                      <li>
                        Languages: <span>English, Urdu</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="education">
                  <div className="heading">Education</div>
                  <div className="educations">
                    <div className="first__education">
                      <div className="border"></div>
                      <div>
                        <MenuBookIcon className="icon" />
                      </div>
                      <div className="info">
                        <div className="degree__name">Bachelor's</div>
                        <div className="clg">Unviersity of the Punjab</div>
                        <div className="degree">Software Engineering</div>
                        <div className="degree">Grade: 3.74</div>
                      </div>
                    </div>
                    <div className="first__education">
                      <div className="border"></div>
                      <div>
                        <MenuBookIcon className="icon" />
                      </div>
                      <div className="info">
                        <div className="degree__name">Intermediate</div>
                        <div className="clg">Punjab Group of Colleges</div>
                        <div className="degree">Pre-Engineering</div>
                        <div className="degree">Grade: A+</div>
                      </div>
                    </div>
                    <div className="first__education">
                      <div className="border"></div>
                      <div>
                        <MenuBookIcon className="icon" />
                      </div>
                      <div className="info">
                        <div className="degree__name">Matriculation</div>
                        <div className="clg">The Educators</div>
                        <div className="degree">Science</div>
                        <div className="degree">Grade: A+</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default About;

// curosr remove
// home page description
// social link check
// cv check
// skill names
// pu name
// grade instead of year
// personla info
// name muhamad salman
// adress berlin
// skype id
// age 1996
// language english urdu

// what i do icons
//  3rd InfraStructure

//  I'm always open to discussing product,
// projects or partnerships.
