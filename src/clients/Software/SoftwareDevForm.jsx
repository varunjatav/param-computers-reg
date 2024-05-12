import React from "react";
import { Formik } from "formik";
import SoftwareStyles from "./Software.module.css";
import { useDispatch } from "react-redux";
import { addClient } from "../../store/clientSlice";
import { alertSliceAction } from "../../store/alert";


const SoftwareDevForm = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          date: "",
          age: "",
          gender: "",
          address: "",
          services: "",
          serviceType: "Software Creation Service",
        }}
        onSubmit={async (values) => {
          // console.log(values);
          dispatch(addClient(values));
          dispatch(alertSliceAction.setAlert(true));
          values.name= "";
          values.email= "";
          values.date= "";
          values.age= "";
          values.gender = "";
          values.address = "";
          values.services = "";
          values.serviceType = "";
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
          <div className={`${SoftwareStyles.formContainer}`}>
            <form
              className={SoftwareStyles.form}
              action="/client"
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
                  name="services"
                  value={values.services}
                >
                  <option>Select services</option>
                  <option value="Software Development">
                    Software Development
                  </option>
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
  );
};

export default SoftwareDevForm;
