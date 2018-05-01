import React, {Component} from 'react';
import axios from 'axios'
import {Link, Switch, Route, Redirect} from 'react-router-dom';


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

        axios.post('http://goodle-api.local/register', data, {
            headers:{
            'Accept': 'application/json',
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
            <div className="animated fadeIn">
                <h1>Register</h1>
                <form method="POST">
                    <input type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange} />
                    <input type="text" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} />
                    <input type="password" placeholder="Password" name="password" value={this.state.repeatPassword} onChange={this.handleChange} />
                    <button onClick={this.handleRegister} >Register</button>
                </form>
            </div>
        )
    }
}

export default Register;
