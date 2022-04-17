import React from "react";
import "./style.scss";
import LoginWidget from "../../widgets/LoginWidget/LoginWidget";
import ContainerLayout from "../../layouts/ContainerLayout/ContainerLayout";

const LoginPage = () => {
  return (
    <ContainerLayout>
      <div className="page-content login-content">
        <LoginWidget title="Welcome back" />
      </div>
    </ContainerLayout>
  );
};

export default LoginPage;
