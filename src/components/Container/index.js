import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  padding: 10px 15px;
`;

function Container({ children }) {
  return <Div>{children}</Div>;
}

export default Container;
