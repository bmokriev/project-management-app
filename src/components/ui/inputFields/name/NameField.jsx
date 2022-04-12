import React from "react";
import "./style.scss";

const NameField = (props) => {
  return (
    <>
      <form>
        <input
          className="button-primary"
          placeholder="Write an Email Address"
        />
      </form>
    </>
  );
};

export default NameField;
