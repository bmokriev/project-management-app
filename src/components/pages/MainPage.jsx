import React from "react";
import ConfirmField from "../ui/inputFields/confirmPassword/ConfirmField";
import EmailField from "../ui/inputFields/email/EmailField";
import NameField from "../ui/inputFields/name/NameField";
import PasswordField from "../ui/inputFields/password/PasswordField";
import TextField from "../ui/inputFields/textField/TextField";
import VerificationField from "../ui/inputFields/verificationField/VerificationField";
const MainPage = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <EmailField />
      <NameField />
      <PasswordField />
      <ConfirmField />
      <TextField />
      <VerificationField />
    </div>
  );
};

export default MainPage;
