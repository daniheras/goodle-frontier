import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    HashRouter,
    Redirect,
    Switch
} from 'react-router-dom';
import Dashboard from "../../_views/Dashboard/Dasshboard";
import Profile from "../../_views/Profile/Profile";
import Header from "../../_components/_structure/header/header";

import { OffCanvas, OffCanvasBody, OffCanvasMenu } from 'react-offcanvas';

class Full extends Component{

    state = {
      isMenuOpened: false,
    };

    handleOffCanvas = (event) => {
        this.setState({
           isMenuOpened: !this.state.isMenuOpened
        });
    };

    render(){
        return (
            <div>
                <OffCanvas width={300} transitionDuration={300} isMenuOpened={this.state.isMenuOpened} position={"left"}>
                    <OffCanvasBody className={"my-body-class"} style={{fontSize: '18px'}}>
                        <Header handleOffCanvas={this.handleOffCanvas}/>
                        <Switch>
                            <Route exact path="/app/dashboard" name="Dashboard" component={Dashboard}/>
                            <Route exact path="/app/profile" name="Profile" component={Profile}/>
                            {/*<Route path={"/app/profile/settings"} name={"Settings"} component={Settings}/>*/}
                            <Redirect from="/app" to="/app/dashboard"/>
                        </Switch>
                    </OffCanvasBody>
                    <OffCanvasMenu className={"my-menu-class"} style={{fontWeight: 'bold'}}>
                        <Link to={'/app/dashboard'}>Dashboard</Link>
                        <br/>
                        <Link to={'/app/profile'}>Profile</Link>
                    </OffCanvasMenu>
                </OffCanvas>
            </div>
        )
    }

}

export default Full;