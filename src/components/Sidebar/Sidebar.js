import React from 'react';
import Button from '../Button/Button';

function Sidebar() {
  return (
    <aside className="sidebar">
        <header className="sidebar-header">
            <img src="#" alt="logo"/>
            <h1>Recruitment Task</h1>
        </header>
        <Button title="Manage Team" primary />
        <hr />
            
        <nav className="sidebar-navigation">
            <ul className="sidebar-navigation__list">
                <li>Dashboard</li>
                <li>Contact</li>
                <li>CRM</li>
                <li>RFP</li>
                <li>Proposals</li>
                <li>Contracts</li>
                <li>Projects</li>
                <li>Materials</li>
                <li>Accounting</li>
                <li>Employees</li>
                <li>My Schedule</li>
                <li>Timesheet</li>
                <li>Documents</li>
                <li>Emails</li>
            </ul>
        </nav>

        <hr />

        <footer className="sidebar-footer">
            <img src="" alt="profil img"/>
            <span className="sidebar-footer__wrap">
                <h4 className="sidebar-footer__heading">Elizabeth Francis</h4>
                <p className="sidebar-footer__paragraph">HEAD OF PRODUCT</p>
            </span>
        </footer>
     
    </aside>
  );
}

export default Sidebar;
