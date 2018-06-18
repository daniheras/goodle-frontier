import React, {Component} from 'react';
import axios from '../../config/axios';
import { Redirect, Link } from 'react-router-dom';
import Input from '../../_components/input/input';
import { OrbitSpinner } from 'react-epic-spinners'

import './login.scss';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loading: false
        }
        this.handleLogin = this.handleLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleLogin(e) {
        e.preventDefault();

        this.setState({
            errorMessage: "",
            loading: true
        })

        var data = JSON.stringify({
            username: this.state.username,
            password: this.state.password
        });

        axios.post("/auth/login", data)
        .then(response => {
            if (response.status === 200) {
                var data = JSON.stringify(response.data);
                sessionStorage.setItem('token', data);
                axios.get('/user', {headers: {'Authorization': "bearer " + JSON.parse(sessionStorage.getItem('token')).token}})
                    .then(info => {
                        sessionStorage.setItem('user', JSON.stringify(info.data));
                        this.setState({redirect: true, loading: false});
                        })
            }
        })
        .catch(error => {
            if (error.response.status === 404) {
                this.setState({
                    errorMessage: "Username or password invalid",
                    loading: false
                })
            } else if (error.response.status === 500) {
                this.setState({
                    errorMessage: "Server error, try again",
                    loading: false
                })
            }
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

        !isValid ? document.querySelector(".form-group-input." + e.target.name).classList.add('error') : document.querySelector(".form-group-input." + e.target.name).classList.remove('error');

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
                <header>
                    <h1>Login</h1>
                </header>

                <form method="POST">
                    <Input type="text" class="username" name="username" id="username" label="UserName *" handleChange={this.handleChange} errorMessage={this.state.usernameError}/>
                    <Input type="password" class="password" name="password" id="password" label="Password *" handleChange={this.handleChange} errorMessage={this.state.passwordError}/>

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
                    <button className="login-btn" onClick={this.handleLogin} disabled={ (this.state.username === '' || this.state.password === '') }>Login</button>
                    {(this.state.loading) && <OrbitSpinner color="#565aa1"/>}
                    <p className="error-message">{ this.state.errorMessage }</p>
                </form>
                </div>
            </div>
        )
    }
}

export default Login;
