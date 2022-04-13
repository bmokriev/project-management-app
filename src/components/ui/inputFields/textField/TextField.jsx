import React from "react";
import "./style.scss";

const TextField = () => {
  return (
    <>
      <div className="text-form">
        <input className="text-input" />
        <label className="label-text">
          <span className="label-content">
            What's something you are currently working on?
          </span>
        </label>
      </div>
    </>
  );
};

export default TextField;
