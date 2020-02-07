import React from 'react';
import Button from '../Button/Button';
import './sidebar.scss';
import Logo from '../../assets/images/ingenious-sygnet.png';
import ProfPic from '../../assets/images/oval2.png';
import Chevron from '../../assets/images/path-2.png';

function Sidebar() {
  return (
    <aside className="sidebar">
        <header className="sidebar-header">
        <span class="sidebar-header__wrap">
            <img src={Logo}  alt="logo"/>
            <h1 className="sidebar-header__heading">Recruitment Task</h1>
        </span>
        <Button title="Manage Team" primary />
        </header>
                
        <nav className="sidebar-navigation">
            <ul className="sidebar-navigation__list">
                <li className="sidebar-navigation__item sidebar-navigation__item--active">Dashboard</li>
                <li className="sidebar-navigation__item ">Contact</li>
                <li className="sidebar-navigation__item ">CRM</li>
                <li className="sidebar-navigation__item ">RFP</li>
                <li className="sidebar-navigation__item ">Proposals</li>
                <li className="sidebar-navigation__item ">Contracts</li>
                <li className="sidebar-navigation__item ">Projects</li>
                <li className="sidebar-navigation__item ">Materials</li>
                <li className="sidebar-navigation__item ">Accounting</li>
                <li className="sidebar-navigation__item ">Employees</li>
                <li className="sidebar-navigation__item ">My Schedule</li>
                <li className="sidebar-navigation__item ">Timesheet</li>
                <li className="sidebar-navigation__item ">Documents</li>
                <li className="sidebar-navigation__item ">Emails</li>
            </ul>
        </nav>

        <footer className="sidebar-footer">
            <div className="sidebar-footer__container">
                <img src={ProfPic} alt="profil img"/>
                <span className="sidebar-footer__wrap">
                    <p className="sidebar-footer__paragraph">Elizabeth Francis</p>
                    <h4 className="sidebar-footer__heading">HEAD OF PRODUCT</h4>
                </span>
            </div>
            <img src={Chevron} alt="chevron" className="sidebar-footer__icon" />
        </footer>
     
    </aside>
  );
}

export default Sidebar;
