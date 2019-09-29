import React from 'react';
import Container from '.';
import note from './note.md';

export default {
  title: 'Container',
  parameters: {
    info: {
      text: note,
    },
  },
};

export const nomal = () => <Container>Hello</Container>;
