import React, { Component } from 'react';

import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import CourseList from '../../_components/courseList/courseList';
import './Courses.scss';
import classnames from 'classnames';

class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
        activeTab: '1',
        typeCourse: 'myCourses',
        titleCourses: 'My Courses',
      };
    this.handleTypeCourses = this.handleTypeCourses.bind(this);
  }

  handleTypeCourses() {
    if (this.state.typeCourse === 'myCourses') {
      this.setState({
        typeCourse: 'allCourses',
        titleCourses: 'All Courses',
      });
    } else {
      this.setState({
        typeCourse: 'myCourses',
        titleCourses: 'My Courses',
      });
    }
  }

  render() {
    let link;
    if (this.state.typeCourse === 'myCourses') {
      link = 'View all courses availables';
    }else {
      link = 'View my courses';
    }
    return (
      <div className="animated fadeIn">
        <h3>{ this.state.titleCourses }</h3>
         <CourseList type={this.state.typeCourse}/>
         <div>
           <span className="link" onClick={this.handleTypeCourses}>{link}</span>
         </div>
      </div>
    );
  }
}

export default Courses;
