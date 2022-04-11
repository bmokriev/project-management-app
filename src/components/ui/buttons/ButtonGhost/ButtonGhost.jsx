import React from "react";
import "./style.scss";

const ButtonGhost = (props) => {
    return(
        <>
            <button className="button-ghost">{props.btnTitle}</button>
        </>
    )
}

export default ButtonGhost;