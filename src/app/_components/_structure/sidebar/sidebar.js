import React, {Component} from 'react';

import { Link } from 'react-router-dom';
import nav_links from '../../../config/nav-links';

import {
    FaSliders,
    FaSignOut,
    FaBell,
} from 'react-icons/lib/fa';

class Sidebar extends Component {

    render() {
        return (
            <div>
                <div className="__title">
                    Main<span>Menu</span>
                </div>
                <div className="__profile-section">
                    <div className="__thumbnail">
                        <img
                            src="https://menhairstylist.com/wp-content/uploads/2017/04/chris-hemsworth-long-hairstyles-for-men.jpg"
                            alt="profile_pic"/>
                    </div>
                    <div>
                        <span>{this.props.user.username}</span>
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
                        <div className={'__menu-item'} key={link.key}>
                            { link.icon }
                            <Link to={link.link}>
                                { link.name }</Link>
                        </div>
                    ) )
                }
            </div>
        );
    }
};

export default Sidebar; 