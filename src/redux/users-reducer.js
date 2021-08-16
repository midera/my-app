import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_USER_PAGE = 'SET-CURRENT-USER_PAGE';
const SET_TOTAL_USER_COUNT = 'SET-TOTAL-USER-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    folLowInProgress: []
};
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_CURRENT_USER_PAGE: {
            return {
                ...state, currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USER_COUNT: {
            return {
                ...state, totalUsersCount: action.count
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                folLowInProgress: [...state.folLowInProgress]
            }
        }
        default:
            return state;
    }
};

export const folLowSuccess = (id) => ({type: FOLLOW, id});
export const unfollowSuccess = (id) => ({type: UNFOLLOW, id});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_USER_PAGE, currentPage});
export const setUsersTotalCount = (totalUsersCount) => ({type: SET_TOTAL_USER_COUNT, count: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFolLowInProgress = (isFetching) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching});

export const getUsers =(currentPage,pageSize)=> {
   return (dispatch) => {

        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage,pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.data));
            dispatch(setUsersTotalCount(data.total));
        });
    }
};
export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFolLowInProgress(true,userId));
        usersAPI.follow(userId)
            .then(response =>{
                if (response.support.text ===0){
                    dispatch(folLowSuccess(userId));
                }
                dispatch(toggleFolLowInProgress(false,userId));
            })
    }
};
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFolLowInProgress(true,userId));
        usersAPI.follow(userId)
            .then(response =>{
                if (response.support.text ===0){
                    dispatch(unfollowSuccess(userId));
                }
                dispatch(toggleFolLowInProgress(false,userId));
            })
    }
}
export default usersReducer;
