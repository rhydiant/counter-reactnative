import React from 'react';
import { Button } from 'react-native';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Counter } from '../../../src/components/Counter';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    increment: jest.fn(),
    counter: 0,
  };
  const enzymeWrapper = shallow(<Counter {...props} />);
  return {
    props,
    enzymeWrapper,
  };
}

describe('counter', () => {
  it('should render an increment button', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find(Button).props().title).toEqual('increment');
  });
});
