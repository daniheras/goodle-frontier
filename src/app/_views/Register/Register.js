import React, {Component} from 'react';
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom';

import './register.scss';

import { $api_URL } from "../../config/constants";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
        }
        this.handleRegister = this.handleRegister.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleRegister(e) {
        e.preventDefault();

        var data = JSON.stringify({
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
        });

        axios.post($api_URL+'/register', data, {
            headers:{
                'Content-Type': 'application/json',
            }
        })
        .then(response => {
            if (response.status === 201) {
                var data = JSON.stringify(response.data);
                console.log(data);
                this.setState({redirect: true});
                return data;
            }
        })
        .catch(error => {
            console.log(error.response.data.error);
            return error.response.data.error;
        })

    }

    handleChange(e) {
        let isValid = true;
        var obj = [];
        obj[e.target.name] = e.target.value;
        if (e.target.value !== '') {
            document.querySelector("label[for=" + e.target.name + "]").classList.add('top');
        } else {
            document.querySelector("label[for=" + e.target.name + "]").classList.remove('top');
        }
        if (e.target.name === 'email') {
            isValid = this._validateEmail(e.target.value);
            let errorMessage = isValid ? "" : "Email invalid";
            errorMessage = e.target.value === '' ? "Email required" : errorMessage;
            this.setState({
                emailError: errorMessage
            })
        } else if (e.target.name === 'password') {
            let passwordMessage = this._validatePassword(e.target.value) ? "" : "Password invalid";
            passwordMessage = e.target.value === '' ? "Password required" : passwordMessage;
            isValid = e.target.value !== '' && this._validatePassword(e.target.value);
            this.setState({
                passwordError: passwordMessage
            })
        }
        if (!isValid) {
            document.querySelector(".form-group." + e.target.name).classList.add('error');
        } else {
            document.querySelector(".form-group." + e.target.name).classList.remove('error');
        }
        this.setState(obj);
    }

    _validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    _validatePassword(password) {
        return true;
    }

    // TODO: messages info errors (unique fields...)
    // TODO: repeat password confirm
    render() {
        if (this.state.redirect) {
            return <Redirect push to="/auth/login" />;
        }
        return (
            <div className="fade-in register-page">
                {/*<Card className="register-form">
                    <h1>Sign<span>Up</span></h1>
                    <form method="POST">
                        <TextField
                            type={'email'}
                            name={'email'}
                            label="Email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            margin="normal"
                        />
                        <TextField
                            name={'username'}
                            label="UserName"
                            value={this.state.username}
                            onChange={this.handleChange}
                            margin="normal"
                        />
                        <TextField
                            type={'password'}
                            name={'password'}
                            label="Password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            margin="normal"
                        />
                        <div className="tip">
                            <Link to={'/auth/login'}>
                                Have an account?
                            </Link>
                        </div>
                        <Button color={'primary'} variant={'raised'} onClick={this.handleRegister}>Register</Button>
                    </form>
                </Card>*/}
                <div className="register-form">
                    <h1>Sign<span>Up</span></h1>
                    <form method="POST">
                        <div className="form-group email">
                            <label htmlFor="email">Email *</label>
                            <input type="text" name="email" id="email" onChange={this.handleChange}/>
                            <span>{this.state.emailError}</span>
                        </div>
                        <div className="form-group username">
                            <label htmlFor="username">UserName *</label>
                            <input type="text" id="username" name="username" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group password">
                            <label htmlFor="password">Password *</label>
                            <input type="password" id="password" name="password" onChange={this.handleChange}/>
                            <span>{this.state.passwordError}</span>
                        </div>
                        <div className="tip">
                            <Link to={'/auth/login'}>
                                Have an account?
                            </Link>
                        </div>
                        <button className="register-btn" onClick={this.handleRegister}>Register</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register;
