import React from 'react';
import InformationContainer from "../../molecules/informationContainer/InformationContainer";
import mechanicalHead from '../../../images/group.svg'
import safeBox from '../../../images/group-3.svg'
import {
    Information,
    InformationPositionLeft,
    Line,
    Subtitle,
    Title,
    InformationPositionRight
} from "./InformationContentStyle";

function InformationContent () {
    return (
        <div>
            <Title>Crea tu Password Manager</Title>
            <Line/>
            <Information>
                <InformationPositionLeft>
                    <InformationContainer
                        text="Guarda aquí todas tus contraseñas, datos o cualquier información, olvida las notas de papel y las aplicaciones no protegidas."
                        image={ mechanicalHead }
                    />
                </InformationPositionLeft>
                <InformationPositionRight>
                    <InformationContainer
                        text="Crea tu clave maestra, solo tú podrás acceder a tus secretos con ella."
                        image={ safeBox }
                    />
                </InformationPositionRight>
            </Information>
            <Subtitle>Cómo funciona</Subtitle>
            <div>En primer lugar, debes crear una contraseña diferente para sus pertenencias electrónicas. No podrás recuperar tu contraseña, así que recuérdela bien</div>
            <Subtitle>Qué datos puedes guardar"</Subtitle>
            <div>Por ejemplo, el número de tu tarjeta, el PIN y el PUK de tu teléfono móvil, el número de serie de alguno de tus dispositivos o cualquier información que necesites tener en lugar seguro</div>
        </div>
    )
}

export default InformationContent;