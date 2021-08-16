import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsPage-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    };
}

export default compose(
    connect(mapStateToProps, {
        sendMessageCreator,
        updateNewMessageBodyCreator
    }),withAuthRedirect,withRouter)(Dialogs);
