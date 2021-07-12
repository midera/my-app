import FriendsItem from "./FriendsItem/FriendsItem";
import s from './Friends.module.css'
import React from "react";



const Friends = (props) => {

    let friendsElements = props.friendsData.map(d => <FriendsItem key={d.id} name={d.name} id={d.id}/>);

    return (
        <div className={s.nameFriends}>
            {friendsElements}
        </div>
    )
};
export default Friends;
