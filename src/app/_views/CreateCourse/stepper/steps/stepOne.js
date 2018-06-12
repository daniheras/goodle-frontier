import React, {Component} from 'react';
import {Stepper} from "../../CreateCourse";
import Link from "react-router-dom/es/Link";
import Button from "../../../../_components/button/button";
import './steps.scss';
import { FaAngleRight } from 'react-icons/lib/fa';
import Pulse from 'react-reveal/Pulse';
import { colors } from "../../../../config/customization";
import {Col, Form, FormGroup, Input, Label} from "reactstrap";
import  EventCard from '../../../../_components/course_card/CourseCard'

class StepOne extends Component {

    state={
        courseName: 'Name',
        courseAvatar: 'https://yt3.ggpht.com/-Cg5Fj49ZlZg/AAAAAAAAAAI/AAAAAAAAAAA/rTNCQ4Rhloc/s100-mo-c-c0xffffffff-rj-k-no/photo.jpg'
    }

    handleChange = (e) => {
        this.setState({
            courseName: e.target.value
        })
    }

    render() {

        const { match } = this.props;

        return (
            <Stepper.Consumer>
                {
                    ({content, handleInput, prev, changeStep}) => (
                        <div>
                            <Form>
                                <FormGroup row>
                                    <Label for="courseName" sm={2}>Course Name*</Label>
                                    <Col sm={10}>
                                        <Input type="text" name="courseName" id="courseName" placeholder="Course Name" onChange={this.handleChange}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="courseCategory" sm={2}>Category*</Label>
                                    <Col sm={10}>
                                        <Input type="select" name="courseCategory" id="courseCategory" placeholder="Category">
                                            <option value="0">--Select Category--</option>
                                            <option value="1">Programación</option>
                                            <option value="2">Macramé</option>
                                            <option value="3">Administración de empresas</option>
                                            <option value="4">Otro</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="courseDescription" sm={2}>Description</Label>
                                    <Col sm={10}>
                                        <Input type="textarea" name="courseDescription" id="courseDescription" placeholder="Course description"/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="courseAvatar" sm={2}>Course Avatar</Label>
                                    <Col sm={10}>
                                        <Input type="file" name="courseAvatar" id="courseAvatar" placeholder="Course avatar" onChange={this.handleChange}/>
                                    </Col>
                                </FormGroup>
                            </Form>
                            <div className="course-preview">
                                <EventCard variant={'event'} data={{
                                    id: 1,
                                    course: {
                                        name: this.state.courseName,
                                        image: this.state.courseAvatar,
                                        people: 16,
                                        theme: 'city',
                                        color: 'rgba(52, 73, 94, .58)'
                                    },
                                    event: {
                                        date: '22/05/2018',
                                        info: 'Exercise 2'
                                    }
                                }}/>
                            </div>
                            {/*<Pulse>*/}
                                {/*<div className={'floating-next-step'}>*/}
                                    {/*<Link onClick={() => changeStep(2)} to={`${prev.url}/stepTwo`}>*/}
                                        {/*<Button color={colors.primary} variant={'circle'} glow><FaAngleRight/></Button>*/}
                                    {/*</Link>*/}
                                {/*</div>*/}
                            {/*</Pulse>*/}
                        </div>
                    )
                }
            </Stepper.Consumer>
        );
    }

}

export default StepOne;
