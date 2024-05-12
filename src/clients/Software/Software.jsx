import React from "react";
import SoftwareDevForm from "./SoftwareDevForm";
import Alert from "../../components/Alert/alert";
import { useDispatch, useSelector } from "react-redux";
import { alertSliceAction } from "../../store/alert";

const Software = () => {
  const alert = useSelector(state => state.alert);
  const dispatch = useDispatch();
  setTimeout(() =>{
    dispatch(alertSliceAction.setAlert(false));
  },4000)
  return (
    <>
      <div className="container text-white mt-5">
        <h2 className="heading text-center">Software Developement Services</h2>
        <div className="container mt-5 text-center">
          <p className="about-para">
            "Welcome to the realm of endless innovation and technological
            prowess! At Param Computers, we're dedicated to crafting
            cutting-edge software solutions tailored to your needs. Whether
            you're a startup aiming to disrupt the market or an established
            enterprise seeking to streamline operations, our team of experienced
            developers is here to turn your vision into reality. From
            conceptualization to deployment and beyond, we're committed to
            delivering high-quality, scalable software that drives your business
            forward. With a focus on agile methodologies and the latest
            technologies, we ensure that your software is not just functional
            but also future-proof. Partner with us at Param Computers and let's
            embark on a journey of digital transformation together. Your success
            is our mission. Let's build the future, one line of code at a time."
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-success"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#Software"
          >
            Register
          </button>
        </div>
      </div>
      <div
        className="modal fade"
        id="Software"
        tabIndex="-1"
        aria-labelledby="SoftwareLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="SoftwareLabel">
                Registration Form for creating a Software
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body" style={{ height: "500px" }}>
              <SoftwareDevForm/>
            </div>
          </div>
        </div>
      </div>
      {alert && <Alert name={"Software Creation"} />}
    </>
  );
};

export default Software;
