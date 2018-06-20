import React from 'react';
import FaQuestion from 'react-icons/lib/fa/question';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

import './input.scss';

const Input = props => (
    <div className={`form-group-input ${ props.class }`}>
        <label htmlFor={ props.id }> { props.label }</label>
        <input type={ props.type } id={ props.id } name={ props.name } defaultValue={ props.value } onChange={props.handleChange} readOnly={props.readOnly}/>
        <span>{props.errorMessage}</span>
        {(props.popover) && <FaQuestion onClick={props.handleClick}/>}
        <Popover placement="bottom" isOpen={props.popoverOpen} target={props.id} toggle={props.handleClick}>
            <PopoverBody>{props.popoverText}</PopoverBody>
        </Popover>
    </div>
);

export default Input;