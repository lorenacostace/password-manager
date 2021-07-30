import { connect } from "react-redux";
import PasswordManager from "./PasswordManager";
import {actions as actionsPassword} from "../redux/passwords";

const mapStateToProps = (state) => {
    return {
        passwordOne: state.passwords.passwordOne,
        passwordTwo: state.passwords.passwordTwo,
        hintPassword: state.passwords.hintPassword,
        enableButton: state.passwords.enableButton,
        status: state.passwords.status,
        feedback: state.passwords.feedback
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setEnableButton: (value) => dispatch(actionsPassword.setEnableButton(value)),
        updateStatus: (value) => dispatch(actionsPassword.setStatus(value)),
        updateFeedback: (value) => dispatch(actionsPassword.setFeedback(value))
    }
}

const PasswordManagerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PasswordManager)

export default PasswordManagerContainer