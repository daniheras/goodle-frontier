import React from 'react';

import './card.scss';

const Card = props => (
    <div style={{padding: '1rem 0'}}>
        <div className={'gdle-card'}>
            {
                ( props.title ) &&
                <div className="__title" style={{background: props.color}}>
                    <div className="__time-info">
                        { props.time }
                    </div>
                    { props.title }
                </div>
            }
            <div className="__body">
                <span className={'__content'} style={{borderLeft: '2px solid '+props.color}}>
                    { props.children }
                </span>
            </div>
        </div>
    </div>
);

export default Card;