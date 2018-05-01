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
          console.log(error);
        });
  }

  render() {
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
