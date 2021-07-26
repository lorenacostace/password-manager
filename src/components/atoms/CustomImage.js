import React from 'react';

function CustomImage (props) {
    return (
        <div>
            <img src={ props.image } alt="image" />
        </div>
    )
}

export default CustomImage;