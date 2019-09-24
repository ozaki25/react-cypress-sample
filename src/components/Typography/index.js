import React from 'react';
import styled from 'styled-components';

const P = styled.p`
  font-size: 1.2em;
  font-weight: 600;
  margin: 0 0 15px;
  color: ${({ error }) => (error ? '#d32f2f' : '#000')};
`;

function Typography({ children, error }) {
  return <P error={error ? 1 : 0}>{children}</P>;
}

export default Typography;
