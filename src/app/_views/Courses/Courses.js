import React, { Component } from 'react';

import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import CourseList from '../../_components/courseList/courseList';
import './Courses.scss';
import classnames from 'classnames';

class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
        activeTab: '2',
      };

    this.toggle = this.toggle.bind(this);
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    return (
      <div className="animated fadeIn">
          <div>
           <Nav tabs>
             <NavItem>
               <NavLink
                 className={classnames({ active: this.state.activeTab === '1' })}
                 onClick={() => { this.toggle('1'); }} >
                 All Courses
               </NavLink>
             </NavItem>
             <NavItem>
               <NavLink
                 className={classnames({ active: this.state.activeTab === '2' })}
                 onClick={() => { this.toggle('2'); }} >
                 My Courses
               </NavLink>
             </NavItem>
           </Nav>
           <TabContent activeTab={this.state.activeTab}>
             <TabPane tabId="1">
               <CourseList type="allCourses"/>
             </TabPane>
             <TabPane tabId="2">
               <CourseList type="myCourses"/>
             </TabPane>
           </TabContent>
         </div>
      </div>
    );
  }
}

export default Courses;
