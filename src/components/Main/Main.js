import React, { useState, useEffect } from 'react'
import Button from '../Button/Button';
import Filters from '../Filters/Filter';
import Boxes from '../Boxes/Boxes';
import Widget from '../Widget/Widget';


import './main.scss';
import Files from '../Files/Files';
import Tabs from '../Tabs/Tabs';
import Plan from '../Plan/Plan';

export default function Main() {
    const [display, setDisplay] = useState(false);
// add and remove element wrap to organize layout
    useEffect(() => {
        function myFunction(x) {
            if (x.matches) { // If media query matches
              setDisplay(false)
            } else {
              setDisplay(true);
            }
          }
          
          let x = window.matchMedia("(min-width: 1560px)")
          myFunction(x) // Call listener function at run time
          x.addListener(myFunction) 
       
      });
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
                    <Filters />
                    {
                    !display ? <div className="span-wrap"> 
                         <Boxes/>
                        <Tabs />
                    </div> :
                        <React.Fragment>
                            <Boxes/>
                        <Tabs />
                        </React.Fragment>
                    }
                    <Files />
                    <div className="span">
                    <Plan />
                    <Widget />
                    </div>
                </div>
            </div>
        </main>
    )
}
