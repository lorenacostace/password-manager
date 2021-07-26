import React from "react";
import MultiStepPosition from "../atoms/MultiStepPosition";
import tick from '../../images/tick.svg'

function Header (props) {
    return (
        <div>
            { props.steps.map((step) =>
                step < props.currentStep ? (
                    <MultiStepPosition image={ tick }/>
                ) : (
                    <MultiStepPosition text={ step }/>
                )
            )}
        </div>
    )
}

export default Header;