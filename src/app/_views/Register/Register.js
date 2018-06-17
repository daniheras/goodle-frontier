import React, {Component} from 'react';
import axios from '../../config/axios';
import { Redirect, Link } from 'react-router-dom';
import Input from '../../_components/input/input';

import './register.scss';

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

        axios.post('/register', data)
        .then(response => {
            if (response.status === 201) {
                var data = JSON.stringify(response.data);
                console.log(data);
                this.setState({redirect: true});
            }
        })
        .catch(error => {
            console.log(error);
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
        } else if (e.target.name === 'username') {
            let usernameError = e.target.value === '' ? "Username required" : '';
            isValid = e.target.value !== '' && this._validatePassword(e.target.value);
            this.setState({
                usernameError: usernameError
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
            document.querySelector(".form-group-input." + e.target.name).classList.add('error');
        } else {
            document.querySelector(".form-group-input." + e.target.name).classList.remove('error');
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

    render() {
        if (this.state.redirect) {
            return <Redirect push to="/auth/login" />;
        }
        return (
            <div className="fade-in register-page">
                <div className="register-form">
                    <header>
                        <h1>SignUp</h1>
                    </header>
                    <form method="POST">
                        <Input type="text" class="email active" name="email" id="email" label="Email" handleChange={this.handleChange} errorMessage={this.state.emailError}/>
                        <Input type="text" class="username active" name="username" id="username" label="Username" handleChange={this.handleChange} errorMessage={this.state.usernameError}/>
                        <Input type="password" class="password active" name="password" id="password" label="Password" handleChange={this.handleChange} errorMessage={this.state.passwordError}/>

                        <div className="tip">
                            <Link to={'/auth/login'}>
                                Have an account?
                            </Link>
                        </div>
                        <button className="register-btn" onClick={this.handleRegister} disabled={ this.state.email === '' || this.state.username === '' || this.state.password === '' }>Register</button>
                        <p className="error-message">{ this.state.registerError }</p>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register;
