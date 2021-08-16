import React from 'react';
import s from "./Users.Module.css"
import {NavLink} from "react-router-dom";



let Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return <div>
        <div>
            {pages.map(p => {
                return <button className={props.currentPage === p && s.selected}
                               onClick={(e) => {
                                   props.onPageChange(p);
                               }}>{p}</button>
            })}
        </div>
        {props.users.map(user => <div key={user.id}>
            <div>
                <NavLink to={'/profile/' + user.id}><img className={s.icon} src={user.avatar} alt="wrapper"/></NavLink>
            </div>
            <h3>{user.first_name} {" "}{user.last_name}</h3>
            <div>
                {user.email}
            </div>
            <div >

                {user.support
                    ? <button disabled={props.folLowInProgress.some(id => id ===user.id)} className={s.unfollow} onClick={() => {
                        props.unfollow(user.id)
                    }} >unfollow</button>
                    : <button disabled={props.folLowInProgress.some(id => id ===user.id)} className={s.button_add} onClick={() => {
                   props.follow(user.id)
                    }} >follow</button>}
            </div>
        </div>)
        }
    </div>
}
export default Users;
