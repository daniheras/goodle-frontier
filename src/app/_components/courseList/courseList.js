import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';
import { $api_URL } from '../../config/constants';
import './courseList.scss';

class CourseList extends Component{
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      courses: [],
      allCourses: [],
      myCourses: [],
      ready: false,
      courseModal: {
          title: '',
          description: '',
        },
      type: props.type,
      redirectId: 0,
      redirect: false,
    };
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentWillMount() {
    axios.get($api_URL + '/courses')
     .then(data => {
        let courses = [];
        data.data.forEach(course => {
          courses.push(course);
        });
        this.setState({
          ready: true,
          allCourses: courses,
        });
      })
     .catch(error => {
        console.log(error);
      });
    axios.get($api_URL + '/courses/' + JSON.parse(sessionStorage.getItem('user')).id)
      .then(data => {
        let courses = [];
        data.data.forEach(course => {
            courses.push(course);
          });
        this.setState({
            ready: true,
            myCourses: courses,
            courses: courses,
          });
      })
    .catch(error => {
        console.log(error);
      });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.type !== this.state.type) {
      this.setState({
        courses: this.state[nextProps.type],
        type: nextProps.type,
      });
    }
  }

  showModal(id, name, description) {
    this.setState({
      visible: true,
      courseModal: {
          title: name,
          description: description,
        },
      redirectId: id,
    });
  }

  handleOk(e) {
    this.setState({
      visible: false,
      redirect: true,
    });
  }

  handleCancel(e) {
    this.setState({
      visible: false,
    });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to={'/app/course/' + this.state.redirectId } />;
    }

    let courses = [];
    if (!this.state.ready) {
      return (<div>Loading...</div>);
    } else {
      let coursess = this.state.courses;
      coursess.forEach((course, key) => {
        courses.push(
          <div key={key} >
            {course.name}
            <Button color="primary" onClick={(e) => this.showModal(course.id, course.name, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ')}>View</Button>
          </div>);
      });
      if (courses.length === 0) {
        courses = <div>No Courses</div>
      }
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