import React from 'react'

import './header.scss';

export default function Header() {
    return (
        <header className="header">
           <div className="header__wrap">
           <button className="header__button">Selected app: <span>Application 1</span></button>
            <input type="text" className="header__search" placeholder="Search..."/>
           </div>
        </header>
    )
}
