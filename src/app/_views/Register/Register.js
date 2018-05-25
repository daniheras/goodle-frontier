import React, {Component} from 'react';
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom';

import './register.scss';

import { $api_URL } from "../../config/constants";
import Card from "material-ui/es/Card/Card";
import {TextField} from "material-ui";
import Button from "material-ui/es/Button/Button";


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
        var obj = [];
        obj[e.target.name] = e.target.value;
        this.setState(obj);
    }

    // TODO: messages info errors (unique fields...)
    // TODO: repeat password confirm
    render() {
        if (this.state.redirect) {
            return <Redirect push to="/auth/login" />;
        }
        return (
            <div className="fade-in register-page">
                <Card className="register-form">
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
                </Card>
            </div>
        )
    }
}

export default Register;
