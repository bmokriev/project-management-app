import React from "react";
import PasswordField from "../ui/inputFields/PasswordField/PasswordField";
import ConfirmPasswordField from "../ui/inputFields/ConfirmPasswordField/ConfirmPasswordField";
import EmailField from "../ui/inputFields/EmailField/Emailfield";
import NameField from "../ui/inputFields/NameField/NameField";
import TextField from "../ui/inputFields/textField/TextField";
import VerificationField from "../ui/inputFields/VerificationField/VerificationField";
const MainPage = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <PasswordField />
      <ConfirmPasswordField />
      <EmailField />
      <NameField />
      <TextField />
      <VerificationField />
    </div>
  );
};

export default MainPage;
