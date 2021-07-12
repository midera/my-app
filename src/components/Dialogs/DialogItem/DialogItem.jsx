import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";
import React from "react";

const DialogsItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>

           <div> <img className={s.avaMessage}
                src="https://w7.pngwing.com/pngs/649/226/png-transparent-pin-up-girl-comics-pop-art-female-cartoon-hair-hair-beauty-call-woman-holding-green-telephone-illustration-cartoon-character-comics-face.png"
                alt="avaMessage"/></div>
            <NavLink to={path}>{props.name}</NavLink>

        </div>
    )
}
export default DialogsItem;
