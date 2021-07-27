import React from 'react';
import FeedbackContent from "./FeedbackContent";
import InformationContent from "./InformationContent";
import FormContent from "./FormContent";

function StepsContainer (props) {
    return (
        <div>
            <InformationContent hidden={ props.currentStep !== '1' }/>
            <FormContent hidden={ props.currentStep !== '2' }/>
            <FeedbackContent hidden={ props.currentStep !== '3' } status={ props.status } tittle={ props.tittle } description={ props.description }/>
        </div>
    )
}

export default StepsContainer;