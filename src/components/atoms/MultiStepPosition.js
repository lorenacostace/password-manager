import React from 'react';
import CustomImage from "./CustomImage";
import tick from '../../images/tick.svg'

function MultiStepPosition (props) {
    return (
        <div>
            { props.text ? `${ props.text }` : <CustomImage image={ tick }/>}
        </div>
    )
}

export default MultiStepPosition;