import React from 'react';
import CustomButton from "../../atoms/CustomButton";
//import '../footer.css'
import {ButtonHidden, Container, Line} from "./FooterStyle";


function Footer ({ configButtonLeft, configButtonRight}) {
    return (
        <div>
            <Line/>
            <Container>
                {/*<div className={ configButtonLeft.hiddenButton ? 'buttonHidden': ''}>*/}

                <ButtonHidden>
                    <CustomButton
                        enableButton={ configButtonLeft.enableButton }
                        onClick={configButtonLeft.onClick }
                        text = { configButtonLeft.text }
                    />
                </ButtonHidden>
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