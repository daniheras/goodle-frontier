import React, {Component} from 'react';
import axios from '../../config/axios';
import { Redirect, Link } from 'react-router-dom';

import './login.scss';

//Components
import TextField from 'material-ui/TextField';
import Card from "material-ui/es/Card/Card";
import Button from "material-ui/es/Button/Button";

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

        axios.post("/auth/login", data)
        .then(response => {
            if (response.status === 200) {
                var data = JSON.stringify(response.data);
                sessionStorage.setItem('token', data);
                axios.get('/user', {headers: {'Authorization': "bearer " + JSON.parse(sessionStorage.getItem('token')).token}})
                    .then(info => {
                        sessionStorage.setItem('user', JSON.stringify(info.data));
                        this.setState({redirect: true});
                        })
            }
        })
        .catch(error => {
            console.log(error.response.data.error);
            return error.response.data.error;
        })


    }


    handleChange(e) {
        var obj = [];
        obj[e.target.name] = e.target.value;
        this.setState(obj);
    }

    render() {
        if (this.state.redirect) {
            return <Redirect push to="/app/dashboard" />;
        }
        return (
            <div className="fade-in login-page">
                <Card className={'login-form'}>
                    <h1>Goodle <span>Login</span></h1>
                    <div className="animated fadeIn">
                        <form action="http://goodle.test/login" method="POST">
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
                                <Link to={'#forgottenPassword'}>
                                    Forgotten password?
                                </Link>
                            </div>
                            <div className="tip">
                                <Link to={'/auth/register'}>
                                    Dont have an account yet?
                                </Link>
                            </div>
                            <Button type={'submit'} color={'primary'} variant={'raised'} onClick={this.handleLogin}>Login</Button>
                        </form>
                    </div>
                </Card>
            </div>
        )
    }
}

export default Login;
