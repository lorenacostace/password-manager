import React from 'react';

function CustomButton ({ enableButton, onClick, text }) {
    return (
        <button disabled={ !enableButton } onClick={ onClick } >{ text }</button>
    )
}

export default CustomButton;