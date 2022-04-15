import React, { useState } from "react";
import "./style.scss";

const VerificationField = (props) => {
  const [otp, setOtp] = useState(new Array(4).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //focus next
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  return (
    <>
      <div className="verification-field">
        {otp.map((data, index) => {
          return (
            <input
              type="text"
              maxLength="1"
              required
              key={index}
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onFocus={(e) => e.target.select()}
            />
          );
        })}
      </div>
    </>
  );
};

export default VerificationField;
