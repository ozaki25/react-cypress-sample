import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 3em;
  padding: 0.3em;
  background: #e3f2fd;
  border-bottom: solid 5px #1565c0;
  margin: 0 0 15px;
`;

function Title(props) {
  return <H1 {...props} />;
}

export default Title;
