import s from './Friends.module.css'
import React from "react";
import UsersContainer from "../Users/UsersContainer";





const Friends = (props) => {

    // let friendsElements = props.friendsData.map(d => <FriendsItem key={d.id} name={d.name} id={d.id}/>);

    return (
        <div className={s.nameFriends}>
            <UsersContainer/>
            {/*{friendsElements}*/}
        </div>
    )
};
export default Friends;
