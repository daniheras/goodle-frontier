import React, {Component} from 'react';
import {Stepper} from "../../CreateCourse";
import {Redirect} from "react-router-dom";
import {Button} from "reactstrap";

class StepThree extends Component {

    render() {

        const { match } = this.props;

        return (
            <Stepper.Consumer>
                {
                    ({prev, step, handleSubmit}) => (
                        <div>
                            {/*If the step received is not the correct one then redirects to correct step*/}
                            <Redirect from={`${match.url}`} to={`${prev.url}/${step}`}/>

                            <Button color={'primary'} onClick={(e) => handleSubmit(e, 'end')}>
                                Create Course
                            </Button>
                        </div>
                    )
                }
            </Stepper.Consumer>
        );
    }

}

export default StepThree;
