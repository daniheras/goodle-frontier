import React, { Component } from 'react';

import axios from 'axios';
import './Course.scss';
import { Button } from 'material-ui';
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
    let token =JSON.parse(sessionStorage.getItem('user')).token;
    axios.get($api_URL + '/courses/user/' + this.state.id + '?current_user=1',
        {
            headers:{
                'Content-Type': 'application/json',
                'Authorization': "bearer " + token
            }
        }).then(data => {
          console.log(data);

          this.setState({
            courseInfo: data.data,
            admin: data.data.admin,
          });
        })
      .catch(error => {
          console.log(error.response.data.message);
          this.setState({
            msg_error: 'You are not registered in this course',
          });
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
        {(this.state.admin) ? <h4>You are the admin of this course</h4> : ""}
        <br/>
        <Button color="danger" onClick={this.handeleUnsubscribeCourse}>Unsubscribe Course</Button>
      </div>
    );
  }
}

export default Course;
