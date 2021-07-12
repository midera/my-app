import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return <header className={s.header}>
       <div className={s.titleBox}><h3 className={s.title}>BLOG & POST</h3></div>
        <div className={s.login}>
            <NavLink to={'/login'}>LOGIN</NavLink>
        </div>
    </header>
}
export default Header;
