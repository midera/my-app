const REGISTER = 'REGISTER';
// const NO_REGISTER = 'NO_REGISTER';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER: {
            return {
                ...state,
                ...action.data
            }
        }
        // case NO_REGISTER: {
        //     return {
        //         ...state,
        //
        //     }
        // }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default: {
            return state;
        }
    }
}
export const registerAc = (userId, email, login) => ({type: REGISTER, data: userId, email, login});
// export const unRegisterAc = () => ({type: NO_REGISTER});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export default authReducer;
