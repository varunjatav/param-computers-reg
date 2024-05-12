import { Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { handleContact } from "../../store/contactSlice";

const ContactForm = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="text-white" style={{ marginTop: "100px" }}>
        <h2 className="text-center heading">Contact Form</h2>
        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          onSubmit={(values) => {
            dispatch(handleContact(values));

            values.name = "";
            values.email = "";
            values.message = "";
          }}
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
            <div className="form_container">
              <form action="/contact" method="post" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter Your Name"
                    onChange={handleChange}
                    value={values.name}
                    name="name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter Your Email"
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Please Enter Your Message..."
                    onChange={handleChange}
                    value={values.message}
                    name="message"
                    required
                  ></textarea>
                </div>
                <div className="mb-3 d-flex justify-content-center">
                  <input
                    className="btn btn-success"
                    type="submit"
                    value="Submit"
                  />
                </div>
              </form>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
};

export default ContactForm;
