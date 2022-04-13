import React from "react";
import "./style.scss";

const VerificationField = () => {
  return (
    <>
      <div className="verification-field">
        <input type="text" maxLength="1" />
        <input type="text" maxLength="1" />
        <input type="text" maxLength="1" />
        <input type="text" maxLength="1" />
      </div>
    </>
  );
};

export default VerificationField;