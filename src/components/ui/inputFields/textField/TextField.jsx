import React from "react";
import "./style.scss";

const TextField = (props) => {
  return (
    <>
      <div className="text-form">
        <input className="text-input" />
        <label className="label-text">
          <span className="label-content">{props.textLabel}</span>
        </label>
      </div>
    </>
  );
};

export default TextField;
