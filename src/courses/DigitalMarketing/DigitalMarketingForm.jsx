import React from "react";
import { Formik } from "formik";
import DigitalMarketingStyles from "./DigitalMarketing.module.css";
import {addStudent} from '../../store/studentsSlice';
import { alertSliceAction } from "../../store/alert";
import { useDispatch } from "react-redux";

const DigitalMarketingForm = () => {
  const dispatch = useDispatch(); 
  return(
    <div>
    
    <Formik
      initialValues={{
        name: "",
        email: "",
        date: "",
        age: "",
        gender: "",
        address: "",
        courses: "",
        courseType: "Digital Marketing Course",
      }}
      
      onSubmit={async (values) => {
        // console.log(values);
        dispatch(addStudent(values));
        dispatch(alertSliceAction.setAlert(true));
        values.name= "";
        values.email= "";
        values.date= "";
        values.age= "";
        values.gender = "";
        values.address = "";
        values.courses = "";
        values.courseType = "";
      }}
      // let name, value;
      
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <div className={`${DigitalMarketingStyles.formContainer}`}>
        <form
          className={DigitalMarketingStyles.form}
          action="/student"
          onSubmit={handleSubmit}
        >
          <div>
            <input
              className="form-control py-1"
              required
              type="text"
              onChange={handleChange}
              value={values.name}
              name="name"
              placeholder="Enter Your Name"
            />
          </div>
          <div>
            <input
              className="form-control py-1"
              required
              type="email"
              onChange={handleChange}
              value={values.email}
              name="email"
              placeholder="Enter Your Email"
            />
          </div>
          <div>
            <input
              className="form-control py-1"
              required
              type="date"
              onChange={handleChange}
              value={values.date}
              name="date"
              placeholder="Enter Your DOB"
            />
          </div>
          <div>
            <input
              className="form-control py-1"
              required
              type="text"
              onChange={handleChange}
              value={values.age}
              name="age"
              placeholder="Enter Your Age"
            />
          </div>
          <div>
            <select
              className="form-control py-1"
              required
              onChange={handleChange}
              name="gender"
              id=""
              value={values.gender}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <input
              className="form-control py-2"
              required
              type="text"
              name="address"
              onChange={handleChange}
              value={values.address}
              placeholder="Enter Your Address"
            />
          </div>
          <div>
            <select
              className="form-control py-2"
              required
              onChange={handleChange}
              name="courses"
              value={values.courses}
            >
              <option>Select courses</option>
              <option value="Digital Marketing">Digital Marketing</option>
             
            </select>
          </div>
  
          <div>
            <input
              className="btn btn-success"
              type="submit"
              value="Submit"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
        </form>
      </div>
      )}
    </Formik>
  </div>
  )
 
};

export default DigitalMarketingForm;
