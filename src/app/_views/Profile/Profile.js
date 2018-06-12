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
                                                <Input type="text" class="surname active" name="surname" id="surname" label="Surname" value={ this.state.user.surname }/>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                <Input type="text" class="biography active" name="biography" id="biography" label="Biography" value={ this.state.user.biography }/>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                <Input type="text" class="school active" name="school" id="school" label="School" value={ this.state.user.school }/>
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
                                    <Input type="text" class="username active" name="username" id="username" label="Username" value={ this.state.user.username }/>
                                </Col>

                                <Col xs={12} sm={12} md={6} lg={6} xl={3}>
                                    <Input type="text" class="email active" name="email" id="email" label="Email" value={ this.state.user.email }/>
                                </Col>

                                <Col xs={12} sm={12} md={6} lg={6} xl={3}>
                                    <Input type="password" class="password active" name="password" id="password" label="Password" value={ this.state.user.password }/>
                                </Col>

                                <Col xs={12} sm={12} md={6} lg={6} xl={3}>
                                    <Input type="password" class="confirmpassword active" name="confirmpassword" id="confirmpassword" label="Confirm Password" value={ this.state.user.confirmpassword }/>
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