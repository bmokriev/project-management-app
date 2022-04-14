import React from "react";
import "./style.scss";

const VerificationField = (props) => {
  return (
    <>
      <div className="verification-field">
        <input type="text" maxLength="1" required />
        <input type="text" maxLength="1" required />
        <input type="text" maxLength="1" required />
        <input type="text" maxLength="1" required />
      </div>
    </>
  );
};

export default VerificationField;
