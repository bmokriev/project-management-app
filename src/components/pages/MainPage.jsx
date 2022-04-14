import React from "react";
import NameAndEmailField from "../ui/inputFields/name&email/NameAndEmailField";
import PasswordField from "../ui/inputFields/password/PasswordField";
import VerificationField from "../ui/inputFields/verificationField/VerificationField";

const MainPage = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <VerificationField />
      <NameAndEmailField />
      <PasswordField />
    </div>
  );
};

export default MainPage;
