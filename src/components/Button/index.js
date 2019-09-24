import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  font-size: 1em;
  font-weight: 600;
  color: #1565c0;
  padding: 0.3em 0.8em;
  background: #fafafa;
  border: 1px solid #1565c0;
  border-radius: 0.1em;

  &:hover,
  &:active,
  &:focus {
    color: #fafafa;
    background-color: #1565c0;
  }
`;

function Button(props) {
  return <Btn {...props} />;
}

export default Button;
