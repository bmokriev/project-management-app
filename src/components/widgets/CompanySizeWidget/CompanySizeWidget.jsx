import React from "react";
import "./style.scss";
import RadioRectInput from "../../ui/inputFields/RadioRectInput/RadioRectInput";
import ButtonPrimary from "../../ui/buttons/ButtonPrimary/ButtonPrimary";
import ButtonGhost from "../../ui/buttons/ButtonGhost/ButtonGhost";

const CompanySizeWidget = (props) => {

    const companySizeData = [
        'Just me', '2-5', '6-10', '11-20', '21-50', '51-100', '101-200', '201-500', '500+'
    ];

    // const renderRadioInputs = () => {
    //     for(let i = 0; i < companySizeData.length; i++) {
    //         return <RadioRectInput name="company-size" value={companySizeData[i]} />
    //     }
    // }

    return(
        <div className="company-size-wrapper">
            <h2 className="company-size__title">{props.title}</h2>
            <form>
                <div className="company-size-items">
                    {companySizeData.map(item => {
                        return(
                            <RadioRectInput fieldValue={item} fieldName="company-size" fieldText={item} key={item}/>       
                        )
                    })}
                </div>
                <div className="company-size-actions">
                    <ButtonPrimary btnTitle="Next" />
                    <ButtonGhost btnTitle="Skip This" />
                </div>
            </form>
        </div>
    )
}

export default CompanySizeWidget;