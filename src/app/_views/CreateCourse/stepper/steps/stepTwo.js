import React, {Component} from 'react';
import {Stepper} from "../../CreateCourse";
import Link from "react-router-dom/es/Link";
import Redirect from "react-router-dom/es/Redirect";
import { themes } from '../../../../config/customization';
import CourseCard from "../../../../_components/course_card/CourseCard";
import _ from 'lodash';
import {Col, Row} from "reactstrap";
import {Fade} from "react-reveal";

class StepTwo extends Component {

    render() {

        const { match } = this.props;

        return (
            <Stepper.Consumer>
                {
                    ({prev,step, handleTheme, courseTheme, handleColor}) => (
                        <div>
                            {/*If the step received is not the correct one then redirects to correct step*/}
                            <Redirect from={`${match.url}`} to={`${prev.url}/${step}`}/>
                            <div className={'create-course-step-2'}>
                                <h3>Choose a theme</h3>

                                <div className="create-course-step-2__themes">
                                    <Row noGutters>
                                        {
                                            _.map(themes, (theme) => (
                                                <Col xs={6} sm={4} xl={3} key={theme.id}>
                                                    <div className="p-2">
                                                        <div onClick={() => handleTheme(theme)}>
                                                            <Fade>
                                                                <CourseCard variant={'void'} data={{theme: theme.theme, color: 'rgba(0,0,0,0)'}}/>
                                                            </Fade>
                                                        </div>
                                                    </div>
                                                </Col>
                                            ))
                                        }
                                    </Row>
                                </div>

                                <br/>
                                <h3>...and finally pick a color</h3>

                                <div className="create-course-step-2__themes">
                                    <Row noGutters>
                                        {
                                            _.map(courseTheme.recommendedColors, (color, key) => (
                                                <Col xs={6} sm={4} xl={3} key={key}>
                                                    <div className="p-2">
                                                        <div onClick={() => handleColor(color)}>
                                                            <Fade>
                                                                <CourseCard variant={'color'} data={{color: color}}/>
                                                            </Fade>
                                                        </div>
                                                    </div>
                                                </Col>
                                            ))
                                        }
                                    </Row>
                                </div>
                            </div>
                        </div>
                    )
                }
            </Stepper.Consumer>
        );
    }

}

export default StepTwo;
