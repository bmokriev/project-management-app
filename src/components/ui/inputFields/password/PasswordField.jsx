import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "./style.scss";

function PasswordField() {
  const [password, setPassword] = useState("");
  const [inputType, setInputType] = useState("password");

  return (
    <>
      <div className="password-field">
        <input
          type={inputType}
          placeholder="Write a Password"
          className="password-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
