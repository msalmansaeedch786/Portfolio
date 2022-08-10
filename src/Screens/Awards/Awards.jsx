import React from "react";
import Slider from "react-slick";
import "./Awards.scss";

import aws from "../../Assets/award.png";

const arr = [
  {
    title: "Batch Topper",
    associalte: "University of the Punjab",
    final:
      "Completed degree by securing CGPA 3.74/4.00 and got 1st Position in batch",
  },
  {
    title: "Class Representative (CR)",
    associalte: "University of the Punjab",
    final:
      "Remained class representative for 4 years, by securing first position in each semester",
  },
  {
    title: "Name in Merit Scholarship For CGPA",
    associalte: "University of the Punjab",
    final:
      "Got merit scholarship during whole degree based on CGPA for more than 3.5",
  },
  {
    title: "Name in Principal's List for GPA",
    associalte: "University of the Punjab",
    final:
      "It’s an honorary list for the students getting more than 3.5 GPA in semester; got certificate",
  },
];
const Awards = (props) => {
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
    <div ref={props.awards} className="award__container">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
        className="heading">
        Honors & awards
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
        <Slider {...settings}>
          {arr.map((data) => {
            return (
              <div className="award" rel="noreferrer">
                <img src={aws} alt="" className="p1" />
                <div className="atext">{data.title}</div>
                <div className="aissue">"{data.associalte}"</div>
                <div className="issue">{data.final}</div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Awards;
