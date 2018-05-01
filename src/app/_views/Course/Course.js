import React, { Component } from 'react';

import axios from 'axios';
import './Course.scss';

import { $api_URL } from "../../config/constants";

// import { Modal, Button } from 'antd';

class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      courseInfo: {},
    };
  }

  componentWillMount() {
    axios.get($api_URL+'/course/' + this.state.id)
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

  render() {
    if (this.state.msg_error) {
      return (<div>{this.state.msg_error}</div>);
    }
    return (
      <div className="animated fadeIn">
        <h3>
          {this.state.courseInfo.name}
        </h3>
        <br/>
      </div>
    );
  }
}

export default Course;
