import React from 'react';
import { action } from '@storybook/addon-actions';
import TextInput from '.';
import note from './note.md';

export default {
  title: 'TextInput',
  parameters: {
    info: {
      text: note,
    },
  },
};

export const nomal = () => <TextInput onChange={action('changed')} />;
