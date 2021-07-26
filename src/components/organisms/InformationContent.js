import React from 'react';
import CustomText from "../atoms/CustomText";
import InformationContainer from "../molecules/InformationContainer";
import mechanicalHead from '../../images/group.svg'
import safeBox from '../../images/group-3.svg'


function InformationContent (props) {
    return (
        <div>
            <CustomText text="Crea tu Password Manager"/>
            <div>
                <InformationContainer
                    text="Guarda aquí todas tus contraseñas, datos o cualquier información, olvida las notas de papel y las aplicaciones no protegidas"
                    image={ mechanicalHead }
                />
                <InformationContainer
                    text="Crea tu clave maestra, solo tú podrás acceder a tus secretos con ella"
                    image={ safeBox }
                />
            </div>
            <CustomText text="Cómo funciona"/>
            <CustomText text="En primer lugar, debes crear una contraseña diferente para sus pertenencias electrónicas. No podrás recuperar tu contraseña, así que recuérdela bien"/>
            <CustomText text="Qué datos puedes guardar"/>
            <CustomText text="Por ejemplo, el número de tu tarjeta, el PIN y el PUK de tu teléfono móvil, el número de serie de alguno de tus dispositivos o cualquier información que necesites tener en lugar seguro"/>
        </div>
    )
}

export default InformationContent;