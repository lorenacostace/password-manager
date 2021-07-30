import React from 'react';
import InformationContainer from "../../molecules/informationContainer/InformationContainer";
import mechanicalHead from '../../../images/group.svg'
import safeBox from '../../../images/group-3.svg'
import { Information, InformationWidth, Line, Margin, Subtitle, Title } from "./InformationContentStyle";

function InformationContent () {
    return (
        <Margin>
            <Title>Crea tu Password Manager</Title>
            <Line/>
            <Information>
                <InformationWidth>
                    <InformationContainer
                        text="Guarda aquí todas tus contraseñas, datos o cualquier información, olvida las notas de papel y las aplicaciones no protegidas"
                        image={ mechanicalHead }
                    />
                </InformationWidth>
                <InformationWidth>
                    <InformationContainer
                        text="Crea tu clave maestra, solo tú podrás acceder a tus secretos con ella"
                        image={ safeBox }
                    />
                </InformationWidth>
            </Information>
            <Subtitle>Cómo funciona</Subtitle>
            <Margin>En primer lugar, debes crear una contraseña diferente para sus pertenencias electrónicas. No podrás recuperar tu contraseña, así que recuérdela bien</Margin>
            <Subtitle>Qué datos puedes guardar"</Subtitle>
            <Margin>Por ejemplo, el número de tu tarjeta, el PIN y el PUK de tu teléfono móvil, el número de serie de alguno de tus dispositivos o cualquier información que necesites tener en lugar seguro</Margin>
        </Margin>
    )
}

export default InformationContent;