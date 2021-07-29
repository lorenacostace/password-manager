import { connect } from "react-redux";
import FeedbackContent from "./FeedbackContent";

const mapStateToProps = (state) => {
    return {
        status: state.passwords.status
    }
}

const FeedbackContentContainer = connect(
    mapStateToProps,
)(FeedbackContent)

export default FeedbackContentContainer