import React from "react";

class CustomInput extends React.Component {
    render() {
        return(
            <input type={ this.props.type } maxLength={ this.props.maxLength } minLength={ this.props.minLength } placeholder= { this.props.placeholder }/>
        )
    }
}

export default CustomInput;