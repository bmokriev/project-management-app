import React from "react";
import "./style.scss";
import PasswordField from "../../ui/inputFields/PasswordField/PasswordField";
import ButtonPrimary from "../../ui/buttons/ButtonPrimary/ButtonPrimary";
import ButtonGhost from "../../ui/buttons/ButtonGhost/ButtonGhost";

const ResetPasswordWidget = (props) => {
    return(
        <div className="reset-password-wrapper">
            <form>
                <h2 className="reset-password__title">{props.title}</h2>
                <PasswordField InputLabel="New password"/>
                <PasswordField InputLabel="Confirm new password"/>
                <div className="reset-password-actions">
                    <div className="reset-password__action proceed__action">
                        <ButtonPrimary btnTitle="Continue"/>
                    </div>
                    <div className="reset-password__action regress__action">
                        <ButtonGhost btnTitle="Back to sign in" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ResetPasswordWidget;