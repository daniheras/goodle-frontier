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
            <div>
              
            </div>
        )
    }

}

export default Courses;
