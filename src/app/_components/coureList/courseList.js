import React, { Component } from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';

import './courseList.scss';

class CourseList extends Component{
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      courses: [],
      ready: false,
      courseModal: {
          title: '',
          description: '',
        },
      type: props.type,
    };
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentWillMount() {
    if (this.state.type === 'allCourses') {
      axios.get('http://goodle-api.local/courses')
        .then(data => {
            let courses = [];
            data.data.forEach(course => {
                courses.push(course);
              });
            this.setState({
                ready: true,
                courses: courses,
              });
          })
        .catch(error => {
            console.log(error);
          });
    } else if (this.state.type === 'myCourses') {
      axios.get('http://goodle-api.local/courses/' + JSON.parse(sessionStorage.getItem('user')).id)
        .then(data => {
            let courses = [];
            data.data.forEach(course => {
                courses.push(course);
              });
            this.setState({
                ready: true,
                courses: courses,
              });
          })
        .catch(error => {
            console.log(error);
          });
    }
  }

  showModal(name, description) {
    this.setState({
      visible: true,
      courseModal: {
          title: name,
          description: description,
        },
    });
  }

  handleOk(e) {
    this.setState({
      visible: false,
    });
  }

  handleCancel(e) {
    this.setState({
      visible: false,
    });
  }

  render() {
    let courses = [];
    if (!this.state.ready) {
      return (<div>No Courses</div>);
    } else {
      let coursess = this.state.courses;
      coursess.forEach((course, key) => {
        courses.push(
          <div key={key} >
            {course.name}
            <Button color="primary" onClick={(e) => this.showModal(course.name, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ')}>View</Button>
          </div>);
      });
    }

    return (
      <div >
        {courses}
        <Modal isOpen={this.state.visible} toggle={this.handleCancel} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.state.courseModal.title}</ModalHeader>
          <ModalBody>
            {this.state.courseModal.description}
          </ModalBody>
          <ModalFooter>
            {this.state.type === 'myCourses' ? <Button color="primary" onClick={this.handleOk}>OK</Button> : ''}
            <Button color="secondary" onClick={this.handleCancel}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default CourseList;
