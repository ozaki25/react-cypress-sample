import renderer from 'react-test-renderer';
import 'jest-styled-components';

export const snapshot = (title, element) => {
  it(`should match snapshot: ${title}`, () => {
    expect(renderer.create(element).toJSON()).toMatchSnapshot();
  });
};
