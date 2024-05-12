import React, { useState } from "react";
import ProgrammingForm from "./ProgrammingForm";
import Alert from "../../components/Alert/alert";
import { useDispatch, useSelector } from "react-redux";
import { alertSliceAction } from "../../store/alert";

const Programming = () => {

  const alert = useSelector(state => state.alert);
  const dispatch = useDispatch();

  setTimeout(() => {
    dispatch(alertSliceAction.setAlert(false));
  }, 4000);
  return (
    <>
      <div className="container text-white text-left mt-5">
        <h2 className="heading text-center">Programming</h2>
        <div className="container mt-5 text-center">
          <p className="about-para">
            "Embark on a journey of innovation and mastery with programming
            languages at Param Computers. Whether you're a novice or seasoned
            coder, our institution offers a dynamic learning environment
            tailored to your needs. Dive into the world of programming
            languages, where creativity meets problem-solving, and possibilities
            are limitless. Gain expertise in languages like Python, JavaScript,
            Java, C++, and more, unlocking doors to lucrative career
            opportunities in tech. Our comprehensive courses, led by industry
            experts, ensure you develop the skills demanded by today's digital
            landscape. Join us online or offline and become part of a vibrant
            community dedicated to shaping the future through code. Enroll now
            and ignite your passion for programming at Param Computers."
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-success"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#programmingModal"
          >
            Register
          </button>
        </div>
        {alert && <Alert name={"Programming course"} />}
        <div className="text-left my-5">
          <h4 className="heading">Master C Programming :</h4>
          <ul className="course-list" style={{ listStyleType: "disc" }}>
            <li>Proficiency in C language syntax and semantics</li>
            <li>Ability to develop C programs from scratch</li>
            <li>Debugging and troubleshooting skills for C programs</li>
            <li>Problem-solving and logical thinking capabilities</li>
          </ul>
          <p className="fw-bold course-list">
            Course Duration : 3 Months (Min. as per student’s performance){" "}
          </p>
          <p className="fw-bold course-list"> Course Fee : Rs. 4999/-</p>
          <p className="fw-bold course-list"> Registration Fee : Rs. 500/-</p>
          <div>
          <h4 className="heading">Download Full Course PDF: </h4>
          <a
            href="/MasteringCProgramming.pdf"
            download
            className="btn btn-primary"
            type="button"
          >
            Download
          </a>
        </div>
        </div>
        <div className="text-left mb-5">
          <h4 className="heading">Introduction to C++ Programming :</h4>
          <ul className="course-list" style={{ listStyleType: "disc" }}>
            <li>Basics of programming in C++</li>
            <li>Writing and executing C++ programs</li>
            <li>Understanding data types, variables, and operators in C++</li>
            <li>Problem-solving skills using coding logic</li>
          </ul>
          <p className="fw-bold course-list">
            Course Duration : 3 Months (Min. as per student’s performance){" "}
          </p>
          <p className="fw-bold course-list"> Course Fee : Rs. 5999/-</p>
          <p className="fw-bold course-list"> Registration Fee : Rs. 500/-</p>
          <div>
          <h4 className="heading">Download Full Course PDF: </h4>
          <a
            href="/IntroductionToC++Programming.pdf"
            download
            className="btn btn-primary"
            type="button"
          >
            Download
          </a>
        </div>
        </div>
        <div className="text-left mb-5">
          <h4 className="heading">Python Programming for Beginners:</h4>
          <ul className="course-list" style={{ listStyleType: "disc" }}>
            <li>Understand the basics of Python programming language</li>
            <li>Create simple programs and scripts</li>
            <li>Apply programming concepts to solve real-world problems</li>
          </ul>
          <p className="fw-bold course-list">
            Course Duration : 3 Months (Min. as per student’s performance){" "}
          </p>
          <p className="fw-bold course-list"> Course Fee : Rs. 4999/-</p>
          <p className="fw-bold course-list"> Registration Fee : Rs. 500/-</p>
          <div>
          <h4 className="heading">Download Full Course PDF: </h4>
          <a
            href="/PythonProgramming.pdf"
            download
            className="btn btn-primary"
            type="button"
          >
            Download
          </a>
        </div>
        </div>
    
        <div className="text-left mb-5">
          <h4 className="heading">Mastering Core Java for Professionals :</h4>
          <ul className="course-list" style={{ listStyleType: "disc" }}>
            <li>Understanding the fundamentals of Core Java programming</li>
            <li>Implementing object-oriented concepts effectively</li>
            <li>Developing applications using Core Java</li>
            <li>Troubleshooting and debugging Java code</li>
            <li>Applying best practices in Java programming</li>
          </ul>
          <p className="fw-bold course-list">
            Course Duration : 3 Months
          </p>
          <p className="fw-bold course-list">Course Fee : Rs. 5999/-</p>
          <p className="fw-bold course-list"> Registration Fee : Rs. 500/-</p>
          <div>
          <h4 className="heading">Download Full Course PDF: </h4>
          <a
            href="/CoreJava.pdf"
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
        id="programmingModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Registration Form for Programming
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body" style={{ height: "500px" }}>
              <ProgrammingForm />
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Programming;
