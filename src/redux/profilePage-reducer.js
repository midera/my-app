import {profileAPI, usersAPI} from "../api/api";


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_JOB = 'SET-JOB';


let initialState = {
    postData: [
        {id: 1, message: 'Hi!!!!!', likeCount: 10},
        {id: 2, message: 'shoopinggoo', likeCount: 8},
        {id: 3, message: 'Spring & summer', likeCount: 70},
        {id: 4, message: 'dog is cute', likeCount: 180},
        {id: 5, message: 'Rain ?', likeCount: 18}],
    newPostsText: '',
    profile: null,
    job:' '

}
const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostsText,
                likeCount: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostsText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostsText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        case SET_JOB:{
            return {
                ...state,job:action.job
            }
        }
        default: {
            return state;

        }
    }

}
export const addPostActionCreator = () => ({type: ADD_POST});
export const setJob = () => ({type: SET_JOB});
export const updateNewPostActionCreator = (sendMessage) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: sendMessage});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
};
export const getJob=(userId)=>(dispatch) =>{

    profileAPI.getJob(userId).then(response=>{
        dispatch(setJob(response.data))
    })
}
export const updateJob=(status)=>(dispatch) =>{

    profileAPI.updateJob(status).then(response=>{
        dispatch(setJob(response.data))
    })
}

export default profilePageReducer
