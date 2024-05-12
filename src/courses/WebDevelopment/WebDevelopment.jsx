import React, { useState } from "react";
import WebDevelopmentForm from "./WebDevelopmentForm";
import Alert from "../../components/Alert/alert";
import { useDispatch, useSelector } from "react-redux";
import { alertSliceAction } from "../../store/alert";

const WebDevelopment = () => {
  const alert = useSelector(state => state.alert);
  const dispatch = useDispatch();

  setTimeout(() => {
    dispatch(alertSliceAction.setAlert(false));
  }, 4000);
  return (
    <>
      <div className="container text-white text-left mt-5">
        <h2 className="text-center heading">Web Development</h2>
        <div className="container mt-5 text-center">
          <p className="about-para">
            "Discover the power of crafting immersive digital experiences
            through web development at Param Computers. Whether you're drawn to
            the artistry of front-end design or the intricacies of back-end
            functionality, our institution provides the perfect platform to hone
            your skills. From mastering HTML, CSS, and JavaScript to delving
            into frameworks like React and Angular, our comprehensive courses
            cover the full spectrum of web development technologies. Led by
            seasoned professionals, our programs blend theory with hands-on
            practice, ensuring you're equipped to tackle real-world challenges
            in the ever-evolving digital landscape. Join our dynamic learning
            community online or offline, and unlock the potential to create
            captivating websites and web applications that leave a lasting
            impact. Embrace the future of digital innovation with Param
            Computers. Enroll now and embark on a journey to become a proficient
            web developer."
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-success"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#WebDevelopmentModal"
          >
            Register
          </button>
        </div>

        <div className="text-left my-5">
          <h4 className="heading">Certificate in Basic Web Development</h4>
          <p className="fw-bold course-list">
            Course Duration : 3 months
          </p>
          <p className="fw-bold course-list">
            {" "}
            Course Fee : Rs. 4999/- 
          </p>
          <p className="fw-bold course-list"> Registration Fee : Rs. 500/-</p>
          <h4 className="heading">Certificate in Full Stack Web Development</h4>
          <p className="fw-bold course-list">
            Course Duration : 6 months
          </p>
          <p className="fw-bold course-list">
            {" "}
            Course Fee : Rs. 19999/- 
          </p>
          <p className="fw-bold course-list"> Registration Fee : Rs. 500/-</p>
        </div>
      </div>

      <div
        className="modal fade"
        id="WebDevelopmentModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Registration Form for Web Development
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body" style={{ height: "500px" }}>
              <WebDevelopmentForm />
            </div>
          </div>
        </div>
      </div>
      {alert && <Alert name={"Web Development course"} />}
    </>
  );
};

export default WebDevelopment;
