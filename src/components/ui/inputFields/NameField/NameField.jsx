import React from "react";
import "./style.scss";

const NameField = (props) => {
  return (
    <>
      <label className="name-label">{props.nameLabel}</label>
      <div className="name-field">
        <input type="text" required />
      </div>
    </>
  );
};

export default NameField;
