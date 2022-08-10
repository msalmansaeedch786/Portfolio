import React, { useState } from "react";
import Slider from "react-slick";
import "./Project.scss";

import aws from "../../Assets/project2.svg";
import Button from "../components/Button";
import AppModal from "../components/Modal/Modal";
import {
  Amway,
  Dealer,
  Freak,
  Keyless,
  NorthBayLabs,
  Vector,
} from "../Services/ServicesInfo";

const arr = [
  {
    title: "Keyless",
    associalte: "Associated with AUTOMATA ",
    duration: "Aug 2018 - Jan 2019",
    final:
      "Keyless is a permission-less peer-to-peer network that allows biometrics-enabled authentication – creating a decentralized ecosystem with revolutionary user experience and strong security guarantees",
    para: <Keyless />,
  },
  {
    title: "CodeFreak",
    associalte: "Associated with Multidisciplinary Research Lab ",
    duration: "Jan 2019 - Jun 2019",
    para: <Freak />,

    final:
      "CodeFreak is a programming website, which mainly target and focus on programming problems, programming competitions and also social interaction in form of chat between participants",
  },
  {
    title: "NorthBay Labs",
    associalte: "Associated with NorthBay Solutions",
    duration: "Jul 2019 - Sep 2019",
    para: <NorthBayLabs />,

    final:
      "This project is to develop a collection of Cloud Formation Custom Resources that will simplify working with AWS resources that are difficult or impossible to work with in CFN templates, as a DevOps Engineer we need a set of custom resources to simplify CFN template development.",
  },
  {
    title: "Amway",
    associalte: "Associated with NorthBay Solutions",
    duration: "Sep 2019 - Dec 2019",
    para: <Amway />,

    final:
      "This project is to maintain the data pipelines, data sitting on on-premises Oracle. Maintained the Batch Ingestion Pipeline, Streamed Data Pipeline and Curation Pipeline. It also included Data Lake, ETL and Production Support. Provided DevOps assistance and support in this Big Data project.",
  },
  {
    title: "Vector Solutions",
    associalte: "Associated with NorthBay Solutions",
    duration: "Dec 2019 - Dec 2020",
    para: <Vector />,

    final:
      "Building a personalized market data terminal that tracks and visualizes the performance of each and every motor dealer and inventory advertised on all major ad networks in the country. ",
  },
  {
    title: "DealerMeter",
    associalte: "Self",
    duration: "Mar 2021 - Apr 2021",
    para: <Dealer />,

    final:
      "Building a personalized market data terminal that tracks and visualizes the performance of each and every motor dealer and inventory advertised on all major ad networks in the country. ",
  },
];
const Project = (props) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(-1);

  const handleClickOpen = (i) => {
    setOpen(true);
    setIndex(i);
  };

  const handleClose = () => {
    setOpen(false);
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1670,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };
  return (
    <div ref={props.projects} className="project__container">
      <AppModal data={arr[index]} handleClose={handleClose} open={open} />

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
        className="heading">
        Projects
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
        <Slider {...settings}>
          {arr.map((data, i) => {
            return (
              <div className="project" rel="noreferrer">
                <img src={aws} alt="" className="p1" />
                <div className="atext">{data.title}</div>
                {/* <div className="aissue">"{data.associalte}"</div>
                <div className="aissue">{data.duration}</div> */}
                <div className="issue">{data.final}</div>
                <div className="btnn">
                  <Button click={() => handleClickOpen(i)} text="Show More" />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Project;
