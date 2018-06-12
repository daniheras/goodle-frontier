import React, {Component} from 'react';
import './CreateCourse.scss';
import {Switch, Route, Redirect} from 'react-router-dom';
import StepOne from './stepper/steps/stepOne.js';
import StepTwo from "./stepper/steps/stepTwo";
import StepThree from "./stepper/steps/stepThree";
import Bounce from 'react-reveal/Bounce';
import CourseCard from "../../_components/course_card/CourseCard";

export const Stepper = React.createContext();

class CreateCourse extends Component {

    state = {
        content: '',
        step: 1,
        courseName: '',
        courseCategory: '',
        courseAvatar: 'http://via.placeholder.com/200x200',
        courseTheme: {theme: 'city'},
        courseColor: 'rgba(52, 73, 94, .58)',
    };

    handleName = (e) => {
        const value = e.target.value;

        this.setState({
            courseName: value
        })
    };

    handleAvatar = (e) => {
        let value = e.target.value;

        if( value === '' ){
            value = 'http://via.placeholder.com/200x200';
        }

        this.setState({
            courseAvatar: value
        })
    };

    handleCategory = (e) => {
        const value = e.target.value;

        this.setState({
            courseCategory: <span><strong>Category:</strong> {value}</span>
        })
    };

    handleTheme = (theme) => {
        this.setState({
            courseTheme: theme,
            courseColor: theme.recommendedColors[0]
        })
    };

    handleColor = (color) => {
      this.setState({
          courseColor: color
      })
    };

    //This function is the only one able to change the step.
    handleSubmit = (e,step) => {
        e.preventDefault();

        this.setState({
            step: step
        })
    };

    render() {

        const {match} = this.props;

        return (
            <Stepper.Provider value={
                {
                    ...this.state,
                    handleName: this.handleName,
                    handleCategory: this.handleCategory,
                    handleAvatar: this.handleAvatar,
                    prev: match,
                    handleSubmit: this.handleSubmit,
                    handleTheme: this.handleTheme,
                    handleColor: this.handleColor,
                }}>
                    <main className={'createCourse'}>
                        <section className={'createCourse__stepper'}>
                            <div className={'createCourse__stepper__steps'}>
                                <div className={'createCourse__stepper__steps__step'}>
                                    <Bounce when={this.state.step >= 1} unmountOnExit={false}>
                                        <div className={`circled-step ${( this.state.step === 1 ) && '--active'}`}>
                                            1
                                        </div>
                                    </Bounce>
                                </div>
                                <div className={'createCourse__stepper__steps__step'}>
                                    <Bounce when={this.state.step >= 2}>
                                        <div className={`circled-step ${( this.state.step === 2 ) && '--active'}`}>
                                            2
                                        </div>
                                    </Bounce>
                                </div>
                                <div className={'createCourse__stepper__steps__step'}>
                                    <Bounce when={this.state.step === 3}>
                                        <div className={`circled-step ${( this.state.step === 3 ) && '--active'}`}>
                                            3
                                        </div>
                                    </Bounce>
                                </div>
                            </div>
                            <div className={'createCourse__stepper__content'}>
                                <Switch>
                                    <Route path={`${match.url}/${1}`} component={StepOne}/>
                                    <Route path={`${match.url}/${2}`} component={StepTwo}/>
                                    <Route path={`${match.url}/${3}`} component={StepThree}/>
                                    <Redirect from={`${match.url}`} to={`${match.url}/${this.state.step}`}/>
                                </Switch>
                                <div className="course-preview">
                                    <CourseCard variant={'event'} data={{
                                        course: {
                                            name: this.state.courseName,
                                            image: this.state.courseAvatar,
                                            people: 16,
                                            theme: this.state.courseTheme.theme,
                                            color: this.state.courseColor
                                        },
                                        event: {
                                            date: '',
                                            info: this.state.courseCategory
                                        }
                                    }}/>
                                </div>
                            </div>
                        </section>
                    </main>
            </Stepper.Provider>
        );
    }

}

export default CreateCourse;
