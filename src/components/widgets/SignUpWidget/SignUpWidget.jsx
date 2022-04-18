import React from "react";
import "./style.scss";
import ButtonPrimary from "../../ui/buttons/ButtonPrimary/ButtonPrimary";
import EmailAndNameField from "../../ui/inputFields/EmailAndNameField/EmailAndNamefield";
import routePathEnum from "../../../enums/routePathEnum";
import ButtonGhost from "../../ui/buttons/ButtonGhost/ButtonGhost";
import { Link } from "react-router-dom";

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

          <ButtonGhost btnTitle="Continue with Google" />

          <p className="sign-up-wrapper__footer">
            Already have an account?{" "}
            <Link to={{ pathname: routePathEnum.LOGIN_PAGE }}>Log in</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUpWidget;
