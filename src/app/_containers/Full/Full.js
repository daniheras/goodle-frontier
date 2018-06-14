import React, {Component} from 'react';
import {Route, Redirect, Switch, NavLink} from 'react-router-dom';
import Dashboard from '../../_views/Dashboard/Dasshboard';
import Profile from '../../_views/Profile/Profile';
import Courses from '../../_views/Courses/Courses';
import Course from '../../_views/Course/Course';
import Messages from '../../_views/Messages/Messages';
import CreateCourse from '../../_views/CreateCourse/CreateCourse';
import Header from '../../_components/_structure/header/header';

import './full.scss';
import Sidebar from "../../_components/_structure/sidebar/sidebar";

import { Link } from 'react-router-dom';
import nav_links from '../../config/nav-links';

import { FaSliders, FaSignOut, FaBell } from 'react-icons/lib/fa';

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

        //Objeto que contiene la ruta actual
        const { match } = this.props;

        return (
            <div>
              <nav className="menu" tabIndex="0">
              	<div className="smartphone-menu-trigger"></div>
                <header className="avatar">
              		<img src="https://menhairstylist.com/wp-content/uploads/2017/04/chris-hemsworth-long-hairstyles-for-men.jpg" alt={'User'}/>
                  <h2>User</h2>
                  <div className="__info">
                    <div className="__item">
                        <FaSliders/>
                    </div>
                    <div className="__item">
                        <Link to='messages' key='messages'>
                            <FaBell/>
                        </Link>
                    </div>
                    <div className="__item" onClick={this.props.handleLogOut}>
                        <FaSignOut/>
                    </div>
                  </div>
                </header>
              	<div className={'nav_links'}>
                  {
                      nav_links.links.map( link => (

                          <NavLink to={link.link} key={link.key}>
                              <div className={'__menu-item'}>
                                  { link.icon }
                                  <span>
                                    { link.name }
                                  </span>
                              </div>
                          </NavLink>
                      ) )
                  }
                </div>
              </nav>

              <main>
                <div className={`app-canvas`}>
                    <Header/>
                    <div className={`container-fluid app-body`}>
                        <Switch>
                            <Route path={`${match.url}/dashboard`} name="Dashboard" component={Dashboard}/>
                            <Route path={`${match.url}/profile`} name="Profile" component={Profile}/>
                            <Route path={`${match.url}/messages`} name="Messages" component={Messages}/>
                            <Route exact path={`${match.url}/courses`} name="Courses" component={Courses}/>
                            <Route path={`${match.url}/courses/create`} name="Create Course" component={CreateCourse}/>
                            <Redirect from={`${match.url}`} to={`${match.url}/dashboard`}/>
                        </Switch>
                    </div>
                </div>
              </main>
            </div>
        );
    }

}

export default Full;
