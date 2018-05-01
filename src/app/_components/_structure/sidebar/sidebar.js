import React, {Component} from 'react';

import { Link } from 'react-router-dom';
import {
    FaDashboard,
    FaUser,
    FaSliders,
    FaSignOut,
    FaBell,
    FaBook
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
                        <div className="__item" onClick={this.handleLogOut}>
                            <FaSignOut/>
                        </div>
                    </div>
                </div>
                <div className={'__menu-item'}>
                    <FaDashboard/>
                    <Link to={'/app/dashboard'}>
                        Dashboard</Link>
                </div>
                <div className={'__menu-item'}>
                    <FaUser/>
                    <Link to={'/app/profile'}>
                        Profile</Link>
                </div>
                <div className={'__menu-item'}>
                    <FaBook/>
                    <Link to={'/app/courses'}>
                        Courses</Link>
                </div>
            </div>
        );
    }
};

export default Sidebar; 