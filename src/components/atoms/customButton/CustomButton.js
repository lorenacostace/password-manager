import React from 'react';
import { Button } from "./CustomButtonStyle";

function CustomButton (props) {
    return (
        <Button disabled={ !props.enableButton } onClick={ props.onClick } feedbackButton={props.feedback} hiddenButton={props.hiddenButton}>{ props.text }</Button>
    )
}

export default CustomButton;