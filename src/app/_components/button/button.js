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
  cursor: pointer;

  &.circle{
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 1rem;
    border-radius: 50%;
  }

  &.glow{
    box-shadow: 0 0 15px ${props => props.color};
  }
  
  &.disabled{
    background-color: #7f8c8d;
    box-shadow: 0 0 0;
    color: #95a5a6;
    cursor: not-allowed;
  }
`;

const Button = (props) => (
      <StyledButton
          color={props.color}
          className={`${props.variant} ${(props.glow) && 'glow'} ${(props.disabled) && 'disabled'}`}
      >
          {props.children}
      </StyledButton>
);

export default Button;
