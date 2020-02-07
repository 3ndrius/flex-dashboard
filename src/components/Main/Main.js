import React from 'react'
import Button from '../Button/Button';
import Filters from '../Filters/Filter';
import Boxes from '../Boxes/Boxes';
import Widget from '../Widget/Widget';


import './main.scss';
import Files from '../Files/Files';
import Tabs from '../Tabs/Tabs';
import Plan from '../Plan/Plan';

export default function Main() {
    return (
        <main className="dashboard">
            <div className="wrapper">
                <header className="dashboard-header">
                    <h1 className="dashboard-header__heading">Dashboard</h1>
                    <div className="dashboard-header__wrap">
                        <Button title="CTA Button 1" shortLight/>
                        <Button title="CTA Button 2" short/>
                    </div>
                </header>

                <section className="dashboard-title">
                    <h2 className="dashboard-title__header">Team Management Dashboard</h2>
                    <div className="dashboard-title__dropdown">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                </section>
                <div className="content">
                    <div className="span1">
                    <Filters />
                    <Files />
                    </div>


                   <div className="span2">
                   <Boxes/>
                  
                    
                  <Tabs />
                  <div className="span3">
                  <Plan />
                  <Widget />
                  </div>
                   </div>
            
                </div>
            </div>
        </main>
    )
}
