import React from "react";
import "./style.scss";
import ResetPasswordWidget from "../../widgets/ResetPasswordWidget/ResetPasswordWidget";

import ContainerLayout from "../../layouts/ContainerLayout/ContainerLayout";

const ResetPasswordPage = () => {
    return(
        <ContainerLayout>
            <div className="page-content forgot-password-content">
                <ResetPasswordWidget title="Reset your password"/>
            </div>
        </ContainerLayout>
    )
}

export default ResetPasswordPage;