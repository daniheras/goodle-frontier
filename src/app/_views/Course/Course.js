import React, { Component } from 'react';

import axios from 'axios';
import './Course.scss';
import { Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { $api_URL } from "../../config/constants";

class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      courseInfo: {},
      redirect: false,
    };
    this.handeleUnsubscribeCourse = this.handeleUnsubscribeCourse.bind(this);
  }

  componentWillMount() {
    axios.post($api_URL+'/course/' + this.state.id, { user_id: JSON.parse(sessionStorage.getItem('user')).id })
      .then(data => {
          this.setState({
            courseInfo: data.data[0],
          });
        })
      .catch(error => {
          console.log(error.response.data.error);
          if (error.response.data.error === 'This user is not registered in the required course') {
            this.setState({
              msg_error: 'You are not registered for this course',
            });
          }
        });
  }

  handeleUnsubscribeCourse() {
    console.log(this.state);
    axios.post($api_URL + '/unsubscribeCourse', { course_id: this.state.id, user_id: JSON.parse(sessionStorage.getItem('user')).id })
    .then(data => {
      console.log(data);
      this.setState({
        redirect: true,
      });
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to={'/app/courses/' } />;
    }

    if (this.state.msg_error) {
      return (<div>{this.state.msg_error}</div>);
    }

    return (
      <div className="animated fadeIn">
        <h3>
          {this.state.courseInfo.name}
        </h3>
        <br/>
        <Button color="danger" onClick={this.handeleUnsubscribeCourse}>Unsubscribe Course</Button>
      </div>
    );
  }
}

export default Course;
