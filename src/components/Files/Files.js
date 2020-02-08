import React from 'react'
import './files.scss';
import SaveIcon from '../../assets/images/save.png';
import IconPRed from '../../assets/images/combined-shape_7@3x.png';
import IconPRedMini from '../../assets/images/combined-shape_7.png';
import Img01 from '../../assets/images/rectangle_2.png';
import Img02 from '../../assets/images/rectangle.png';
import Img03 from '../../assets/images/combined-shape_5.png';
import Img04 from '../../assets/images/combined-shape_6.png';
import Img05 from '../../assets/images/rectangle_4.png';
export default function Files() {
    return (
        <section className="files">
            <header className="files__header">
                <h4>Files</h4>
                <img src={SaveIcon} alt="save icon" />
            </header>
            <div className="files__container">
                <h4>RECENTLY ADDES</h4>
                <div className="files__wrap">
                    <div className="files__box">
                        <img src={IconPRed} alt="pdf icon"/>
                    </div>

                    <ul >
                    <li >
                        <img src={Img01} alt="icon" />
                    </li>
                    <li >
                        <img src={Img02} alt="icon" />
                    </li>
                    <li >
                        <img src={Img03} alt="icon" />
                    </li>
                    <li >
                        <img src={Img04} alt="icon" />
                    </li>
                    <li >
                        <img src={IconPRedMini} alt="icon" />
                    </li>
                    <li >
                        <img src={Img05} alt="icon" />
                    </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
