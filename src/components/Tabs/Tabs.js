import React, {useState} from 'react'
import './tabs.scss';
import Img from '../../assets/images/oval_3.png';

export default function Tabs() {

    const [active, setActive] = useState(false);

    const handleTabs = () => {
        setActive(!active);
    }
    return (
        <section className="tabs">
            <header className="tabs__header">
                <ul className="tabs__list" onClick={handleTabs}>
                    <li className="tabs__item" style={active? {} : {borderBottom: '2px solid #2b8ff4'}}>
                        Request
                    </li>
                    <li className="tabs__item " style={active? {borderBottom: '2px solid #2b8ff4'} : {}}>
                        Activity Score
                    </li>
                </ul>
            </header>
            <div className="tabs__activity" style={active? {display: 'block'} : {display:'none'}}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis culpa sapiente sequi cumque vitae aperiam pariatur repellendus alias quis vel, voluptates hic qui quibusdam, recusandae error. Dicta ipsa magni eaque, culpa dolorem sequi quidem itaque labore accusantium voluptate nisi dolor perspiciatis minima, maxime numquam in repudiandae quae! Eligendi omnis ad beatae at error minima repellendus quasi debitis a? Modi animi dolorum vitae, aspernatur aliquam voluptatibus voluptatem nemo iste, doloremque quo ab! Cupiditate officiis totam assumenda modi voluptatibus maxime aperiam, fugit aspernatur quia, veritatis, dolorem sunt vitae perspiciatis quae quasi? Quibusdam, alias vel! Nesciunt saepe rerum quidem consectetur, et quam blanditiis.
                </div>
            <div className="tabs__wrap" style={active? {display: 'none'} : {display:'block'}}>
              <table className="tabs-table">
                  <thead className="tabs-table__header">
                    <tr>
                       <td > Description</td>
                        <td >Status</td>
                        <td >Due date</td>
                        <td >Responsible party</td>
                        <td >Send income</td>
                       <td > More</td>
                    </tr>
                    </thead>
                    <tbody className="tabs-table__body">
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
