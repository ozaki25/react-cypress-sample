import React from 'react';
import Typography from '.';
import note from './note.md';

export default {
  title: 'Typography',
  parameters: {
    info: {
      text: note,
    },
  },
};

export const nomal = () => <Typography>通常の文章です</Typography>;

export const error = () => <Typography error>エラーを表す文章です</Typography>;
