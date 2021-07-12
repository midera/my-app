const ADD_FRIEND = 'ADD_FRIEND';
const UPDATE_FRIEND = 'UPDATE_FRIEND';

let initialState = {
    friendsData:
        [
            {id: 1, name: 'Yaroslav'},
            {id: 2, name: 'Valentina'},
            {id: 3, name: 'Lina'},
            {id: 4, name: 'Oleg'},
            {id: 5, name: 'Artyom'}],
            addFriend: '+Friends'
}

const sideBarPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_FRIEND: {
            return {
                ...state,
                friendsData: [...state.friendsData]
            }
        }
        case UPDATE_FRIEND: {
            return {
                ...state,
                friendsData: action.addFriend
            }
        }
        default: {
            return state;
        }
    }
}

export const addFriendActionCreator = () => ({type: ADD_FRIEND});
// export const updateNewFriendActionCreator = (friendAdd) =>
//     ({type: UPDATE_FRIEND, friendAdd: friendAdd});

export default sideBarPageReducer;
