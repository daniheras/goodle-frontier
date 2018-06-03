import React from 'react';
import styled from 'styled-components';

//This components fits his relative parent with the color provided

// API
// color: string (color in HEX, RGB or RGBA);

const Overlay = styled.div`
  background: ${props => props.color};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export default Overlay;
