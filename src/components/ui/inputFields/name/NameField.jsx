import React from "react";
import "./style.scss";

const NameField = (props) => {
  return (
    <>
      <div className="name-field">
        <input className="name-input" placeholder="Write a Name" />
      </div>
    </>
  );
};

export default NameField;
