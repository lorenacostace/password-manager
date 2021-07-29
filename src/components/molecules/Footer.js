import React from 'react';
import CustomButton from "../atoms/CustomButton";

function Footer ({ configButtonRight, configButtonLeft}) {
    return (
        <div>
            <CustomButton
                showButton= { configButtonLeft.showButton }
                enableButton={ configButtonLeft.enableButton }
                onClick={ configButtonLeft.onClick }
                text = { configButtonLeft.text }
            />
            <CustomButton
                showButton={ configButtonRight.showButton}
                enableButton={ configButtonRight.enableButton }
                onClick={ configButtonRight.onClick }
                text= { configButtonRight.text }
            />
        </div>
    )
}

export default Footer;