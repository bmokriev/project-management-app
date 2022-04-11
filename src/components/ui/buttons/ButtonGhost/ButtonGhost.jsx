import React from "react";
import "./style.css";

const ButtonGhost = (props) => {
    return(
        <>
            <button className="button-ghost">{props.btnTitle}</button>
        </>
    )
}

export default ButtonGhost;