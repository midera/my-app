import s from './Dialogs.module.css';
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";



const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogElements = state.dialogsData.map(d => <DialogsItem key={d.id} name={d.name} id={d.id}/>);
    let messageElements = state.messagesData.map(m => <Message key={m.id} message={m.message}/>);
    let newMessageBody = state.newMessageBody;

    let SendMessage = () => {
        props.sendMessage();
    };

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBodyCreator(body)
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                {dialogElements}
            </div>
            <div>
                {messageElements}</div>
            <div>
                <div>
                    <textarea placeholder='Enter your message' onChange={onNewMessageChange}
                              value={newMessageBody}
                              className={s.textareaSend}/>
                </div>
                <div>
                    <button className={s.buttonSend} onClick={SendMessage}>SEND</button>
                </div>
            </div>
        </div>
    )
};
export default Dialogs;
