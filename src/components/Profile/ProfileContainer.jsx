import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from 'react-redux';
import {setUserProfile} from "../../redux/profilePage-reducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {
    componentDidMount() {
     let userId = this.props.match.params.userId;
     if (!userId) {
         userId=7
     }
        axios.get(`https://reqres.in/api/users/`+userId)
            .then(response => {
                this.props.setUserProfile(response.data.data);
            });
    }
    render() {
        return <div>
            <Profile {...this.props} profile={this.props.profile} />
        </div>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let withRouterUrlContainerComponent = withRouter(ProfileContainer);
export default connect (mapStateToProps, {setUserProfile})(withRouterUrlContainerComponent);
