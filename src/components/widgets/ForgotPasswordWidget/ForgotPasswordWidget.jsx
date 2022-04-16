import React from "react";
import "./style.scss";
import EmailAndNameField from "../../ui/inputFields/EmailAndNameField/EmailAndNamefield";
import ButtonGhost from "../../ui/buttons/ButtonGhost/ButtonGhost";
import ButtonPrimary from "../../ui/buttons/ButtonPrimary/ButtonPrimary";

const ForgotPasswordWidget = (props) => {
    return(
        <div className="forgot-password-wrapper">
            <form>
                <h2 className="forgot-password__title">{props.title}</h2>
                <EmailAndNameField emailAndNameLabel="Email address"/>
                <div className="forgot-password-actions">
                    <div className="forgot-password__action proceed__action">
                        <ButtonPrimary btnTitle="Continue"/>
                    </div>
                    <div className="forgot-password__action regress__action">
                        <ButtonGhost btnTitle="Back to sign in" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ForgotPasswordWidget;