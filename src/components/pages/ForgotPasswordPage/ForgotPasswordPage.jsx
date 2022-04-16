import React from "react";
import "./style.scss";
import ForgotPasswordWidget from "../../widgets/ForgotPasswordWidget/ForgotPasswordWidget";
import ContainerLayout from "../../layouts/ContainerLayout/ContainerLayout";

const ForgotPasswordPage = () => {
    return(
        <ContainerLayout>
            <div className="page-content forgot-password-content">
                <ForgotPasswordWidget title="Forgot your password?"/>
            </div>
        </ContainerLayout>
    )
}

export default ForgotPasswordPage;