import React from "react";
import "./style.scss";

const ContainerLayout = (props) => {
  return (
    <div className="container-layout">
      <div className="center">
        <h1 className="title">{props.title}</h1>
        {props.children}
      </div>
    </div>
  );
};

export default ContainerLayout;
