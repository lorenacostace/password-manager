import React from "react";
import {Input} from "./CustomInputStyle";

class CustomInput extends React.Component {
    constructor(props) {
        super(props);
        this.passwordChange = this.passwordChange.bind(this);
    }

    passwordChange(event) {
        let value = "";
        if (event.target.value.length >= 1) {
            value = event.target.value;
        }
        this.props.handler(this.props.id, value)
    }

    render() {
        return (
            <Input
                onChange={this.passwordChange}
                type={this.props.type}
                maxLength={this.props.maxLength}
                minLength={this.props.minLength}
                placeholder={this.props.placeholder}
                value={this.props.value}
            />
        )
    }
}

export default CustomInput;