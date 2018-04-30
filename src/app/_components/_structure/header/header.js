import React from 'react';
import { FaBars } from 'react-icons/lib/fa';

import './header.scss';

const Header = props => (
    <div className={'header'} style={{padding: '2rem', background:'lightblue'}}>
        <button onClick={props.handleOffCanvas} style={{border: 'none', background: 'none'}}>
            <FaBars/>
        </button>
    </div>
);

export default Header;