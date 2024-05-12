import React from "react";
import Slider from "react-slick";
import "./ServiceSlider.css";
import { Link } from "react-router-dom";

export default function TrainingSlider() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    innerWidth: "90%",
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    initialSlide: 0,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="mt-5">
      <div className="serviceContainer programming bg-light d-flex flex-column align-items-center justify-content-center text-center">
        <h3>PROGRAMMING</h3>
        <Link to="/training/programming-course">
          <button className="btn text-white">Learn more</button>
        </Link>
      </div>
      <div className="serviceContainer web_development bg-light d-flex flex-column align-items-center justify-content-center text-center">
        <h3>WEB DEVELOPMENT</h3>
        <Link to="/training/web-development-course">
          <button className="btn text-white">Learn more</button>
        </Link>
      </div>
      <div className="serviceContainer web_design bg-light d-flex flex-column align-items-center justify-content-center text-center">
        <h3>WEB DESIGN</h3>
        <Link to="/training/web-design-course">
          <button className="btn text-white">Learn more</button>
        </Link>
      </div>
      <div className="serviceContainer database bg-light d-flex flex-column align-items-center justify-content-center text-center">
        <h3>DATABASE</h3>
        <Link to="/training/database-course">
          <button className="btn text-white">Learn more</button>
        </Link>
      </div>
      <div className="serviceContainer excel bg-light d-flex flex-column align-items-center justify-content-center text-center">
        <h3>ADVANCE EXCEL</h3>
        <Link to="/training/excel-course">
          <button className="btn text-white">Learn more</button>
        </Link>
      </div>
      <div className="serviceContainer digital_marketing bg-light d-flex flex-column align-items-center justify-content-center text-center">
        <h3>DIGITAL MARKETING</h3>
        <Link to="/training/digital-marketing-course">
          <button className="btn text-white">Learn more</button>
        </Link>
      </div>
    </Slider>
  );
}
