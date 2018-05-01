import React, { Component } from 'react';

import axios from 'axios';
import { Button, TabContent, TabPane, Nav, NavItem, NavLink, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import CourseList from '../../_components/coureList/courseList';
import './Courses.scss';
import classnames from 'classnames';

// import { Modal, Button } from 'antd';

class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
        activeTab: '1',
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
                 My courses
               </NavLink>
             </NavItem>
             <NavItem>
               <NavLink
                 className={classnames({ active: this.state.activeTab === '2' })}
                 onClick={() => { this.toggle('2'); }} >
                 All courses
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
