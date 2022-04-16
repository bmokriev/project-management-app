import React from "react";
import "./style.scss";

const RadioRectInput = (props) => {
    return(
        <div className="radio-rect-wrapper">
            <input type="radio" name={props.fieldName} value={props.fieldValue} className="radio-rect__input"/>
            <span className="radio-rect__title">{props.fieldText}</span>
            <span className="radio-rect__filler"></span>
        </div>
    )
}

export default RadioRectInput;