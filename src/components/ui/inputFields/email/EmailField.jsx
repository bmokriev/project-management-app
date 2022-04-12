import React from "react";
import "./style.scss";

const EmailField = (props) => {
  return (
    <>
      <div className="email-field">
        <input className="email-input" placeholder="Write an Email Address" />
      </div>
    </>
  );
};

export default EmailField;
