import {connect} from "react-redux";
import Friends from "./Friends";
import {addFriendActionCreator} from "../../redux/sideBarPage-reducer";

let mapStateToProps = (state) => {
    return {
        friendsData: state.sideBarPage.friendsData
    }
};

const FriendsContainer = connect(mapStateToProps, {addFriendActionCreator})(Friends);

export default FriendsContainer;
