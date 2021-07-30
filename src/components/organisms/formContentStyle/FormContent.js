import React from 'react';
import CustomInput from "../../atoms/customInput/CustomInput";
import {
    InputGroup,
    Padding,
    Subtitle,
    Title,
    Line
} from "./FormContentStyle";

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
                <Title>Crea tu Password Manager</Title>
                <Line/>
                <div>En primer lugar, debes crear una contraseña diferente para sus pertenencias electrónicas. No podrás recuperar tu contraseña, así que recuérdela bien</div>
                <InputGroup>
                    <Padding>
                        <Subtitle>Crea tu Contraseña Maestra</Subtitle>
                        <CustomInput
                            type="password"
                            placeholder="Introduce la contraseña"
                            handler={ this.modifiedInput }
                            value={ this.props.passwordOne }
                            id="passwordOne"
                        />
                    </Padding>
                    <div>
                        <Subtitle>Repite tu Contraseña Maestra</Subtitle>
                        <CustomInput
                            type="password"
                            placeholder="Repite la contraseña"
                            handler={ this.modifiedInput }
                            value={ this.props.passwordTwo }
                            id="passwordTwo"
                        />
                    </div>
                </InputGroup>
                <div>También puedes crear una pista que te ayude a recordar tu contraseña maestra</div>
                <Subtitle>Crea tu pista para recordar tu contraseña (opcional)</Subtitle>
                <CustomInput
                    type=""
                    placeholder="Introduce tu pista"
                    handler={ this.modifiedInput }
                    value={ this.props.hintPassword }
                    id="hintPassword"
                />
            </div>
        )
    }

}

export default FormContent;