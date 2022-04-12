import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "./style.scss";

function ConfirmField() {
  const [password, setPassword] = useState("");
  const [inputType, setInputType] = useState("password");

  return (
    <>
      <form>
        <input
          type={inputType}
          placeholder="Rewrite the Password"
          id="password-input"
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
      </form>
    </>
  );
}

export default ConfirmField;
