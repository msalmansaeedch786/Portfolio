import React from "react";
import Slider from "react-slick";
import "./Certifications.scss";

import aws from "../../Assets/aws.jpg";
import c1 from "../../Assets/c1.png";
import c2 from "../../Assets/c2.png";
import c3 from "../../Assets/c3.png";

const arr = [
  {
    link: "https://www.credly.com/badges/8492fd89-ca8e-46b5-a1cc-7553116ab86d",
    img: c1,
    heading: "AWS Cloud Practitioner",
  },
  {
    link: "https://www.credly.com/badges/3e1061d9-3dc4-4094-8333-5892b5a9e2b1",
    img: c3,
    heading: "AWS Solution Architect Associate",
  },
  {
    link: "https://www.credly.com/badges/0ac26dba-8408-43c4-9af5-75d67c511cf0",
    img: c2,
    heading: "AWS Developer Associate",
  },
];

const Certifications = (props) => {
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
    <div ref={props.certifications} className="certificate__container">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
        className="heading">
        Licenses & certifications
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
        <Slider {...settings}>
          {arr.map((data) => {
            return (
              <div className="certificate" rel="noreferrer">
                <img src={data.img} alt="" className="p1" />
                <div className="text">{data.heading}</div>
                <a
                  className="btn"
                  href={data.link}
                  target="_blank"
                  rel="noreferrer">
                  Show credential
                </a>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Certifications;
