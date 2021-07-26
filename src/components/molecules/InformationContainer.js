import React from "react";
import CustomImage from "../atoms/CustomImage";
import CustomText from "../atoms/CustomText";

function InformationContainer (props) {
    return (
        <div>
            <CustomImage
                image={ props.image }
            />
            <CustomText
                text={ props.text }
            />
        </div>
    )
}

export default InformationContainer;