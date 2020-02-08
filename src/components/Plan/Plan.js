
import React from 'react';
import './plan.scss';

export default function Plan() {
    return (
        <section className="plan">
            <h1 className="plan__heading">Upgrade your plan</h1>
            <p className="plan__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut leo tincidunt, pellentesque turpis eget, posuere ex. Cras interdum velit id pretium semper.</p>
            <div className="plan__wrap">
                <button className="plan__btn">Dismiss</button>
                <button className="plan__btn plan__btn--full">d</button>
                <button className="plan__btn plan__btn--grad">See Plans</button>
            </div>
        </section>
    )
}
