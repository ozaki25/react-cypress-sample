import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '.';
import note from './note.md';

export default {
  title: 'Button',
  parameters: {
    info: {
      text: note,
    },
  },
};

export const nomal = () => (
  <Button onClick={action('clicked')}>Hello Button</Button>
);
