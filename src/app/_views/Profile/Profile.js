import React, { Component } from 'react';

import { MdPerson } from 'react-icons/lib/md'

import { Row, Col } from 'reactstrap';
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
                                <Row>
                                    <Col xl="6">
                                        <div className="form-group">
                                            <label htmlFor="name">Name</label>
                                            <input id="name"/>
                                        </div>
                                    </Col>
                                    <Col xl="6">
                                        <div className="form-group">
                                            <label htmlFor="surname">Surname Name</label>
                                            <input id="surname"/>
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xl="12">
                                        <div className="form-group">
                                            <label htmlFor="biography">Biography</label>
                                            <input id="biography"/>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xl="6">
                                        <div className="form-group">
                                            <label htmlFor="school">School / Organization</label>
                                            <input id="school"/>
                                        </div>
                                    </Col>
                                </Row>



                            </div>
                        </article>
                    </section>

                    <section className="account_data">
                        <header>
                            <h2>Peronal Info</h2>
                        </header>
                        <article>
                            <div className="account-data">
                                <Row>
                                    <Col xl="3">
                                        <div className="form-group">
                                            <label htmlFor="username">UserName</label>
                                            <input id="username"/>
                                        </div>
                                    </Col>

                                    <Col xl="3">
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input id="email"/>
                                        </div>
                                    </Col>

                                    <Col xl="3">
                                        <div className="form-group">
                                            <label htmlFor="password">Password</label>
                                            <input id="password"/>
                                        </div>
                                    </Col>

                                    <Col xl="3">
                                        <div className="form-group">
                                            <label htmlFor="confirmpassword">Confirm Password</label>
                                            <input id="confirmpassword"/>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </article>
                    </section>
                </div>
            </div>
        )
    }

};

export default Profile;