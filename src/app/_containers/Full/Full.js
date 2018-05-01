import React, { Component } from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import Dashboard from '../../_views/Dashboard/Dasshboard';
import Profile from '../../_views/Profile/Profile';
import Courses from '../../_views/Courses/Courses';
import Course from '../../_views/Course/Course';
import Header from '../../_components/_structure/header/header';

//Components
import {
  FaDashboard,
  FaUser,
  FaSliders,
  FaSignOut,
  FaBell,
  FaBook
} from 'react-icons/lib/fa';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

import './full.scss';

import { OffCanvas, OffCanvasBody, OffCanvasMenu } from 'react-offcanvas';

class Full extends Component {

  state = {
    isMenuOpened: true,
  };

  componentWillMount() {
    let user = JSON.parse(sessionStorage.getItem('user'));
    this.setState({ user: user });

    //Si la pantalla tiene menos de 700px de ancho el menu lateral comienza cerrado
    if (window.innerWidth < 700) {
      this.setState({ isMenuOpened: false });
    }

  }

  handleOffCanvas = (event) => {
    this.setState({
      isMenuOpened: !this.state.isMenuOpened,
    });
  };

  handleLogOut = () => {
    sessionStorage.clear();
    this.setState({ redirect: true });
  };

  render() {
    if (!sessionStorage.getItem('user')) {
      return <Redirect push="push" to="/login"/>;
    }

    return (
      <div className={'fade-in'}>
        <OffCanvas width={250} transitionDuration={300} isMenuOpened={this.state.isMenuOpened} position={'left'}>
          <OffCanvasBody>
            <Header handleOffCanvas={this.handleOffCanvas}/>
            <div className={'container-fluid app-view'}>
              {/* <Breadcrumb> */}
              {/* <BreadcrumbItem><a href="#Link">Home</a></BreadcrumbItem> */}
              {/* <BreadcrumbItem><a href="#Link">Bread</a></BreadcrumbItem> */}
              {/* <BreadcrumbItem active>Crumb</BreadcrumbItem> */}
              {/* </Breadcrumb> */}
              <Switch>
                <Route exact="exact" path="/app/dashboard" name="Dashboard" component={Dashboard}/>
                <Route exact="exact" path="/app/profile" name="Profile" component={Profile}/>
                {/* <Route path={"/app/profile/settings"} name={"Settings"} component={Settings}/> */}
                <Route exact="exact" path="/app/courses" name="Courses" component={Courses}/>
                <Route exact="exact" path="/app/course/:id" name="Course" component={Course}/>
                <Redirect from="/app" to="/app/dashboard"/>
              </Switch>
            </div>
          </OffCanvasBody>
          <OffCanvasMenu className={'side-menu'}>
            <div className="__title">
              Main<span>Menu</span>
            </div>
            <div className="__profile-section">
              <div className="__thumbnail">
                <img src="https://menhairstylist.com/wp-content/uploads/2017/04/chris-hemsworth-long-hairstyles-for-men.jpg" alt="profile_pic"/>
              </div>
              <div>
                <span>{this.state.user.username}</span>
              </div>
              <div className="__info">
                <div className="__item">
                  <FaSliders/>
                </div>
                <div className="__item">
                  <FaBell/>
                </div>
                <div className="__item" onClick={this.handleLogOut}>
                  <FaSignOut/>
                </div>
              </div>
            </div>
            <div className={'__menu-item'}>
              <FaDashboard/>
              <Link to={'/app/dashboard'}>
                Dashboard</Link>
            </div>
            <div className={'__menu-item'}>
              <FaUser/>
              <Link to={'/app/profile'}>
                Profile</Link>
            </div>
            <div className={'__menu-item'}>
              <FaBook/>
              <Link to={'/app/courses'}>
                Courses</Link>
            </div>

          </OffCanvasMenu>
        </OffCanvas>
    </div>
  );
  }

}

export default Full;
