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
import {InputGroup, InputGroupAddon} from "reactstrap/dist/reactstrap";
import {Redirect} from "react-router-dom";

class StepOne extends Component {

    state={
        courseName: 'Name',
        courseAvatar: 'https://yt3.ggpht.com/-Cg5Fj49ZlZg/AAAAAAAAAAI/AAAAAAAAAAA/rTNCQ4Rhloc/s100-mo-c-c0xffffffff-rj-k-no/photo.jpg',
        courseCategory: 'Category'
    };

    render() {

        const { match } = this.props;

        return (
            <Stepper.Consumer>
                {
                    ({content, handleName, handleCategory, handleAvatar, prev, handleSubmit, step}) => (
                        <div>
                            {/*If the step received is not the correct one then redirects to correct step*/}
                            <Redirect from={`${match.url}`} to={`${prev.url}/${step}`}/>
                            <Form onSubmit={(e) => handleSubmit(e,2)}>
                                <FormGroup row>
                                    <Label for="courseName" sm={2}>Course Name*</Label>
                                    <Col sm={10}>
                                        <Input type="text" name="courseName" id="courseName" placeholder="Course Name" onChange={handleName}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="courseCategory" sm={2}>Category*</Label>
                                    <Col sm={10}>
                                        <Input type="select" name="courseCategory" id="courseCategory" placeholder="Category" onChange={handleCategory}>
                                            <option value="">--Select Category--</option>
                                            <option value="Game Design">Game Design</option>
                                            <option value="Developing">Developing</option>
                                            <option value="Macramé">Macramé</option>
                                            <option value="Bussiness">Bussiness</option>
                                            <option value="Others">Others</option>
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
                                    {/*<Col sm={10}>*/}
                                        {/*<Input type="file" name="courseAvatar" id="courseAvatar" placeholder="Course avatar" onChange={this.handleAvatar}/>*/}
                                    {/*</Col>*/}
                                    <Col sm={10}>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">URL</InputGroupAddon>
                                            <Input type="text" name="courseAvatar" id="courseAvatar" placeholder="Place image url" onChange={handleAvatar}/>
                                        </InputGroup>
                                    </Col>
                                </FormGroup>


                                <FormGroup row>
                                    <button type={'submit'} className="btn btn-secondary text-light center">
                                        Siguiente
                                    </button>
                                </FormGroup>
                            </Form>
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
