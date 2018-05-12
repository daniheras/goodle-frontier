import React, {Component} from 'react';

import './cursos.scss';
import axios from "axios/index";
import {$api_URL} from "../../config/constants";
import {Col, Row} from "reactstrap";
import VisibilityIcon from '@material-ui/icons/Visibility';
import {FaBook} from 'react-icons/lib/fa';
import {
    Avatar,
    IconButton,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText,
    TextField
} from "material-ui";
import List from "material-ui/es/List/List";
import Card from "../../_components/card/card";
import Link from "react-router-dom/es/Link";

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
                <Row>
                    <Col xs={12} sm={12} md={6}>
                        <Card style={{padding: '2rem'}}>
                            {
                                (!this.state.courses.length) && <div>You do not belong to any course</div>
                            }


                            <Row>
                                <Col xs={12}>
                                    <div className={'title'} style={{textAlign: 'center'}}>
                                        <h3><span><FaBook/></span> My<span className={'bold'}>Courses</span></h3>
                                    </div>
                                </Col>
                                <Col xs={12} className={'__search'}>
                                    {
                                        (this.state.courses.length !== 0) &&
                                        <TextField
                                            className={'__search'}
                                            name={'search'}
                                            label="Search"
                                            margin="normal"
                                            onChange={this.handleSearch}
                                        />
                                    }
                                </Col>
                            </Row>
                            <List>
                                {this.state.search.map((course, key) => (
                                        <ListItem key={key}>
                                            <ListItemAvatar>
                                                <Avatar
                                                    src={course.picture + course.id}/>
                                            </ListItemAvatar>
                                            <ListItemText primary={course.name} secondary={course.category}/>
                                            <ListItemSecondaryAction>
                                                <Link to={'/app/course/'+course.id}>
                                                    <IconButton>
                                                        <VisibilityIcon/>
                                                    </IconButton>
                                                </Link>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    )
                                )}
                            </List>


                        </Card>
                    </Col>
                </Row>


            </div>
        );
    }
};

export default Cursos;

