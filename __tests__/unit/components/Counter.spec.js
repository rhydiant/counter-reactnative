import React from 'react';
import renderer from 'react-test-renderer';
import { Counter } from '../../../src/components/Counter';

describe('counter', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
