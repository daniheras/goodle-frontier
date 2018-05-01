import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';

import Login from '../../_views/Login/Login';
import Register from '../../_views/Register/Register';

// TODO: Add style
class Auth extends Component {

    render() {
        if (sessionStorage.getItem('user')) {
            return <Redirect push to="/app/dashboard" />;
        }

        return(
            <div className={'fade-in'}>
                <Switch>
                    <Route exact path="/auth/login" name="Login" component={Login}/>
                    <Route exact path="/auth/register" name="Register" component={Register}/>
                    <Redirect from="/auth" to="/auth/login"/>
                </Switch>
            </div>
        )

    }
}

export default Auth;
