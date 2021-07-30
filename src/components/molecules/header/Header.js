import React from 'react';
import MultiStepPosition from "../../atoms/multiStepPosition/MultiStepPosition";
import { Line, StepPosition } from "./HeaderStyle";

function Header(props) {
    return (
        <StepPosition>
            {props.steps.map((key, index) => {
                const isCheck = index < props.currentStep;
                const isFirstStep = index === 0;
                const isCurrentStep = index === props.currentStep
                return (
                    <StepPosition key={ index }>
                        <Line isHidden={ isFirstStep } featured={ isCurrentStep || isCheck }/>
                        <div >
                            <MultiStepPosition
                                featured={ index === props.currentStep }
                                text={ isCheck ? '' : index + 1 }
                                stepCompleted={ isCheck }
                            />
                        </div>
                    </StepPosition>

                )
            })}
        </StepPosition>
    )
}

export default Header;