import React, {Component} from 'react';

import './cursos.scss';
import axios from "axios/index";
import {$api_URL} from "../../config/constants";
import {Col, Row} from "reactstrap";
import CourseCard from "../../_components/course_card/CourseCard";
import {FaBook} from 'react-icons/lib/fa';
import {TextField} from "material-ui";

class Cursos extends Component {

    state = {
        courses: [],
        search: []
    };

    componentWillMount() {
        axios.get($api_URL + '/courses/' + JSON.parse(sessionStorage.getItem('user')).id)
            .then(data => {
                let courses = data.data.map(course => (
                    course
                ));

                this.setState({
                    courses: courses,
                    search: courses
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleSearch = (e) => {

        const searched = this.state.courses.filter(searched => searched.name.toUpperCase().includes(e.target.value.toUpperCase()));

        this.setState({
            search: searched
        });

    };

    render() {
        return (
            <div className={'fade-in'}>
                <div className={'title'}>
                    <h3><span><FaBook/></span> My<span className={'bold'}>Courses</span></h3>
                    {
                        (this.state.courses.length !== 0) &&
                        <TextField
                            className={'__search'}
                            name={'search'}
                            label="Search course"
                            margin="normal"
                            onChange={this.handleSearch}
                        />
                    }
                </div>

                {
                    (!this.state.courses.length) && <div>You do not belong to any course</div>
                }

                <Row>
                    {
                        this.state.search.map((course, key) => (
                            <Col xs={12} sm={6} md={4} lg={3} key={key}>
                                <CourseCard course={course}/>
                            </Col>
                        ))
                    }
                </Row>

            </div>
        );
    }
};

export default Cursos; 