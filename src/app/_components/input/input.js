import React from 'react';

import './input.scss';

const Input = props => (
    <div className={`form-group ${ props.class }`}>
        <label htmlFor={ props.id }> { props.label }</label>
        <input type={ props.type } id={ props.id } name={ props.name } defaultValue={ props.value } onChange={props.handleChange}/>
        <span>{props.errorMessage}</span>
    </div>
);

export default Input;