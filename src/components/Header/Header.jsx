import React from 'react';
import cl from './Header.module.css'
import { ReactComponent as YourSvg } from '../../logo.svg';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className={cl.header}>
            <div className={cl["header__row"]}>
                <Link to='/' className={cl["header__logo"]}>
                    <YourSvg/>
                </Link>
                <ul className={cl["header__list"]}>
                    <li className={cl["list__item"]}><Link to={'/'}>Shop</Link></li>
                    <li className={cl["list__item"]}><Link to={'/about'}>About me</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;