import React, { Component } from 'react';

import './cursos.scss';
import axios from "axios/index";
import {$api_URL} from "../../config/constants";
import {Col, Row} from "reactstrap";
import CourseCard from "../../_components/course_card/CourseCard";

class Cursos extends Component{

    state = {
      courses: [],
    };

    componentWillMount(){
        axios.get($api_URL + '/courses/' + JSON.parse(sessionStorage.getItem('user')).id)
            .then(data => {
                let courses = data.data.map(course => (
                    course
                ));

                this.setState({
                    courses: courses,
                });
            })
            .catch(error => {
                console.log(error);
            });
    }
    
    render(){
        return (
            <div className={'fade-in'}>
                <h3>My<span className={'bold'}>Courses</span></h3>

                {
                    ( !this.state.courses.length ) && <div>You do not belong to any course</div>
                }

                <Row>
                    {
                        this.state.courses.map( (course, key) => (
                            <Col xs={12} md={4} xl={3} key={key}>
                                <CourseCard name={course.name} image={course.picture+key} description={course.description} category={course.category}/>
                            </Col>
                        ) )
                    }
                </Row>





            </div>
        );
    }    
};

export default Cursos; 