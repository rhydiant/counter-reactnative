import React from 'react';
import renderer from 'react-test-renderer';
import App from '../../../src/components/App';

test.skip('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
