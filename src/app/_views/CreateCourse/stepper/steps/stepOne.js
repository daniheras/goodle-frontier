import React, {Component} from 'react';
import {Stepper} from "../../CreateCourse";
import Link from "react-router-dom/es/Link";

class StepOne extends Component {

    render() {

        const { match } = this.props;

        return (
            <Stepper.Consumer>
                {
                    ({content, handleInput, prev, changeStep}) => (
                        <div>
                            <div>
                                {match.history}
                                {content}
                            </div>
                            <div>
                                <input type="text" onChange={handleInput}/>
                            </div>
                            <div>
                                <Link onClick={() => changeStep(2)} to={`${prev.url}/stepTwo`}>Step Two</Link>
                            </div>
                        </div>
                    )
                }
            </Stepper.Consumer>
        );
    }

}

export default StepOne;
