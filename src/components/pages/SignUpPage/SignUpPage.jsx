import React from "react";
import "./style.scss";
import SignUpWidget from "../../widgets/SignUpWidget/SignUpWidget";
import ContainerLayout from "../../layouts/ContainerLayout/ContainerLayout";

const SignUpPage = () => {
  return (
    <ContainerLayout>
      <div className="page-content login-content">
        <SignUpWidget title="Sign up" />
      </div>
    </ContainerLayout>
  );
};

export default SignUpPage;
