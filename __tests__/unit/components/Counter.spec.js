import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Counter from '../../../src/components/Counter';
import store from '../../../src/redux/store';

test.skip('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Counter />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
