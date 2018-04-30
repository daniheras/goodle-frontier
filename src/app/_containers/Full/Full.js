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


//Components
import { FaDashboard, FaUser } from 'react-icons/lib/fa';

import './full.scss';

import { OffCanvas, OffCanvasBody, OffCanvasMenu } from 'react-offcanvas';

class Full extends Component{

    state = {
      isMenuOpened: true,
    };

    componentWillMount(){

        //Si la pantalla tiene menos de 700px de ancho el menu lateral comienza cerrado
        if( window.innerWidth < 700 ){
            this.setState({
                isMenuOpened: false
            })
        }

    }

    handleOffCanvas = (event) => {
        this.setState({
           isMenuOpened: !this.state.isMenuOpened
        });
    };

    render(){
        return (
            <div>
                <OffCanvas width={250} transitionDuration={300} isMenuOpened={this.state.isMenuOpened} position={"left"}>
                    <OffCanvasBody>
                        <Header handleOffCanvas={this.handleOffCanvas}/>
                        <div className={'container app-view'}>
                            <Switch>
                                <Route exact path="/app/dashboard" name="Dashboard" component={Dashboard}/>
                                <Route exact path="/app/profile" name="Profile" component={Profile}/>
                                {/*<Route path={"/app/profile/settings"} name={"Settings"} component={Settings}/>*/}
                                <Redirect from="/app" to="/app/dashboard"/>
                            </Switch>
                        </div>
                    </OffCanvasBody>
                    <OffCanvasMenu className={"side-menu"}>
                        <div className="__title">
                            Main<span>Menu</span>
                        </div>
                        <div className={'__menu-item'}>
                            <FaDashboard/>
                            <Link to={'/app/dashboard'}> Dashboard</Link>
                        </div>
                        <div className={'__menu-item'}>
                            <FaUser/>
                            <Link to={'/app/profile'}> Profile</Link>
                        </div>

                    </OffCanvasMenu>
                </OffCanvas>
            </div>
        )
    }

}

export default Full;