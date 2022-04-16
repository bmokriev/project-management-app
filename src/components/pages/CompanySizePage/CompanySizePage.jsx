import React from "react";
import "./style.scss";
import CompanySizeWidget from "../../widgets/CompanySizeWidget/CompanySizeWidget";
import ContainerLayout from "../../layouts/ContainerLayout/ContainerLayout";

const CompanySizePage = () => {
    return (
        <ContainerLayout>
            <div className="page-content company-size-content">
                <CompanySizeWidget title="How many people will you be working with?" />
            </div>
        </ContainerLayout>
    )
}

export default CompanySizePage;