import React, {Component} from 'react';
import './CreateCourse.scss';
import {Switch, Route, Redirect} from 'react-router-dom';
import StepOne from './stepper/steps/stepOne.js';
import StepTwo from "./stepper/steps/stepTwo";
import StepThree from "./stepper/steps/stepThree";
import Bounce from 'react-reveal/Bounce';

export const Stepper = React.createContext();

class CreateCourse extends Component {

    state = {
        content: '',
        step: 1
    };

    handleInput = (e) => {
        this.setState({
            content: e.target.value
        })
    };

    changeStep = (step) => {
        this.setState({
            step: step
        })
    };

    render() {

        const {match} = this.props;

        return (
            <Stepper.Provider value={{...this.state, handleInput: this.handleInput, prev: match, changeStep: this.changeStep}}>
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
                                <Route path={`${match.url}/stepOne`} component={StepOne}/>
                                <Route path={`${match.url}/stepTwo`} component={StepTwo}/>
                                <Route path={`${match.url}/stepThree`} component={StepThree}/>
                                <Redirect from={`${match.url}`} to={`${match.url}/stepOne`}/>
                            </Switch>
                        </div>
                    </section>
                </main>
            </Stepper.Provider>
        );
    }

}

export default CreateCourse;
