import React from "react";

const Alert = ({ name }) => {
   
  return (
    <div className="alert alert-success mt-5 text-center alert" role="alert">
      Thankyou for registration for {name}  😊
      
    </div>
  );
};

export default Alert;
