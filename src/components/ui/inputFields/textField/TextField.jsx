import React from "react";
import "./style.scss";

const TextField = (props) => {
  return (
    <>
      <div className="text-form">
        <input className="text-input" />
        <label className="text-label">
          <span className="label-content">{props.textLabel}</span>
        </label>
      </div>
    </>
  );
};

export default TextField;
