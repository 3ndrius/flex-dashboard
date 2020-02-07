import React from 'react'
import './filter.scss';
import Button from '../Button/Button';

export default function Filter() {
    return (
        <section className="filters">
            <header className="filters__header">
                <h3>Filters</h3>
            </header>
            <div className="filters__container">
                
                <div className="filters__wrap">
                <h4>SHOW</h4>
                    <ul className="filters__list">
                    <li className="filters__item"><input type="checkbox"/ ><span className="checkmark"></span> Status Details</li>
                    <li className="filters__item"><input type="checkbox" defaultChecked/><span className="checkmark"></span> Statistics</li>
                    <li className="filters__item"><input type="checkbox" defaultChecked/><span className="checkmark"></span> Users </li>
                    </ul>
                </div>
               <div className="filters__wrap">
               <h4>CLIENT</h4>
                <select className="filters__select">
                    <option value="default">- Select -</option>
                    <option value="opt1">Users</option>
                </select>
               </div>
              
            </div>
            <div className="filters__button">
            <Button title="Applay Filters" light />
            </div>
            
        </section>
    )
}
