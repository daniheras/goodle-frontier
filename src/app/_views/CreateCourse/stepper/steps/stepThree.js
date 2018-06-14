import React, {Component} from 'react';
import {Stepper} from "../../CreateCourse";
import {Redirect} from "react-router-dom";

class StepThree extends Component {

    render() {

        const { match } = this.props;

        return (
            <Stepper.Consumer>
                {
                    ({prev, step}) => (
                        <div>
                            {/*If the step received is not the correct one then redirects to correct step*/}
                            <Redirect from={`${match.url}`} to={`${prev.url}/${step}`}/>
                        </div>
                    )
                }
            </Stepper.Consumer>
        );
    }

}

export default StepThree;
