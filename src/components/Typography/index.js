import React from 'react';
import styled from 'styled-components';

const P = styled.p`
  font-size: 1.2em;
  font-weight: 600;
  margin: 0 0 15px;
`;

function Typography({ children }) {
  return <P>{children}</P>;
}

export default Typography;
