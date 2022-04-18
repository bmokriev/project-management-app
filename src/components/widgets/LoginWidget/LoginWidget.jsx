import React from "react";
import "./style.scss";
import ButtonPrimary from "../../ui/buttons/ButtonPrimary/ButtonPrimary";
import EmailAndNameField from "../../ui/inputFields/EmailAndNameField/EmailAndNamefield";
import PasswordField from "../../ui/inputFields/PasswordField/PasswordField";
import routePathEnum from "../../../enums/routePathEnum";
import ButtonGhost from "../../ui/buttons/ButtonGhost/ButtonGhost";
import { Link } from "react-router-dom";

const LoginWidget = (props) => {
  return (
    <div className="login-wrapper">
      <form>
        <h2 className="login-wrapper__title">{props.title}</h2>
        <EmailAndNameField emailAndNameLabel="Email address" />
        <PasswordField InputLabel="Password" />

        <div className="login-actions">
          <ButtonPrimary btnTitle="Log In" />

          <div className="divider">
            <span>or</span>
          </div>

          <ButtonGhost btnTitle="Continue with Google" />

          <p className="login-wrapper__footer">
            Don't have an account?{" "}
            <Link to={{ pathname: routePathEnum.SIGN_UP_PAGE }}>Sign up</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginWidget;
