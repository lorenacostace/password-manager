import React from 'react';
import MultiStepPosition from "../atoms/MultiStepPosition";

function Header(props) {
    return (
        <div>
            <div>
                {props.steps.map((key, index) => {
                    const isCheck = index < props.currentStep;
                    return (
                        <div key={index}>
                            <div key={index}><MultiStepPosition featured={index === props.currentStep} text={isCheck ? '' : index + 1}/></div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Header;