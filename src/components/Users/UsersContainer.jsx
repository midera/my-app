import {connect} from 'react-redux';
import React from 'react';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {
    follow, getUsers, setCurrentPage,
    toggleFolLowInProgress,
    unfollow
} from "../../redux/users-reducer";
import {compose} from "redux";


class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChange={this.onPageChange}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   folLowInProgress={this.props.folLowInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        folLowInProgress: state.usersPage.folLowInProgress
    }
};

export default compose(connect(mapStateToProps, {
    follow, unfollow, setCurrentPage, toggleFolLowInProgress, getUsers
}))(UsersAPIComponent);
