import React from 'react';
import Title from '.';
import note from './note.md';

export default {
  title: 'Title',
  parameters: {
    info: {
      text: note,
    },
  },
};

export const nomal = () => <Title>タイトル</Title>;
