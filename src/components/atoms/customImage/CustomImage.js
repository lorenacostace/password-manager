import React from 'react';
import { ImgTick } from "./CustomImageStyle";

function CustomImage (props) {
    return (
        <ImgTick src={ props.image } header={ props.header } alt="image" />
    )
}

export default CustomImage;