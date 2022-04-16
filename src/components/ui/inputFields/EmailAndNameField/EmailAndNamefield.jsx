import React from "react";
import "./style.scss";

const EmailAndNameField = (props) => {
  return (
    <>
      <label className="email-name-label">{props.emailAndNameLabel}</label>
      <div className="email-name-field">
        <input type="text" required className={props.emailAndNameInput} />
      </div>
    </>
  );
};

export default EmailAndNameField;
