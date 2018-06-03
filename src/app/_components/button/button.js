import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: none;
  background: ${props => props.color};
  font-weight: 700;
  padding: 0;
  margin: 0;
  font-size: 1rem;
  line-height: 1;
  color: #fff;

  &.circle{
    border-radius: 6px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
  }

  &.glow{

  }
`;

const Button = (props) => (
  <StyledButton
    color={props.color}
    className={`glow ${props.variant}`}
    >
      {props.children}
  </StyledButton>
);

export default Button;
