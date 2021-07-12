import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}
const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: 'Yaroslav'},
        {id: 2, name: 'Valentina'},
        {id: 3, name: 'Lina'},
        {id: 4, name: 'Oleg'},
        {id: 5, name: 'Artyom'}];
    let messagesData = [
        {id: 1, message: 'i coming'},
        {id: 2, message: 'please call me'},
        {id: 3, message: 'Where are you'},
        {id: 4, message: 'Hi'},
        {id: 5, message: 'Why ?'}];
    let dialogElements = dialogsData.map(d => <DialogsItem name={d.name} id={d.id}/>);
    let messageElements = messagesData.map(m => <Message message={m.message}/>);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
};
export default Dialogs;
