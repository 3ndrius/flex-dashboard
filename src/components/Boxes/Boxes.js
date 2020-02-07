import React from 'react'
import './boxes.scss';
import PersonI from '../../assets/images/combined-shape.png';
import PencilI from '../../assets/images/combined-shape_3.png';
import StarI from '../../assets/images/path.png';
import CheckI from '../../assets/images/shape.png';

export default function boxes() {
    return (
       <section className="boxes">
            <div className="boxes__wrap">
           <div className="boxes__round boxes__round--one">
                <img src={PersonI} alt="icon" />   
            </div> 
            <div className="boxes-wrap">
                <h4>Employees</h4>
                <p>21</p>
            </div>
        </div>
            <div className="boxes__wrap">
           <div className="boxes__round boxes__round--two">
                <img src={PencilI} alt="icon" />   
            </div> 
            <div className="boxes-wrap">
                <h4>Request</h4>
                <p>37</p>
            </div>
        </div>
            <div className="boxes__wrap">
           <div className="boxes__round boxes__round--three">
                <img src={StarI} alt="icon" />   
            </div> 
            <div className="boxes-wrap">
                <h4>Activity Score</h4>
                <p>8.5/10</p>
            </div>
        </div>
            <div className="boxes__wrap">
                <div className="boxes__round boxes__round--four">
                    <img src={CheckI} alt="icon" />   
                </div> 
                <div className="boxes-wrap">
                    <h4>Solved</h4>
                    <p>331</p>
                </div>
        </div>
       </section>
    )
}
