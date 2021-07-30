import React from "react";
import CustomImage from "../../atoms/customImage/CustomImage";
import CustomText from "../../atoms/CustomText";
import { Container } from "./InformationContainerStyle";

function InformationContainer (props) {
    return (
        <Container>
            <div>
                <CustomImage image={ props.image } />
            </div>
            <div>
                <CustomText text={ props.text } />
            </div>
        </Container>
    )
}

export default InformationContainer;