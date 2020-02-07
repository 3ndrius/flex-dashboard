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
                <h4>SHOW</h4>
                <div className="filters__wrap">
                    <input type="checkbox"/>
                    <input type="checkbox"/>
                    <input type="checkbox"/>
                </div>
                <h4>CLIENT</h4>
                <select>
                    <option value="default">- Select -</option>
                    <option value="opt1">Users</option>
                </select>
                <Button title="Applay Filters" light />
            </div>
        </section>
    )
}
