import React, {Component} from 'react';
import Recents from './_components/recents';
import MyCourses from './_components/myCourses.js';
import axios from '../../config/axios';

import './Courses.scss';

class Courses extends Component {

  state = {
    courses: [],
    recently: []
  }

  componentWillMount(){
    axios.get('/courses')
    .then( response => {
      if ( response.status === 200 ){
        this.setState({
          courses: response.data.user_courses
        })
      } else {
        console.log('ERROR')
      }
    })
  }

  render(){

    return (
      <section className={'courses_view fade-in'}>
          <MyCourses courses={this.state.courses}/>
          <Recents events={this.state.recently}/>
      </section>
    )
  }
}


export default Courses;
