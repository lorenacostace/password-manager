import React from 'react';
import './StepsContainer.css'

function StepsContainer (props) {

    return (
        <div>
            { props.steps.map((step, index) => (
                <div className={ props.currentStep !== index ? 'stepHidden': '' }>
                    { step.component }
                </div>
            ))}
        </div>
    )
}

export default StepsContainer;