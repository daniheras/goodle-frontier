import React, {Component} from 'react';

//import CourseList from '../../_components/courseList/courseList';
import './Courses.scss';
import axios from '../../config/axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CourseView = styled.div`

`;

class Courses extends Component {
    constructor(props){
        super(props);
        this.state = {
            userCourses: []
        }
    }
    componentWillMount() {
        axios.get('/courses/user')
            .then(res => {
                this.setState({
                    userCourses: res.data.user_courses,
                })
            })
    }

    render(){
        return (
            <CourseView>
                <h2>
                    Courses<span className={'bold'}>List</span>
                </h2>
                {this.state.userCourses ? this.state.userCourses.map(course => <Link key={course.id} to={'course/' + course.id}>{course.name}</Link>) : "No courses"}
            </CourseView>
        )
    }

}

export default Courses;
