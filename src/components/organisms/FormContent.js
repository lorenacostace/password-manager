import React from 'react';
import CustomText from "../atoms/CustomText";
import CustomInput from "../atoms/CustomInput";

function FormContent (props) {
    return (
        <div>
            <CustomText text="Crea tu Password Manager"/>
            <CustomText text="En primer lugar, debes crear una contraseña diferente para sus pertenencias electrónicas. No podrás recuperar tu contraseña, así que recuérdela bien"/>
            <div>
                <div>
                    <CustomText text="Crea tu Contraseña Maestra"/>
                    <CustomInput
                        type="password"
                        minLength="8"
                        maxLength="24"
                        placeholder="Introduce la contraseña"
                    />
                    <CustomText text="Repite tu Contraseña Maestra"/>
                    <CustomInput
                        type="password"
                        minLength="8"
                        maxLength="24"
                        placeholder="Repite la contraseña"
                    />
                </div>
            </div>
            <CustomText text="También puedes crear una pista que te ayude a recordar tu contraseña maestra"/>
            <CustomText text="Crea tu pista para recordar tu contraseña (opcional)"/>
            <CustomInput
                type=""
                minLength=""
                maxLength="255"
                placeholder="Introduce tu pista"
            />
        </div>
    )
}

export default FormContent;