import React from "react";
import "./style.scss";

const EmailField = (props) => {
  return (
    <>
      <label className="email-label">{props.emailLabel}</label>
      <div className="email-field">
        <input type="text" required />
      </div>
    </>
  );
};

export default EmailField;
