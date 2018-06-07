import React, {Component} from 'react';
import {Stepper} from "../../CreateCourse";
import Link from "react-router-dom/es/Link";

class StepTwo extends Component {

    render() {

        return (
            <Stepper.Consumer>
                {
                    ({content,prev,changeStep}) => (
                        <div>
                            <div>
                                {content}
                            </div>
                            <div>
                                <Link onClick={() => changeStep(3)} to={`${prev.url}/stepThree`}>Step three</Link>
                            </div>
                        </div>
                    )
                }
            </Stepper.Consumer>
        );
    }

}

export default StepTwo;
