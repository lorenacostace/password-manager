import React from 'react';
import './StepsContainer.css'
import { Container } from "./StepsContainerStyle";

function StepsContainer (props) {

    return (
        <Container>
            { props.steps.map((step, index) => (
                <div key={index} className={ props.currentStep !== index ? 'stepHidden': '' }>
                    { step.component }
                </div>
            ))}
        </Container>
    )
}

export default StepsContainer;