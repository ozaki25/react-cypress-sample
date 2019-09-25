import React from 'react';
import { snapshot } from '../../test/helper';
import Typography from '.';

snapshot('Typography', <Typography>通常の文章です</Typography>);

snapshot(
  'Typography error text',
  <Typography error>エラーの文章です</Typography>,
);
