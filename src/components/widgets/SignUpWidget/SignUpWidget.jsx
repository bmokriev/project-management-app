import React from "react";
import "./style.scss";
import ButtonPrimary from "../../ui/buttons/ButtonPrimary/ButtonPrimary";
import EmailAndNameField from "../../ui/inputFields/EmailAndNameField/EmailAndNamefield";
import PasswordField from "../../ui/inputFields/PasswordField/PasswordField";

const SignUpWidget = (props) => {
  return (
    <div className="sign-up-wrapper">
      <form>
        <h2 className="sign-up-wrapper__title">{props.title}</h2>
        <EmailAndNameField emailAndNameLabel="Email address" />

        <div className="sign-up-actions">
          <ButtonPrimary btnTitle="Continue" />

          <div className="divider">
            <span>or</span>
          </div>

          <ButtonPrimary btnTitle="Continue with Google" />

          <p className="sign-up-wrapper__footer">
            Already have an account? <a href="/login">Log in</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUpWidget;
