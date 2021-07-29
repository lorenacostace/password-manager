import React from 'react';
import CustomText from "../atoms/CustomText";
import CustomInput from "../atoms/CustomInput";

class FormContent extends React.Component {
    constructor(props) {
        super(props);
        this.modifiedInput = this.modifiedInput.bind(this);
    }

    modifiedInput(id, value) {
        this.props.updatePassword(id, value);
    }

    render() {
        return (
            <div>
                <CustomText text="Crea tu Password Manager"/>
                <CustomText text="En primer lugar, debes crear una contraseña diferente para sus pertenencias electrónicas. No podrás recuperar tu contraseña, así que recuérdela bien"/>
                <div>
                    <div>
                        <CustomText text="Crea tu Contraseña Maestra"/>
                        <CustomInput
                            type="password"
                            placeholder="Introduce la contraseña"
                            handler={ this.modifiedInput }
                            id="passwordOne"
                        />
                        <CustomText text="Repite tu Contraseña Maestra"/>
                        <CustomInput
                            type="password"
                            placeholder="Repite la contraseña"
                            handler={ this.modifiedInput }
                            id="passwordTwo"
                        />
                    </div>
                </div>
                <CustomText text="También puedes crear una pista que te ayude a recordar tu contraseña maestra"/>
                <CustomText text="Crea tu pista para recordar tu contraseña (opcional)"/>
                <CustomInput
                    type=""
                    placeholder="Introduce tu pista"
                    handler={ this.modifiedInput }
                    id="hintPassword"
                />
            </div>
        )
    }

}

export default FormContent;