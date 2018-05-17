import React, {Component} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import Dashboard from '../../_views/Dashboard/Dasshboard';
import Profile from '../../_views/Profile/Profile';
import Courses from '../../_views/Courses/Courses';
import Course from '../../_views/Course/Course';
import Header from '../../_components/_structure/header/header';
import Cursos from '../../_views/Cursos/Cursos';

//Components
// import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

import './full.scss';

import {OffCanvas, OffCanvasBody, OffCanvasMenu} from 'react-offcanvas';
import Sidebar from "../../_components/_structure/sidebar/sidebar";

class Full extends Component {

    state = {
        isMenuOpened: true,
    };

    componentWillMount() {
        let user = JSON.parse(sessionStorage.getItem('user'));
        this.setState({user: user});

        //Si la pantalla tiene menos de 700px de ancho el menu lateral comienza cerrado
        if (window.innerWidth < 700) {
            this.setState({isMenuOpened: false});
        }

    }

    handleOffCanvas = (event) => {
        this.setState({
            isMenuOpened: !this.state.isMenuOpened,
        });
    };

    handleLogOut = () => {
        sessionStorage.clear();
        this.setState({redirect: true});
    };

    render() {
        if (!sessionStorage.getItem('user')) {
            return <Redirect push to="/login"/>;
        }

        return (
            <div className={'fade-in app-layout'}>
                    <Sidebar 
                        user={this.state.user} 
                        handleLogOut={this.handleLogOut}
                        opened={this.state.isMenuOpened}
                        />
                    <div className={`app-canvas ${ (this.state.isMenuOpened) && 'opened' }`}>
                        <Header handleOffCanvas={this.handleOffCanvas}/>
                        <div className={`container-fluid app-body ${ (this.state.isMenuOpened) && 'opened'}`}>
                            <Switch>
                                <Route path="/app/dashboard" name="Dashboard" component={Dashboard}/>
                                <Route exact path="/app/profile" name="Profile" component={Profile}/>
                                <Route exact path="/app/courses" name="Courses" component={Courses}/>
                                <Route exact path="/app/course/:id" name="Course" component={Course}/>
                                <Route exact path="/app/cursos" name="Course" component={Cursos}/>
                                <Redirect from="/app" to="/app/dashboard"/>
                            </Switch>
                        </div>
                    </div>
            </div>
        );
    }

}

export default Full;
