import React from 'react';
import CustomButton from "../../atoms/customButton/CustomButton";
import { Container, Line } from "./FooterStyle";


function Footer ({ configButtonLeft, configButtonRight}) {
    return (
        <div>
            <Line/>
            <Container>
                <div>
                    <CustomButton
                        enableButton={ configButtonLeft.enableButton }
                        onClick={configButtonLeft.onClick }
                        text = { configButtonLeft.text }
                        feedbackButton = { configButtonLeft.feedback }
                        hiddenButton={ configButtonLeft.hiddenButton }
                    />
                </div>
                <div>
                    <CustomButton
                        enableButton={ configButtonRight.enableButton }
                        onClick={ configButtonRight.onClick }
                        text= { configButtonRight.text }
                    />
                </div>
            </Container>
        </div>

    )
}

export default Footer;