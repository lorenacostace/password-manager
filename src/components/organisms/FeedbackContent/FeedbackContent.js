import React from 'react';
import CustomImage from "../../atoms/customImage/CustomImage";
import checkOK from '../../../images/checkOK.png'
import warningError from '../../../images/warning.png'
import {
    ContainerPosition,
    ImagePositionSize,
    PaddingLeft,
    Title
} from "./FeedbackContentStyle";

function FeedbackContent(props) {
    const statusOK = props.status === 'OK';
    const title = statusOK ? "Tu Password Manager ya está creado" : "Ha habido un error";
    const description = statusOK ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh" : "No hemos podido modificar tu Contraseña Maestra. Inténtalo más tarde";
    const customImage = statusOK ? <CustomImage image={ checkOK }/> : <CustomImage image={ warningError }/>
    return (
        <div>
            {
                props.status !== 'PENDING' && (
                    <ContainerPosition>
                        <ImagePositionSize>
                            { customImage }
                        </ImagePositionSize>
                        <div>
                            <Title>
                                { title }
                            </Title>
                            <PaddingLeft>
                                { description }
                            </PaddingLeft>
                        </div>
                    </ContainerPosition>
                )
            }
        </div>
    )
}

export default FeedbackContent;