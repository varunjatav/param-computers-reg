import React, { useState } from "react";
import Alert from "../../components/Alert/alert";
import WebDesignForm from "./WebDesignForm";
import { useDispatch, useSelector } from "react-redux";
import { alertSliceAction } from "../../store/alert";

const WebDesign = () => {
  const alert = useSelector(state => state.alert);
  const dispatch = useDispatch();

  setTimeout(() => {
    dispatch(alertSliceAction.setAlert(false));
  }, 4000);
  return (
    <>
      <div className="container text-white text-left mt-5">
        <h2 className="text-center heading">Web Design</h2>
        <div className="container mt-5 text-center">
          <p className="about-para">
            This course is designed for beginners who want to learn the
            foundations of website development. In today's digital age, having
            the ability to create your own website is a valuable skill. By the
            end of this course, participants will have the knowledge and skills
            needed to build their own websites.
          </p>
        </div>

        <div className="d-flex justify-content-center">
          <button
            className="btn btn-success"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#WebDesignModal"
          >
            Register
          </button>
        </div>
        {alert && <Alert name={"Web Development course"} />}
        <div className="text-left my-5">
          <h4 className="heading">What you'll learn :</h4>
          <ul className="course-list" style={{ listStyleType: "disc" }}>
            <li>Understand the basics of website development</li>
            <li>Create a functional and visually appealing website</li>
            <li>Customize website elements to fit your needs</li>
            <li>Publish your website online for the world to see</li>
          </ul>
        </div>
        <div className="text-left">
          <h4 className="heading">Skills you'll gain :</h4>
          <ul className="course-list" style={{ listStyleType: "disc" }}>
            <li>HTML and CSS coding</li>
            <li>Website design principles</li>
            <li>Fundamentals of JavaScript</li>
            <li>Problem-solving and troubleshooting in web development</li>
          </ul>
          <p className="fw-bold course-list">
            Course Duration : 2 Months (Min. as per student’s performance){" "}
          </p>
          <p className="fw-bold course-list"> Course Fee : Rs. 5999/-</p>
        </div>
        <div>
          <h4 className="heading">Download Full Course PDF: </h4>
          <a href="/webDesigning.pdf" download className="btn btn-primary" type="button">Download</a>
        </div>
      
      </div>

      <div
        className="modal fade"
        id="WebDesignModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Registration Form for Web Design
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body" style={{ height: "500px" }}>
              <WebDesignForm />
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default WebDesign;
