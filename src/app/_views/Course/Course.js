import React, { Component } from 'react';
import './Course.scss';
import axios from '../../config/axios';
import Fade from 'react-reveal/Fade';
import Overlay from '../../_components/overlay/overlay';
import { $assets_URL } from '../../config/constants';
import Card from '../../_components/course_card/CourseCard';

class Course extends Component {

  courseId = this.props.match.params.id;

  state = {
    course: {},
    subjects: []
  };

  componentWillMount(){
    axios.get(`/courses/${this.courseId}`)
    .then( response => {
      this.setState({
        course: response.data
      });
    });

    axios.get(`/courses/${this.courseId}/subjects`)
    .then( response => {
      this.setState({
        subjects: response.data
      });
      console.log(response.data);
    });
  }

  render(){

    const {match} = this.props;

    return (
      <Fade>
        <div className={'course-view'}>
        
          <Fade>
            <div className="course-view__title">
              <Card variant={'course-title'} data={this.state.course}/>
            </div>
          </Fade>

          <Fade>
            <div className="course-view__subjects">
              { this.state.subjects.map( (subject, iteration) => (
                <div className="course-view__subjects__subject">
                  <div 
                  className="course-view__subjects__subject__title"
                  style={
                    (iteration % 2 === 0) ? {left: '1rem'} : {right: '1rem'}
                  }
                  >
                    {subject.order}. {subject.title}
                  </div>
                  <div className="course-view__subjects__subject__description">
                    {subject.description}
                  </div>
                  <div className="course-view__subjects__subject__tasks">

                  </div>
                </div>
              )) }
            </div>
          </Fade>

          

        </div>
      </Fade>
    )
  }
}

export default Course;