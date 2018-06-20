import React, {Component} from 'react';
import {Route, Redirect, Switch, NavLink} from 'react-router-dom';
import Dashboard from '../../_views/Dashboard/Dasshboard';
import Profile from '../../_views/Profile/Profile';
import Courses from '../../_views/Courses/Courses';
import Course from '../../_views/Course/Course';
import Task from '../../_views/Task/Task';
import Messages from '../../_views/Messages/Messages';
import CreateCourse from '../../_views/CreateCourse/CreateCourse';
import Header from '../../_components/_structure/header/header';
import CreateTask from '../../_views/CreateTask/CreateTask'
import CookiesPage from '../../_views/cookies/cookies'
import './full.scss';
import Sidebar from "../../_components/_structure/sidebar/sidebar";

import Cookies from 'universal-cookie';

import { Link } from 'react-router-dom';
import nav_links from '../../config/nav-links';

import { FaSliders, FaSignOut, FaBell } from 'react-icons/lib/fa';

const cookies = new Cookies();

class Full extends Component {

    state = {
        isMenuOpened: true,
        showCookies: true
    };

    componentWillMount() {
        let user = JSON.parse(sessionStorage.getItem('user'));
        this.setState({user: user});

        //Si la pantalla tiene menos de 700px de ancho el menu lateral comienza cerrado
        if (window.innerWidth < 700) {
            this.setState({isMenuOpened: false});
        }

        if (cookies.get('cookieMessage')) {
            this.setState({
                showCookies: false
            })
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

    handleCookie() {
        cookies.set('cookieMessage', '1', { expire: new Date().getUTCDate + 365 });
        this.setState({
            showCookies: false
        })
    }

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
                        <Link className="__item" to='/app/messages' key='messages'>
                            <FaBell/>
                        </Link>
                        <div className="__item" onClick={this.handleLogOut}>
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
                <a className="copyright" rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Licencia de Creative Commons" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a>

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
                                <Route path={`${match.url}/courses/create_task`} name="Create CourseTask" component={CreateTask}/>
                                <Route path={`${match.url}/courses/:courseId/subject/:subjectId/task/:taskId`} name="Task" component={Task}/>
                                <Route path={`${match.url}/cookies`} name="Cookies" component={CookiesPage}/>
                                <Route path={`${match.url}/courses/:id`} name="Create Course" component={Course}/>
                                <Redirect from={`${match.url}`} to={`${match.url}/dashboard`}/>
                            </Switch>
                        </div>
                    </div>
                </main>

                {
                    (this.state.showCookies) &&
                    <div className="alert alert-dismissible text-center cookiealert show" role="alert">
                        <div className="cookiealert-container">
                        By continuing to use this site you consent to the use of cookies on your device as described in our Cookie Policy unless you have disabled them. You can change your Cookie Settings at any time but parts of our site will not function correctly without them.
                            <Link to='/app/cookies' key='cookies'>
                                Learn more
                            </Link>
                            <button type="button" onClick={this.handleCookie.bind(this)} className="btn btn-primary btn-sm acceptcookies" aria-label="Close">
                                I agree
                            </button>
                        </div>
                    </div>
                }
            </div>
        );
    }

}

export default Full;
