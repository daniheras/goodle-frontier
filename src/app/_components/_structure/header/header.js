import React from 'react';
import { FaBars } from 'react-icons/lib/fa';

import './header.scss';

const Header = props => (
    <div className={'header'} style={{padding: '1rem'}}>
        <div className={'show-for-small-only'}>
            <button onClick={props.handleOffCanvas} style={{border: 'none', background: 'none', color: 'white'}}>
                <FaBars/>
            </button>
        </div>
    </div>
);

export default Header;