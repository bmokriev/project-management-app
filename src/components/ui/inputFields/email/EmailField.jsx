import React from "react";
import "./style.scss";

const EmailField = (props) => {
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

export default EmailField;
