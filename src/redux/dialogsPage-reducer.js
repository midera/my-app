const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Yaroslav'},
        {id: 2, name: 'Valentina'},
        {id: 3, name: 'Lina'},
        {id: 4, name: 'Oleg'},
        {id: 5, name: 'Artyom'}],
    messagesData: [
        {id: 1, message: 'i coming'},
        {id: 2, message: 'please call me'},
        {id: 3, message: 'Where are you'},
        {id: 4, message: 'Hi'},
        {id: 5, message: 'Why ?'}],
    newMessageBody: '',
}
const dialogsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.body
            }
        }

        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messagesData: [...state.messagesData, {id: 4, message: body}]
            };
        }
        default: {
            return state;
        }
    }
}
export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsPageReducer;
