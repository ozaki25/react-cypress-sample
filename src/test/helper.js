import React from 'react';
import renderer from 'react-test-renderer';

export const snapshot = (title, element) => {
  it(`should match snapshot: ${title}`, () => {
    expect(renderer.create(element).toJSON()).toMatchSnapshot();
  });
};
