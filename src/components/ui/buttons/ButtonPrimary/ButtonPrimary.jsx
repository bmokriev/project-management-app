import React from "react";
import "./style.css";

const ButtonPrimary = (props) => {
    return(
        <>
            <button className="button-primary">{props.btnTitle}</button>
        </>
    )
}

export default ButtonPrimary;