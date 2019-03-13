import React from 'react';
import renderer from 'react-test-renderer';
import App from '../../../src/components/App';

describe('app', () => {
  it.skip('should render correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
