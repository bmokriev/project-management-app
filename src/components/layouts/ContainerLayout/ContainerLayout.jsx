import React from "react";
import "./style.scss";

const ContainerLayout = (props) => {
  return (
    <div className="container-layout">
      <div className="center">{props.children}</div>
    </div>
  );
};

export default ContainerLayout;
