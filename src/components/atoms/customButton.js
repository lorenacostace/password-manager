import React from 'react';

function CustomButton ({ enableButton, nextStep, text }) {
    return (
        <button disabled={ !enableButton } onClick={ nextStep } >{ text }</button>
    )
}

export default CustomButton;