import React from 'react';

import './card.scss';

const Card = props => (
    <div style={{padding: '1rem 0'}}>
        <div className={'gdle-card'}>
            <div className="__body">
                { props.children }
            </div>
        </div>
    </div>
);

export default Card;