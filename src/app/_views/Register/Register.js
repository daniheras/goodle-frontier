import React, {Component} from 'react';
import axios from '../../config/axios';
import { Redirect, Link } from 'react-router-dom';
import Input from '../../_components/input/input';
import { OrbitSpinner } from 'react-epic-spinners'

import './register.scss';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            popoverOpen: false,
            loading: false
        }

        this.handleRegister = this.handleRegister.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    handleRegister(e) {
        e.preventDefault();
        this.setState({loading: true});

        var data = JSON.stringify({
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
        });

        axios.post('/register', data)
        .then(response => {
            if (response.status === 201) {
                var data = JSON.stringify(response.data);
                console.log(data);
                this.setState({redirect: true, loading: false});
            }
        })
        .catch(error => {
            let registerError = '';
            if (error.response) {
                registerError = "Register Error";
            }else {
                registerError =  "Register Error";
            }
            this.setState({registerError, loading: false});
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
            isValid = e.target.value !== '';
            this.setState({
                usernameError: usernameError
            })
        } else if (e.target.name === 'password') {
            let passwordMessage = e.target.value === '' ? "Password required" : passwordMessage;
            isValid = e.target.value !== '';
            this.setState({
                passwordError: passwordMessage
            })
        }else if (e.target.name === 'confirmPassword') {
            let confirmPasswordMessage = this._validatePassword(e.target.value) ? "" : "Passwords not match";
            confirmPasswordMessage = e.target.value === '' ? "Password required" : confirmPasswordMessage;
            isValid = e.target.value !== '' && this._validatePassword(e.target.value);
            this.setState({
                confirmPasswordError: confirmPasswordMessage
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
        return this.state.password === password;
    }

    toggle() {
        this.setState({
          popoverOpen: !this.state.popoverOpen
        });
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
                        <Input type="text" class="email" name="email" id="email" label="Email *" handleChange={this.handleChange} errorMessage={this.state.emailError} popover="true" popoverText="Please enter a valid e-mail address somebody@example.com" popoverOpen={this.state.popoverOpen} handleClick={this.toggle}/>
                        <Input type="text" class="username" name="username" id="username" label="Username *" handleChange={this.handleChange} errorMessage={this.state.usernameError}/>
                        <Input type="password" class="password" name="password" id="password" label="Password *" handleChange={this.handleChange} errorMessage={this.state.passwordError}/>
                        <Input type="password" class="confirmPassword" name="confirmPassword" id="confirmPassword" label="Confirm Password *" handleChange={this.handleChange} errorMessage={this.state.confirmPasswordError}/>



                        <div className="tip">
                            <Link to={'/auth/login'}>
                                Have an account?
                            </Link>
                        </div>
                        <button className="register-btn custom-button" onClick={this.handleRegister} disabled={ this.state.email === '' || this.state.username === '' || this.state.password === '' || this.state.confirmPassword === '' }>Register</button>
                        <p className="error-message">{ this.state.registerError }</p>
                        {(this.state.loading)  && <OrbitSpinner color="#565aa1"/>}
                    </form>
                </div>
            </div>
        )
    }
}

export default Register;
