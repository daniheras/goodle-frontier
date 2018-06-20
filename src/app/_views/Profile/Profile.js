import React, { Component } from 'react';

import { MdPerson } from 'react-icons/lib/md'

import {Container, Row, Col } from 'reactstrap';
import Overlay from '../../_components/overlay/overlay';
import Input from '../../_components/input/input';
import _ from 'lodash';
import axios from '../../config/axios';
import { OrbitSpinner } from 'react-epic-spinners'

import './profile.scss';

class Profile extends Component{

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSaveUserInfo = this.handleSaveUserInfo.bind(this);
        this.handleResetPassword = this.handleResetPassword.bind(this);
    }

    componentWillMount(){
        let user = JSON.parse(sessionStorage.getItem('user'));
        this.setState({ user: user, successResetPassword: false });
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

        let isValid = true;
        if (e.target.name === 'confirmPassword') {
            let confirmPasswordMessage = this._validatePassword(e.target.value) ? "" : "Passwords not match";
            isValid = e.target.value !== '' && this._validatePassword(e.target.value);
            this.setState({
                confirmPasswordError: confirmPasswordMessage
            })

            this.setState({
                restartPassword: isValid
            })
        }

        if (!isValid) {
            document.querySelector(".form-group-input." + e.target.name).classList.add('error');
        } else {
            document.querySelector(".form-group-input." + e.target.name).classList.remove('error');
        }

        this.setState({user:  input});
    }

    _validatePassword(password) {
        return this.state.user.password === password;
    }

    handleSaveUserInfo(e) {
        e.preventDefault();
        this.setState({
            saveLoading: true
        })
        //AXIOS: save user info
        let data = JSON.stringify({
            name: this.state.user.name,
            surname: this.state.user.surname,
            biography: this.state.user.biography,
            school: this.state.user.school,
            avatar: this.state.user.avatar
        });
        axios.post('/user/update', data)
            .then(response => {
                console.log("User updated");
                this.setState({
                    successsaveUserInfo: true,
                    saveLoading: false,
                })
                sessionStorage.setItem('user', JSON.stringify(response.data));
            })
            .catch(error => {
                this.setState({
                    saveErrorMessage: "Server error, try again later",
                    saveLoading: false
                })
            })
    }

    handleResetPassword() {

        this.setState({
            resetLoading: true
        })

        axios.post('/user/resetPassword', JSON.stringify({password: this.state.user.password}))
            .then(response => {
                this.setState({
                    successResetPassword: true,
                    resetLoading: false
                })
            })
            .catch(error => {
                this.setState({
                    resetErrorMessage: "Server error, try again later",
                    resetLoading: false
                })
            })
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
                                        <div className="avatar-image">
                                            <img  src={this.state.user.avatar} alt="avatar"/>
                                        </div>
                                        <Input type="text" class="avatar" name="avatar" id="avatar" label="Avatar" value={ this.state.user.avatar } handleChange={this.handleChange}/>
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
                                                <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                                                    <Input type="text" class="school" name="school" id="school" label="School" value={ this.state.user.school } handleChange={this.handleChange}/>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <button className="custom-button" onClick={this.handleSaveUserInfo}>Save</button>
                                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                        {(this.state.successsaveUserInfo) && <p className="text-center good">Update user info successful</p>}
                                                        <p className="text-center red">{this.state.saveErrorMessage}</p>
                                                    {(this.state.saveLoading)  && <OrbitSpinner color="#565aa1"/>}
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
                            <Container>
                                <Row className="account-data">
                                    <Col xs={12} sm={12} md={6} lg={6} xl={4}>
                                        <Input type="text" class="username" name="username" id="username" label="Username" value={ this.state.user.username } handleChange={this.handleChange} readOnly="true"/>
                                    </Col>

                                    <Col xs={12} sm={12} md={6} lg={6} xl={4}>
                                        <Input type="text" class="email" name="email" id="email" label="Email" value={ this.state.user.email } handleChange={this.handleChange} readOnly="true"/>
                                    </Col>
                                </Row>

                                <p className="text-center">Fill the following fields and click the button to reset the password</p>
                                <Row>
                                    <Col xs={12} sm={12} md={6} lg={6} xl={4}>
                                        <Input type="password" class="password" name="password" id="password" label="Password" value={ this.state.user.password } handleChange={this.handleChange}/>
                                    </Col>

                                    <Col xs={12} sm={12} md={6} lg={6} xl={4}>
                                        <Input type="password" class="confirmPassword" name="confirmPassword" id="confirmPassword" label="Confirm Password" value={ this.state.user.confirmpassword } handleChange={this.handleChange} errorMessage={this.state.confirmPasswordError}/>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <div>
                                            <button disabled={!this.state.restartPassword} className="custom-button" onClick={this.handleResetPassword}>Reset password</button>
                                            {(this.state.successResetPassword) && <p className="text-center good">Password reset successful</p>}
                                            <p className="text-center red">{this.state.resetErrorMessage}</p>
                                        </div>
                                        {(this.state.resetLoading)  && <OrbitSpinner color="#565aa1"/>}
                                    </Col>
                                </Row>
                            </Container>
                        </article>
                    </section>
                </div>
            </div>
        )
    }

};

export default Profile;