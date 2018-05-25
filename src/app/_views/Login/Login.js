import React, {Component} from 'react';
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom';

import { $api_URL } from "../../config/constants";

import './login.scss';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
        this.handleLogin = this.handleLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleLogin(e) {
        e.preventDefault();

        var data = JSON.stringify({
            username: this.state.username,
            password: this.state.password
        });

        axios.post($api_URL+"/auth/login", data, {
            headers:{
                'Content-Type': 'application/json',
            }
        })
        .then(response => {
            if (response.status === 200) {
                var data = JSON.stringify(response.data);
                sessionStorage.setItem('user', data);
                this.setState({redirect: true});
                return data;
            }
        })
        .catch(error => {
            console.log(error.response.data[0]);
            this.setState({
                errorMessage: error.response.data[0],
            })
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
        if ((e.target.name === 'username')) {
            let passwordMessage = e.target.value === '' ? "UserName required" : "";
            isValid = e.target.value !== '';
            this.setState({
                usernameError: passwordMessage
            })
        } else if (e.target.name === 'password') {
            let passwordMessage = this._validatePassword(e.target.value) ? "" : "Password invalid";
            passwordMessage = e.target.value === '' ? "Password required" : passwordMessage;
            isValid = e.target.value !== '' && this._validatePassword(e.target.value);
            this.setState({
                passwordError: passwordMessage
            })
        }

        !isValid ? document.querySelector(".form-group." + e.target.name).classList.add('error') : document.querySelector(".form-group." + e.target.name).classList.remove('error');

        this.setState(obj);
    }

    _validatePassword(password) {
        return true;
    }

    render() {
        if (this.state.redirect) {
            return <Redirect push to="/app/dashboard" />;
        }
        return (
            <div className="fade-in login-page">
                <div className="login-form">
                    <h1>Goodle<span>Login</span></h1>
                    <form method="POST">
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
                            <Link to={'#forgottenPassword'}>
                                Forgotten password?
                            </Link>
                        </div>
                        <div className="tip">
                            <Link to={'/auth/register'}>
                                Dont have an account yet?
                            </Link>
                        </div>
                        <button className="login-btn" onClick={this.handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;
