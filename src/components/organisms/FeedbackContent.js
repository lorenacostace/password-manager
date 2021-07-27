import React from 'react';
import CustomText from "../atoms/CustomText";
import CustomImage from "../atoms/CustomImage";
import checkOK from '../../images/checkOK.png'
import warningError from '../../images/warning.png'

function FeedbackContent (props) {
    return (
        <div>
            <div>
                { props.status === "OK" ? <CustomImage image={ checkOK }/> : <CustomImage image={ warningError }/>}
            </div>
            <div>
                <CustomText text={ props.tittle }/>
                <CustomText text={ props.description }/>
            </div>
        </div>
    )
}

export default FeedbackContent;