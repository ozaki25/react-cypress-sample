import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 3em;
  padding: 0.3em;
  background: #e3f2fd;
  border-bottom: solid 5px #1565c0;
`;

function Title({ children }) {
  return <H1>{children}</H1>;
}

export default Title;
