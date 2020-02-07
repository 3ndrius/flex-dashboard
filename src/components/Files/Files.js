import React from 'react'
import './files.scss';
import SaveIcon from '../../assets/images/save.png';
import IconPRed from '../../assets/images/combined-shape_7.png';
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

                    <div className="files-__inner-wrap">
                    <div className="files-box--mini">
                        <img src={IconPRed} alt="icon" />
                    </div>
                    <div className="files-box--mini">
                        <img src={IconPRed} alt="icon" />
                    </div>
                    <div className="files-box--mini">
                        <img src={IconPRed} alt="icon" />
                    </div>
                    <div className="files-box--mini">
                        <img src={IconPRed} alt="icon" />
                    </div>
                    <div className="files-box--mini">
                        <img src={IconPRed} alt="icon" />
                    </div>
                    <div className="files-box--mini">
                        <img src={IconPRed} alt="icon" />
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
