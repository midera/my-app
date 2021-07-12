const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';


let initialState = {
    postData: [
        {id: 1, message: 'Hi!!!!!', likeCount: 10},
        {id: 2, message: 'shoopinggoo', likeCount: 8},
        {id: 3, message: 'Spring & summer', likeCount: 70},
        {id: 4, message: 'dog is cute', likeCount: 180},
        {id: 5, message: 'Rain ?', likeCount: 18}],
    newPostsText: '',
    profile: null,

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
                newPostsText: action.newPostsText
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        default: {
            return state;

        }
    }

}
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostActionCreator = (sendMessage) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: sendMessage});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});



export default profilePageReducer
