import React from 'react';
import { ImgTick } from "./CustomImageStyle";

function CustomImage (props) {
    return (
        <div>
            <ImgTick src={ props.image } header={ props.header } alt="image" />
        </div>
    )
}

export default CustomImage;