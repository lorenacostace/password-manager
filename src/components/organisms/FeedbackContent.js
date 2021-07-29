import React from 'react';
import CustomText from "../atoms/CustomText";
import CustomImage from "../atoms/CustomImage";
import checkOK from '../../images/checkOK.png'
import warningError from '../../images/warning.png'

function FeedbackContent (props){
    const title = () => {
        if(props.status === 'OK'){
            return "Tu Password Manager ya está creado"
        }
        else if(props.status === 'KO'){
            return "Ha habido un error"
        }
    }

    const description = () => {
        if(props.status === 'OK'){
            return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh"
        }
        else if(props.status === 'KO'){
            return "No hemos podido modificar tu Contraseña Maestra. Inténtalo más tarde"
        }
    }

    return (
        <div>
            <div>
                { props.status === 'OK' ? <CustomImage image={ checkOK }/> : <CustomImage image={ warningError }/>}
            </div>
            <div>
                <CustomText
                    text={ title }
                />
                <CustomText text={ description }/>
            </div>
        </div>
    )
}

export default FeedbackContent;