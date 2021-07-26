import React from 'react';
import CustomButton from "../atoms/CustomButton";

function Footer ({ enableCancelButton, enableNextButton, nextStep, cancelStep, textLeftButton, textRightButton, showButton }) {
    return (
        <div>
            <CustomButton
                show= { showButton }
                disabled={ !enableCancelButton }
                onClick={ cancelStep }
                text = { textLeftButton }
            />
            <CustomButton
                disabled={ !enableNextButton }
                onClick={ nextStep }
                text= { textRightButton }
            />
        </div>
    )
}

export default Footer;