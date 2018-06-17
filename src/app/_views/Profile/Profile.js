import React, { Component } from 'react';

import { MdPerson } from 'react-icons/lib/md'

import {Container, Row, Col } from 'reactstrap';
import Overlay from '../../_components/overlay/overlay';
import Input from '../../_components/input/input';
import _ from 'lodash';

import './profile.scss';

class Profile extends Component{

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount(){
        let user = JSON.parse(sessionStorage.getItem('user'));
        this.setState({ user: user });
    }

    componentDidMount() {
        let inputs = document.querySelectorAll('.form-group-input');
        _.map(inputs, input => {
            if (input.getElementsByTagName('input')[0].value) {
                input.getElementsByTagName('label')[0].classList.add('top');
            }
        })

    }

    handleChange(e) {
        let input = this.state.user;
        input[e.target.name] = e.target.value;
        if (e.target.value !== '') {
            document.querySelector("label[for=" + e.target.name + "]").classList.add('top');
        } else {
            document.querySelector("label[for=" + e.target.name + "]").classList.remove('top');
        }
        this.setState({user: input});
    }

    handleSaveUserInfo() {
        //AXIOS: save user info
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
                            <h2>Personal Info</h2>
                        </header>
                        <article>
                            <Container>
                                <Row>
                                    <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                                        <div className="avatar">
                                            <img  src="https://menhairstylist.com/wp-content/uploads/2017/04/chris-hemsworth-long-hairstyles-for-men.jpg" alt="avatar"/>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={8} lg={8} xl={8} className="info_content">
                                            <Row>
                                                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                    <Input type="text" class="name" name="name" id="name" label="Name" value={ this.state.user.name } handleChange={this.handleChange}/>

                                                </Col>
                                                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                    <Input type="text" class="surname" name="surname" id="surname" label="Surname" value={ this.state.user.surname } handleChange={this.handleChange}/>
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <Input type="text" class="biography" name="biography" id="biography" label="Biography" value={ this.state.user.biography } handleChange={this.handleChange}/>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                    <Input type="text" class="school" name="school" id="school" label="School" value={ this.state.user.school } handleChange={this.handleChange}/>
                                                </Col>
                                            </Row>
                                    </Col>
                                </Row>
                            </Container>
                        </article>
                    </section>

                    <section className="account_data">
                        <header>
                            <h2>Account Info</h2>
                        </header>
                        <article>
                            <Row className="account-data">
                                <Col xs={12} sm={12} md={6} lg={6} xl={3}>
                                    <Input type="text" class="username" name="username" id="username" label="Username" value={ this.state.user.username } handleChange={this.handleChange}/>
                                </Col>

                                <Col xs={12} sm={12} md={6} lg={6} xl={3}>
                                    <Input type="text" class="email" name="email" id="email" label="Email" value={ this.state.user.email } handleChange={this.handleChange}/>
                                </Col>

                                <Col xs={12} sm={12} md={6} lg={6} xl={3}>
                                    <Input type="password" class="password" name="password" id="password" label="Password" value={ this.state.user.password } handleChange={this.handleChange}/>
                                </Col>

                                <Col xs={12} sm={12} md={6} lg={6} xl={3}>
                                    <Input type="password" class="confirmpassword" name="confirmpassword" id="confirmpassword" label="Confirm Password" value={ this.state.user.confirmpassword } handleChange={this.handleChange}/>
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