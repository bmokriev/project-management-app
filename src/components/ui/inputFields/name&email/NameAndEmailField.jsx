import React from "react";
import "./style.scss";

const NameAndEmailField = (props) => {
  return (
    <>
      <label className="label-text">{props.inputLabel}</label>
      <div className="name-field">
        <input />
      </div>
    </>
  );
};

export default NameAndEmailField;
