import React from "react";
import Profile from "./Profile";
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {getJob, getUserProfile, updateJob} from "../../redux/profilePage-reducer";


class ProfileContainer extends React.Component {
    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 7
        }
        this.props.getUserProfile(userId);
        this.props.getJob(userId);
    }

    render() {
        return <div>
            <Profile {...this.props} profile={this.props.profile} job={this.props.job} updateJob={this.props.updateJob}/>
        </div>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    job: state.profilePage.job

});


export default compose(
    connect(mapStateToProps, {getUserProfile,getJob,updateJob}),
    withAuthRedirect,withRouter)
(ProfileContainer);
