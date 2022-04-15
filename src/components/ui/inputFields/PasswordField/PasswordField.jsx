import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "./style.scss";

function PasswordField(props) {
  const [password, setPassword] = useState("");
  const [inputType, setInputType] = useState("password");

  return (
    <>
      <label className="password-label">{props.InputLabel}</label>
      <div className="password-field">
        <input
          type={inputType}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {inputType === "password" ? (
          <AiOutlineEye className="icon" onClick={() => setInputType("text")} />
        ) : (
          <AiOutlineEyeInvisible
            className="icon"
            onClick={() => setInputType("password")}
          />
        )}
      </div>
    </>
  );
}

export default PasswordField;
