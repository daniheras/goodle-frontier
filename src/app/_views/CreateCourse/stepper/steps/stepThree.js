import React, {Component} from 'react';
import {Stepper} from "../../CreateCourse";

class StepThree extends Component {

    render() {
        return (
            <Stepper.Consumer>
                {
                    ({content}) => (
                        <div>
                            {content}
                        </div>
                    )
                }
            </Stepper.Consumer>
        );
    }

}

export default StepThree;
