import React from "react";
import "./style.scss";
import ContainerLayout from "../../layouts/ContainerLayout/ContainerLayout";
import ButtonPrimary from "../../ui/buttons/ButtonPrimary/ButtonPrimary";

const LoginPage = () => {
  return (
    <ContainerLayout>
      <div className="login-page">
        <h1 className="title">Welcome back</h1>
        <ButtonPrimary btnTitle="Log In" />

        <div class="divider">
          <span>or</span>
        </div>

        <ButtonPrimary btnTitle="Continue with Google" />
        <p className="footer">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </ContainerLayout>
  );
};

export default LoginPage;
