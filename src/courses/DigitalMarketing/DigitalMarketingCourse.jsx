import React, { useState } from "react";
import DigitalMarketingForm from "./DigitalMarketingForm";
import Alert from "../../components/Alert/alert";
import { useDispatch, useSelector } from "react-redux";
import { alertSliceAction } from "../../store/alert";

const DigitalMarketing = () => {
  
  const alert = useSelector(state => state.alert);
  const dispatch = useDispatch();

  setTimeout(() => {
    dispatch(alertSliceAction.setAlert(false));
  }, 4000);
  return (
    <>
      <div className="container text-white text-left mt-5">
        <h2 className="heading text-center">Digital Marketing</h2>
        <div className="container mt-5 text-center">
          <p className="about-para">
            In today's digital age, understanding digital marketing is essential
            for professionals across all industries. This comprehensive course
            will equip you with the necessary skills and knowledge to navigate
            the ever-evolving digital landscape successfully.
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-success"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#digitalMarketingModal"
          >
            Register
          </button>
        </div>
        {alert && <Alert name={"Digital Marketing course"} />}
        <div className="text-left my-5">
          <h4 className="heading">What you'll learn :</h4>
          <ul className="course-list" style={{ listStyleType: "disc" }}>
            <li>Understand the fundamentals of digital marketing</li>
            <li>Develop effective digital marketing strategies</li>
            <li>Implement various digital marketing techniques</li>
            <li>Analyze and optimize digital marketing campaigns</li>
            <li>Stay ahead of the competition in the digital realm</li>
          </ul>
          <h4 className="heading">Skills you'll gain :</h4>
          <ul className="course-list" style={{ listStyleType: "disc" }}>
            <li>Strategic thinking in digital marketing</li>
            <li>Social media marketing proficiency</li>
            <li>Search engine optimization (SEO) knowledge</li>
            <li>Content marketing expertise</li>
            <li>Digital analytics understanding</li>
          </ul>
          <p className="fw-bold course-list">
            Course Duration : 5 months
          </p>
          <p className="fw-bold course-list">
            {" "}
            Course Fee : Rs. 15999/- 
          </p>
          <p className="fw-bold course-list"> Registration Fee : Rs. 500/-</p>
          <div>
            <h4 className="heading">Download Full Course PDF: </h4>
            <a
              href="/CourseonDigitalMarketing.pdf"
              download
              className="btn btn-primary"
              type="button"
            >
              Download
            </a>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="digitalMarketingModal"
        tabIndex="-1"
        aria-labelledby="digitalMarketingModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="digitalMarketingModalLabel">
                Registration Form for DigitalMarketing
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body" style={{ height: "500px" }}>
              <DigitalMarketingForm  />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalMarketing;
