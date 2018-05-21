import React, {Component} from 'react';

//import CourseList from '../../_components/courseList/courseList';
import './Courses.scss';
import axios from '../../config/axios';

import styled from 'styled-components';

const CourseView = styled.div`
    
`;

class Courses extends Component {

    componentWillMount() {
        axios.get('/courses');
    }
    
    render(){
        return (
            <CourseView>
                <h2>
                    Courses<span className={'bold'}>List</span>
                </h2>
            </CourseView>
        )
    }

}

export default Courses;
