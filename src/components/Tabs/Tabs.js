import React from 'react'
import './tabs.scss';
import Img from '../../assets/images/oval_3.png';

export default function Tabs() {
    return (
        <section className="tabs">
            <header className="tabs__header">
                <ul className="tabs__list">
                    <li className="tabs__item tabs__item--active">
                        Request
                    </li>
                    <li className="tabs__item ">
                        Activity Score
                    </li>
                </ul>
            </header>
            <div className="tabs__wrap">
            
              <table>
                    <th>
                        <tr>
                       <h2> Description</h2>
                        <h2>Status</h2>
                        <h2>Due date</h2>
                        <h2>Responsible party</h2>
                        <h2>Send income</h2>
                       <h2> More</h2>
                        </tr>
                    </th>
                    <tbody>
                        <tr>
                            <td>Lorem ipsum dolor</td>
                            <td>Solved</td>
                            <td>12/24/2019</td>
                            <td><span><img src={Img} alt="prof img" />Lucille Richards</span> </td>
                            <td>Yes</td>
                            <td>Solved</td>
                        </tr>
                        <tr>
                            <td>Lorem ipsum dolor</td>
                            <td>In Progress</td>
                            <td>12/24/2019</td>
                            <td><span><img src={Img} alt="prof img" />Lucille Richards</span> </td>
                            <td>Yes</td>
                            <td>Solved</td>
                        </tr>
                        <tr>
                            <td>Lorem ipsum dolor</td>
                            <td>Accepted</td>
                            <td>12/24/2019</td>
                            <td><span><img src={Img} alt="prof img" />Lucille Richards</span> </td>
                            <td>Yes</td>
                            <td>Solved</td>
                        </tr>
                    </tbody>
                    
                </table>
            </div>
        </section>
    )
}
