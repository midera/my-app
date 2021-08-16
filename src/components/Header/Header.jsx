import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    return <header className={s.header}>
       <div className={s.titleBox}>
           <h2 className={s.title}>BLOG & POST</h2>
       </div>
        <div className={s.login}>
            {props.isAuth ? props.login : <NavLink to={'/login'}>LOGIN</NavLink>}
        </div>
    </header>
}
export default Header;
