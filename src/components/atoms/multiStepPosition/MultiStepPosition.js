import React from 'react';
import CustomImage from "../customImage/CustomImage";
import tick from '../../../images/tick.svg'
import { Background } from "./MultiStepPositionStyle";

function MultiStepPosition (props) {
    return (
        <Background featured={props.featured} stepCompleted={props.stepCompleted}>
            { props.text ? `${ props.text }` : <CustomImage image={ tick } header={ true }/>}
        </Background>
    )
}

export default MultiStepPosition;