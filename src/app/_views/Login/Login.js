import React, {Component} from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom';

import { $api_URL } from "../../config/constants";

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

        axios.post($api_URL+"/login", data, {
            headers:{
            'Accept': 'application/json',
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
            <div className="animated fadeIn">
                <h1>Login</h1>
                <div className="animated fadeIn">
                    <form action="http://goodle.test/login" method="POST">
                        <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.handleChange} />
                        <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
                        <button onClick={this.handleLogin} >Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;
