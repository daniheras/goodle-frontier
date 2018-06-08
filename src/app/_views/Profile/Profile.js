import React, { Component } from 'react';

import { MdPerson } from 'react-icons/lib/md'

import { Row, Col } from 'reactstrap';
import Overlay from '../../_components/overlay/overlay';
import Input from '../../_components/input/input';

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
                            <h2><MdPerson/> { this.state.user.username }<span className={'bold'}> Profile</span></h2>
                    </Overlay>
                </div>

                <div>
                    <section className="personal_info">
                        <header>
                            <h2>Peronal Info</h2>
                        </header>
                        <article>
                            <Row>
                                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                    <div className="avatar">
                                        <img  src="https://menhairstylist.com/wp-content/uploads/2017/04/chris-hemsworth-long-hairstyles-for-men.jpg" alt="avatar"/>
                                    </div>
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={6} xl={6} className="info_content">
                                        <Row>
                                            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                <Input type="text" class="name active" name="name" id="name" label="Name" value={ this.state.user.name }/>

                                            </Col>
                                            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                <div className="form-group active">
                                                    <label htmlFor="surname">Surname Name</label>
                                                    <input id="surname" defaultValue={ this.state.user.surname }/>
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                <div className="form-group active">
                                                    <label htmlFor="biography">Biography</label>
                                                    <input id="biography" defaultValue={ this.state.user.biography }/>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                <div className="form-group active">
                                                    <label htmlFor="school">School / Organization</label>
                                                    <input id="school" defaultValue={ this.state.user.school }/>
                                                </div>
                                            </Col>
                                        </Row>
                                </Col>
                            </Row>
                        </article>
                    </section>

                    <section className="account_data">
                        <header>
                            <h2>Peronal Info</h2>
                        </header>
                        <article>
                            <Row className="account-data">
                                <Col xs={12} sm={12} md={6} lg={6} xl={3}>
                                    <div className="form-group active">
                                        <label htmlFor="username">UserName</label>
                                        <input id="username"  defaultValue={ this.state.user.username }/>
                                    </div>
                                </Col>

                                <Col xs={12} sm={12} md={6} lg={6} xl={3}>
                                    <div className="form-group active">
                                        <label htmlFor="email">Email</label>
                                        <input id="email" defaultValue={ this.state.user.email }/>
                                    </div>
                                </Col>

                                <Col xs={12} sm={12} md={6} lg={6} xl={3}>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input id="password"/>
                                    </div>
                                </Col>

                                <Col xs={12} sm={12} md={6} lg={6} xl={3}>
                                    <div className="form-group">
                                        <label htmlFor="confirmpassword">Confirm Password</label>
                                        <input id="confirmpassword"/>
                                    </div>
                                </Col>
                            </Row>
                        </article>
                    </section>
                </div>
            </div>
        )
    }

};

export default Profile;