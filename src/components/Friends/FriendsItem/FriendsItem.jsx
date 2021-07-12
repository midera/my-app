import s from "./FriendsItem.module.css";
import {NavLink} from "react-router-dom";

const FriendsItem = (props) => {

    let path = "/friends/" + props.id;

    return (
        <div className={s.friendsBox}>

            <img className={s.friendsAvatar}
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1L_CYNZluBCR29i7NIQKda8HNWaA1KnV5xZ1rNjn0gdPmoi5rTyzn7cZcV3-PIHcI_s&usqp=CAU"
                 alt=""/>
            <NavLink to={path}>{props.name}</NavLink>
            {/*<div>*/}
            {/*    <button  className={s.button_add}>Add </button>*/}
            {/*    <button className={s.button_remove}>Del</button>*/}
            {/*</div>*/}
        </div>
    )
}
export default FriendsItem;
