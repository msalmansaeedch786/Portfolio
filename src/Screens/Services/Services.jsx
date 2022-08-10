import React, { useState } from "react";
import "./Services.scss";

import Button from "../components/Button";
import AppModal from "../components/Modal/Modal";

import aws from "../../Assets/aws.svg";
import infra from "../../Assets/infra.svg";
import ci from "../../Assets/ci.svg";
import docker from "../../Assets/docker.svg";
import log from "../../Assets/log.svg";
import agile from "../../Assets/agile.svg";
import { Agile, AwsInfo, CICD, Docker, Infra, Log } from "./ServicesInfo";

const arr = [
  {
    icon: aws,
    heading: "AWS Cloud Forensics",
    para: <AwsInfo />,
  },
  {
    icon: infra,
    heading: "Infrastructure Automation",
    para: <Infra />,
  },
  {
    icon: ci,
    heading: "CI/CD Implementation",
    para: <CICD />,
  },
  {
    icon: docker,
    heading: "Containerization & Orchestration",
    para: <Docker />,
  },
  {
    icon: log,
    heading: "Monitoring & Logging",
    para: <Log />,
  },
  {
    icon: agile,
    heading: "Agile Methodologies",
    para: <Agile />,
  },
];

const Services = (props) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(-1);

  const handleClickOpen = (i) => {
    setOpen(true);
    setIndex(i);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div ref={props.services} className="service__container">
      <AppModal data={arr[index]} handleClose={handleClose} open={open} />
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
        className="heading">
        What I Do
      </div>
      <div className="cards">
        {arr.map((data, i) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
              className="card1">
              <img alt="eror" src={data.icon} className="icon" />
              <div className="text">{data.heading}</div>
              <Button click={() => handleClickOpen(i)} text="Show More" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
