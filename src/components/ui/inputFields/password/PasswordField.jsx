import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
//import "./style.scss";

function PasswordField() {
  const [password, setPassword] = useState("");
  const [inputType, setInputType] = useState("password");

  return (
    <>
      <label htmlFor="password-input">Password</label>
      <input
        type={inputType}
        className="button-primary"
        placeholder="Write a Password"
        id="password-input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <AiOutlineEye onClick={() => setInputType("text")} />
      <AiOutlineEyeInvisible onClick={() => setInputType("password")} />
    </>
  );
}

export default PasswordField;
