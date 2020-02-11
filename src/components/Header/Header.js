import React from 'react'

import './header.scss';
import Logo from '../../assets/images/ingenious-sygnet.png';

export default function Header() {
    return (
        <header className="header">
           <div className="header__wrap">
            <div className="header__wrapper">
            <img src={Logo} alt="logo-icon" className="header__logo"/>
           <button className="header__button">Selected app: <span>Application 1</span></button>
            </div>
            <div className="header__wrapper">
            <input type="text" className="header__search" placeholder="Search..."/>
            <button className="header__hamburger">
                <span className="stripe"></span>
            </button>
            </div>
           </div>
        </header>
    )
}
