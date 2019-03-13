import React from 'react';
import renderer from 'react-test-renderer';
import App from '../../../src/components/App';

describe('app', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
