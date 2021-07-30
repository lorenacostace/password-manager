import { connect } from "react-redux";
import FormContent from "./FormContent";
import { actions as actionsPassword } from '../../../redux/passwords'

const mapStateToProps = (state) => {
    return {
        passwords: state.passwords,
        passwordOne: state.passwords.passwordOne,
        passwordTwo: state.passwords.passwordTwo,
        hintPassword: state.passwords.hintPassword,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updatePassword: (id, value) => dispatch(actionsPassword.setPassword(id, value)),
    }
}

const FormContentContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FormContent)

export default FormContentContainer