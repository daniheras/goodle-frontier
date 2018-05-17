import React, {Component} from 'react';

import { Link } from 'react-router-dom';
import nav_links from '../../../config/nav-links';

import {
    FaSliders,
    FaSignOut,
    FaBell,
} from 'react-icons/lib/fa';

import './sidebar.scss';

class Sidebar extends Component {

    render() {

        return (
            <div className={`side-bar ${ (!this.props.opened) && 'closed' }`}>
                <div className="__title">
                    <span>Goodle</span>
                </div>
                <div className="__profile-section">
                    <div style={{textAlign: 'center', textTransform: 'capitalize', color: '#fff'}}>
                        <span>{this.props.user.username}</span>
                    </div>
                    <div className="__thumbnail">
                        <img
                            src="https://menhairstylist.com/wp-content/uploads/2017/04/chris-hemsworth-long-hairstyles-for-men.jpg"
                            alt="profile_pic"/>
                    </div>
                    <div className="__info">
                        <div className="__item">
                            <FaSliders/>
                        </div>
                        <div className="__item">
                            <FaBell/>
                        </div>
                        <div className="__item" onClick={this.props.handleLogOut}>
                            <FaSignOut/>
                        </div>
                    </div>
                </div>
                {
                    nav_links.links.map( link => (

                        <Link to={link.link} key={link.key}>
                            <div className={'__menu-item'}>
                                { link.icon }
                                    { link.name }
                            </div>
                        </Link>
                    ) )
                }
            </div>
        );
    }
};

export default Sidebar; 