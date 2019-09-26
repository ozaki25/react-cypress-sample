import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '.';

export default {
  title: 'Button',
};

export const nomal = () => (
  <Button onClick={action('clicked')}>Hello Button</Button>
);
