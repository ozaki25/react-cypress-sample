import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  font-size: 1.2em;
  padding: 0.3em;
  border: none;
  border-bottom: 1px solid #9e9e9e;
  width: 1.8em;
  text-align: center;
`;

function TextInput(props) {
  return <Input {...props} />;
}

export default TextInput;
