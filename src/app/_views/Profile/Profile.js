import React, { Component } from 'react';

import { MdPerson } from 'react-icons/lib/md'

import Overlay from '../../_components/overlay/overlay';

import './profile.scss';

class Profile extends Component{

    componentWillMount(){
        let user = JSON.parse(sessionStorage.getItem('user'));
        this.setState({ user: user });
    }

    render(){
        return (
            <div className={'profile_view fade-in'}>
                <div className={'profile_view__content__title'}>
                    <Overlay color={'rgba(254, 107, 136, .6)'}>
                            <h2><MdPerson/> { this.state.user.username }<span className={'bold'}>Profile</span></h2>
                    </Overlay>
                </div>

                <div>
                    <section className="personal_info">
                        <header>
                            <h2>Peronal Info</h2>
                        </header>
                        <article>
                            <div className="avatar">
                                <img  src="https://menhairstylist.com/wp-content/uploads/2017/04/chris-hemsworth-long-hairstyles-for-men.jpg" alt="avatar"/>
                            </div>
                            <div className="info_content">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input />
                                </div>

                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input />
                                </div>

                                <div className="form-group">
                                    <label>Biography</label>
                                    <input />
                                </div>

                                <div className="form-group">
                                    <label>School / Organization</label>
                                    <input />
                                </div>



                            </div>
                        </article>
                    </section>

                    <section className="personal_info">
                        <header>
                            <h2>Peronal Info</h2>
                        </header>
                        <article>
                            <div className="account-data">
                                <div className="form-group">
                                    <label>UserName</label>
                                    <input />
                                </div>

                                <div className="form-group">
                                    <label>Email</label>
                                    <input />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input />
                                </div>

                                <div className="form-group">
                                    <label>Confirm Password</label>
                                    <input />
                                </div>
                            </div>
                        </article>
                    </section>
                </div>
            </div>
        )
    }

};

export default Profile;